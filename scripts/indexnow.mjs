#!/usr/bin/env node

/**
 * ==============================================================================
 * IndexNow Notification Engine — India Heritage Travel
 * Production Domain: https://indiaheritagetravel.com/
 * ==============================================================================
 *
 * This script automates URL submission to IndexNow (Bing & participating search engines)
 * when pages or content are added, updated, or deleted.
 *
 * Supported Modes:
 *   1. Git Diff Mode (default / --diff):
 *      Detects changed route & data files between commits and submits only modified URLs.
 *   2. Sitemap Mode (--all):
 *      Extracts and submits all canonical indexable URLs from sitemap as a safe sync.
 *   3. Custom URL Mode (--urls=url1,url2):
 *      Submits specific individual or comma-separated URLs.
 *   4. Dry Run Mode (--dry-run):
 *      Simulates URL detection and payload preparation without calling the API.
 * ==============================================================================
 */

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");

const CANONICAL_HOST = "indiaheritagetravel.com";
const BASE_URL = `https://${CANONICAL_HOST}`;
const INDEXNOW_PRIMARY_ENDPOINT = "https://api.indexnow.org/indexnow";
const INDEXNOW_FALLBACK_ENDPOINT = "https://www.bing.com/indexnow";

// -----------------------------------------------------------------------------
// 1. API Key Resolution
// -----------------------------------------------------------------------------

function getApiKey() {
  // 1. Check environment variable (Priority for CI/CD & Production)
  if (process.env.INDEXNOW_API_KEY && process.env.INDEXNOW_API_KEY.trim()) {
    return process.env.INDEXNOW_API_KEY.trim();
  }

  // 2. Check public directory for verification .txt file
  const publicDir = path.join(PROJECT_ROOT, "public");
  if (fs.existsSync(publicDir)) {
    const files = fs.readdirSync(publicDir);
    for (const file of files) {
      if (file.endsWith(".txt") && file.length >= 16) {
        const filePath = path.join(publicDir, file);
        try {
          const content = fs.readFileSync(filePath, "utf-8").trim();
          const baseName = path.parse(file).name;
          // Verification file name or content matching hex/alphanumeric key
          if (content === baseName && /^[a-zA-Z0-9_-]{16,128}$/.test(content)) {
            return content;
          }
        } catch {
          // Ignore read error and continue
        }
      }
    }
  }

  return null;
}

function maskKey(key) {
  if (!key) return "NONE";
  if (key.length <= 8) return "********";
  return `${key.slice(0, 4)}...${key.slice(-4)}`;
}

// -----------------------------------------------------------------------------
// 2. URL Normalization & Validation
// -----------------------------------------------------------------------------

export function normalizeUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== "string") return null;
  let urlStr = rawUrl.trim();
  if (!urlStr) return null;

  // Handle relative paths
  if (urlStr.startsWith("/")) {
    urlStr = `${BASE_URL}${urlStr}`;
  } else if (!/^https?:\/\//i.test(urlStr)) {
    urlStr = `${BASE_URL}/${urlStr}`;
  }

  try {
    const parsed = new URL(urlStr);

    // Filter out localhost / staging / IP hostnames
    const hostname = parsed.hostname.toLowerCase();
    if (
      hostname !== CANONICAL_HOST &&
      hostname !== `www.${CANONICAL_HOST}`
    ) {
      return null;
    }

    // Force canonical HTTPS and host
    parsed.protocol = "https:";
    parsed.host = CANONICAL_HOST;
    parsed.search = "";
    parsed.hash = "";

    // Normalize path: remove redundant slashes, trailing slash (unless root)
    let pathname = parsed.pathname.replace(/\/+/g, "/");
    if (pathname.length > 1 && pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }
    parsed.pathname = pathname;

    // Filter out asset files (images, fonts, scripts, styles)
    const assetExtensions = [
      ".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif", ".svg", ".ico",
      ".css", ".js", ".mjs", ".ts", ".tsx", ".json", ".xml", ".txt",
      ".woff", ".woff2", ".ttf", ".eot", ".mp4", ".pdf", ".zip"
    ];
    if (assetExtensions.some((ext) => pathname.toLowerCase().endsWith(ext))) {
      return null;
    }

    return parsed.toString();
  } catch {
    return null;
  }
}

