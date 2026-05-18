import React from "react";

export interface CountryOption {
  value: string;
  label: React.ReactNode;
  code: string;
  flag: string;
  name: string;
}