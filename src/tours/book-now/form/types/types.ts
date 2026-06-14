import React from "react";

export interface CountryOption {
  value: string;
  name: string;
  code: string;
  isoCode: string;
  flag: string;
  label: React.ReactNode;
}