export function deduplicateUrls(urls) {
  const validSet = new Set();
  for (const url of urls) {
    const normalized = normalizeUrl(url);
    if (normalized) {
      validSet.add(normalized);
    }
  }
  return Array.from(validSet);
}

// -----------------------------------------------------------------------------
// 3. Sitemap Extractor (Extracts all canonical indexable pages)
// -----------------------------------------------------------------------------

export function getAllSitemapUrls() {
  const urls = new Set();

  // Core Static Pages
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/faq",
    "/solo-women-travel",
    "/customize-your-journey",
    "/travel-tips-for-india",
    "/visa-rules-for-india",
    "/car-rental-india",
    "/blog",
    "/privacy-policy",
  ];
  staticRoutes.forEach((route) => urls.add(`${BASE_URL}${route === "/" ? "" : route}`));

  // Extract Blog Slugs from data file or folder structure
  try {
    const blogsDataPath = path.join(PROJECT_ROOT, "app", "blog", "data", "blogsData.ts");
    if (fs.existsSync(blogsDataPath)) {
      const content = fs.readFileSync(blogsDataPath, "utf-8");
      const matches = content.matchAll(/slug:\s*["']([^"']+)["']/g);
      for (const match of matches) {
        urls.add(`${BASE_URL}/blog/${match[1]}`);
      }
    }
  } catch (err) {
    console.warn(`[IndexNow Warning] Could not parse blogsData.ts: ${err.message}`);
  }

  // Scan app/blog directory for individual route folders
  try {
    const blogDir = path.join(PROJECT_ROOT, "app", "blog");
    if (fs.existsSync(blogDir)) {
      const entries = fs.readdirSync(blogDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && entry.name !== "components" && entry.name !== "data") {
          urls.add(`${BASE_URL}/blog/${entry.name}`);
        }
      }
    }
  } catch (err) {
    console.warn(`[IndexNow Warning] Could not scan app/blog: ${err.message}`);
  }

  // Extract Festival Slugs
  try {
    const festivalDataPath = path.join(PROJECT_ROOT, "src", "sections", "festivals", "data", "festivalData.ts");
    if (fs.existsSync(festivalDataPath)) {
      const content = fs.readFileSync(festivalDataPath, "utf-8");
      const matches = content.matchAll(/slug:\s*["']([^"']+)["']/g);
      for (const match of matches) {
        urls.add(`${BASE_URL}/festivals/${match[1]}`);
      }
    }
  } catch (err) {
    console.warn(`[IndexNow Warning] Could not parse festivalData.ts: ${err.message}`);
  }

  // Extract Tour Pages
  try {
    const toursDir = path.join(PROJECT_ROOT, "app", "tours");
    if (fs.existsSync(toursDir)) {
      const entries = fs.readdirSync(toursDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory()) {
          urls.add(`${BASE_URL}/tours/${entry.name}`);
        }
      }
    }
  } catch (err) {
    console.warn(`[IndexNow Warning] Could not scan app/tours: ${err.message}`);
  }

  return deduplicateUrls(Array.from(urls));
}

// -----------------------------------------------------------------------------
// 4. Git Diff Changed-URL Detection
// -----------------------------------------------------------------------------

export function getChangedFilesFromGit(fromRef, toRef) {
  try {
    let cmd = "git diff --name-status";
    if (fromRef && toRef) {
      cmd = `git diff --name-status ${fromRef} ${toRef}`;
    } else if (fromRef) {
      cmd = `git diff --name-status ${fromRef}`;
    } else {
      // Default to checking against previous commit
      cmd = "git diff --name-status HEAD~1 HEAD";
    }

    const output = execSync(cmd, { cwd: PROJECT_ROOT, encoding: "utf-8" });
    const lines = output.trim().split("\n").filter(Boolean);

    const changedFiles = [];
    for (const line of lines) {
      const parts = line.split(/\t+/);
      const status = parts[0];
      const filePath = parts[1];
      if (filePath) {
        changedFiles.push({ status, filePath: filePath.replace(/\\/g, "/") });
      }
    }
    return changedFiles;
  } catch (err) {
    console.warn(`[IndexNow Warning] Git diff execution failed (${err.message}). Checking unstaged or head commit.`);
    try {
      const output = execSync("git diff --name-status HEAD", { cwd: PROJECT_ROOT, encoding: "utf-8" });
      const lines = output.trim().split("\n").filter(Boolean);
      return lines.map((l) => {
        const parts = l.split(/\t+/);
        return { status: parts[0], filePath: (parts[1] || "").replace(/\\/g, "/") };
      });
    } catch {
      return [];
    }
  }
}

export function mapFilesToUrls(changedFiles) {
  const urls = new Set();
  let layoutOrGlobalChanged = false;
  let sitemapChanged = false;

  for (const { filePath } of changedFiles) {
    const normalizedPath = filePath.toLowerCase();

    // 1. Root Homepage
    if (normalizedPath === "app/page.tsx" || normalizedPath === "app/page.jsx" || normalizedPath === "app/page.js") {
      urls.add(`${BASE_URL}`);
      continue;
    }

    // 2. Global layout or sitemap
    if (normalizedPath === "app/sitemap.ts" || normalizedPath === "app/robots.ts") {
      sitemapChanged = true;
      continue;
    }
    if (normalizedPath === "app/layout.tsx" || normalizedPath === "app/globals.css") {
      layoutOrGlobalChanged = true;
      continue;
    }

    // 3. Blog Data file changes -> find affected blog slugs or include /blog
    if (normalizedPath === "app/blog/data/blogsdata.ts") {
      urls.add(`${BASE_URL}/blog`);
      // Try to parse diff or include all blogs
      try {
        const diffOutput = execSync("git diff -U0 HEAD~1 HEAD -- app/blog/data/blogsData.ts", {
          cwd: PROJECT_ROOT,
          encoding: "utf-8",
        });
        const matches = diffOutput.matchAll(/slug:\s*["']([^"']+)["']/g);
        for (const match of matches) {
          urls.add(`${BASE_URL}/blog/${match[1]}`);
        }
      } catch {
        urls.add(`${BASE_URL}/blog`);
      }
      continue;
    }

    // 4. Festival Data file changes
    if (normalizedPath.includes("festivaldata.ts")) {
      urls.add(`${BASE_URL}/festivals`);
      try {
        const diffOutput = execSync(`git diff -U0 HEAD~1 HEAD -- "${filePath}"`, {
          cwd: PROJECT_ROOT,
          encoding: "utf-8",
        });
        const matches = diffOutput.matchAll(/slug:\s*["']([^"']+)["']/g);
        for (const match of matches) {
          urls.add(`${BASE_URL}/festivals/${match[1]}`);
        }
      } catch {
        // Handled below
      }
      continue;
    }

    // 5. Individual Blog post directory / page
    const blogMatch = filePath.match(/^app\/blog\/([^/]+)\/(page|layout)\.(tsx|jsx|js|ts)$/i);
    if (blogMatch && blogMatch[1] !== "components" && blogMatch[1] !== "data") {
      urls.add(`${BASE_URL}/blog/${blogMatch[1]}`);
      urls.add(`${BASE_URL}/blog`);
      continue;
    }

    // 6. Blog root page or components
    if (filePath.startsWith("app/blog/")) {
      const parts = filePath.split("/");
      if (parts.length >= 3 && parts[2] !== "components" && parts[2] !== "data") {
        urls.add(`${BASE_URL}/blog/${parts[2]}`);
      }
      urls.add(`${BASE_URL}/blog`);
      continue;
    }

    // 7. Tour pages
    const tourMatch = filePath.match(/^app\/tours\/([^/]+)\//i);
    if (tourMatch) {
      urls.add(`${BASE_URL}/tours/${tourMatch[1]}`);
      continue;
    }

    // 8. Festival dynamic pages
    const festivalDetailMatch = filePath.match(/^src\/sections\/festivals\/festivalDetails\/([^/]+)\//i);
    if (festivalDetailMatch) {
      urls.add(`${BASE_URL}/festivals/${festivalDetailMatch[1]}`);
      continue;
    }
    if (filePath.startsWith("app/festivals/")) {
      urls.add(`${BASE_URL}/festivals`);
      continue;
    }

    // 9. Other App router top-level static pages
    const topPageMatch = filePath.match(/^app\/([^/]+)\/(page|layout|sections)\./i);
    if (topPageMatch && !["api", "components", "context", "hooks", "utils"].includes(topPageMatch[1])) {
      urls.add(`${BASE_URL}/${topPageMatch[1]}`);
      continue;
    }

    // 10. Generic app/[route] subdirectory
    const appRouteMatch = filePath.match(/^app\/([^/]+)\//i);
    if (appRouteMatch && !["api", "components", "context", "hooks", "utils"].includes(appRouteMatch[1])) {
      urls.add(`${BASE_URL}/${appRouteMatch[1]}`);
      continue;
    }
  }

  return {
    urls: deduplicateUrls(Array.from(urls)),
    layoutOrGlobalChanged,
    sitemapChanged,
  };
}

// -----------------------------------------------------------------------------
// 5. IndexNow HTTP Submitter
// -----------------------------------------------------------------------------

export async function submitToIndexNow(urls, apiKey, dryRun = false) {
  if (!urls || urls.length === 0) {
    console.log("[IndexNow] No relevant URLs to submit.");
    return { success: true, submitted: 0, status: 200, message: "No URLs changed" };
  }

  if (!apiKey) {
    console.error("[IndexNow Error] API key is missing. Set INDEXNOW_API_KEY environment variable or verify public key file.");
    return { success: false, submitted: 0, status: 401, message: "Missing API Key" };
  }

  const keyLocation = `${BASE_URL}/${apiKey}.txt`;

  const payload = {
    host: CANONICAL_HOST,
    key: apiKey,
    keyLocation: keyLocation,
    urlList: urls,
  };

  console.log("------------------------------------------------------------------");
  console.log(`[IndexNow] Host: ${CANONICAL_HOST}`);
  console.log(`[IndexNow] Key: ${maskKey(apiKey)} (Verification: ${keyLocation})`);
  console.log(`[IndexNow] URLs to submit (${urls.length}):`);
  urls.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));
  console.log("------------------------------------------------------------------");

  if (dryRun) {
    console.log("[IndexNow DRY RUN] Request was NOT sent to API endpoints.");
    return { success: true, submitted: urls.length, status: 200, message: "Dry run completed successfully" };
  }

  // Attempt Primary Endpoint
  let response;
  let endpointUsed = INDEXNOW_PRIMARY_ENDPOINT;

  try {
    console.log(`[IndexNow] Submitting payload to ${endpointUsed}...`);
    response = await fetch(endpointUsed, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "User-Agent": "IndiaHeritageTravel-IndexNow-Automation/1.0",
      },
      body: JSON.stringify(payload),
    });
  } catch (primaryErr) {
    console.warn(`[IndexNow Warning] Primary endpoint failed (${primaryErr.message}). Retrying fallback: ${INDEXNOW_FALLBACK_ENDPOINT}`);
    try {
      endpointUsed = INDEXNOW_FALLBACK_ENDPOINT;
      response = await fetch(endpointUsed, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": "IndiaHeritageTravel-IndexNow-Automation/1.0",
        },
        body: JSON.stringify(payload),
      });
    } catch (fallbackErr) {
      console.error(`[IndexNow Error] Fallback endpoint also failed: ${fallbackErr.message}`);
      return { success: false, submitted: 0, status: 500, message: fallbackErr.message };
    }
  }

  const status = response.status;
  let responseBodyText = "";
  try {
    responseBodyText = await response.text();
  } catch {
    // Ignore body read errors
  }

  if (status === 200 || status === 202) {
    console.log(`[IndexNow SUCCESS] HTTP ${status} from ${endpointUsed}`);
    console.log(`[IndexNow] Successfully submitted ${urls.length} URL(s) to search engines.`);
    if (status === 202) {
      console.log(`[IndexNow] Note: HTTP 202 indicates request was accepted and is queued for indexing by search engines.`);
    }
    return { success: true, submitted: urls.length, status, message: "Submission successful" };
  }

  // Handle specific error codes
  console.error(`[IndexNow FAILED] HTTP ${status} from ${endpointUsed}`);
  switch (status) {
    case 400:
      console.error("[IndexNow Error 400] Bad Request: Invalid format or parameters.");
      break;
    case 403:
      console.error(`[IndexNow Error 403] Forbidden: Key not valid or key file not found at ${keyLocation}.`);
      break;
    case 422:
      console.error("[IndexNow Error 422] Unprocessable Entity: URLs do not belong to host or key mismatch.");
      break;
    case 429:
      console.error("[IndexNow Error 429] Too Many Requests: Rate limit reached. Try again later.");
      break;
    default:
      console.error(`[IndexNow Error ${status}] Response: ${responseBodyText || "No response body"}`);
  }

  return { success: false, submitted: 0, status, message: responseBodyText || `HTTP ${status}` };
}

// -----------------------------------------------------------------------------
// 6. CLI Execution Entry Point
// -----------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes("--dry-run");
  const isAllMode = args.includes("--all");
  const urlsArg = args.find((a) => a.startsWith("--urls="));
  const fromArg = args.find((a) => a.startsWith("--from="))?.split("=")[1];
  const toArg = args.find((a) => a.startsWith("--to="))?.split("=")[1];

  console.log("==================================================================");
  console.log(" India Heritage Travel — IndexNow Automation");
  console.log("==================================================================");

  const apiKey = getApiKey();
  if (!apiKey) {
    console.error("[IndexNow Error] No IndexNow API key detected.");
    console.error("Please provide INDEXNOW_API_KEY environment variable or verify public key file.");
    if (!isDryRun) {
      process.exit(1);
    }
  } else {
    console.log(`[IndexNow] API Key: ${maskKey(apiKey)} (Ready)`);
  }

  let urlsToSubmit = [];

  // Mode 1: Specific URLs passed via CLI
  if (urlsArg) {
    const rawList = urlsArg.replace("--urls=", "").split(",");
    urlsToSubmit = deduplicateUrls(rawList);
    console.log(`[IndexNow Mode] Custom URL mode: ${urlsToSubmit.length} URL(s) provided.`);
  }
  // Mode 2: Full Sitemap Mode
  else if (isAllMode) {
    console.log("[IndexNow Mode] Full Sitemap Mode: Extracting all canonical URLs...");
    urlsToSubmit = getAllSitemapUrls();
    console.log(`[IndexNow] Found ${urlsToSubmit.length} canonical URLs in sitemap.`);
  }
  // Mode 3: Git Diff Detection (Default)
  else {
    console.log("[IndexNow Mode] Changed-URL Detection Mode (Git Diff)...");
    const changedFiles = getChangedFilesFromGit(fromArg, toArg);
    console.log(`[IndexNow] ${changedFiles.length} file(s) changed in commit range.`);
    if (changedFiles.length > 0) {
      changedFiles.forEach((f) => console.log(`  [${f.status}] ${f.filePath}`));
    }

    const { urls, layoutOrGlobalChanged, sitemapChanged } = mapFilesToUrls(changedFiles);

    if (sitemapChanged) {
      console.log("[IndexNow] Sitemap file changed! Syncing all canonical sitemap URLs...");
      urlsToSubmit = getAllSitemapUrls();
    } else if (urls.length > 0) {
      urlsToSubmit = urls;
    } else if (layoutOrGlobalChanged) {
      console.log("[IndexNow] Global layout / CSS changed. Submitting core high-priority landing pages...");
      urlsToSubmit = deduplicateUrls([
        `${BASE_URL}`,
        `${BASE_URL}/about`,
        `${BASE_URL}/contact`,
        `${BASE_URL}/blog`,
        `${BASE_URL}/customize-your-journey`,
        `${BASE_URL}/solo-women-travel`,
      ]);
    } else {
      console.log("[IndexNow] No public route or content files changed. Skipping submission.");
      process.exit(0);
    }
  }

  if (urlsToSubmit.length === 0) {
    console.log("[IndexNow] No valid URLs found to submit.");
    process.exit(0);
  }

  const result = await submitToIndexNow(urlsToSubmit, apiKey, isDryRun);

  if (!result.success && !isDryRun) {
    console.error("[IndexNow Error] Notification completed with errors.");
    process.exit(1);
  }

  console.log("==================================================================");
  console.log("[IndexNow] Process completed successfully.");
  console.log("==================================================================");
}

// Only run CLI if directly invoked
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error(`[IndexNow Fatal Error] ${err.message}`);
    process.exit(1);
  });
}
