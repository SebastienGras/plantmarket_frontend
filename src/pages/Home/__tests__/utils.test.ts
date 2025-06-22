import { describe, it, expect } from "vitest";

import { buildProductSearchUrl } from "../utils";

describe("buildProductSearchUrl", () => {
  it("should build URL with search, categoryId, and subcategoryId", () => {
    const filters = {
      search: "plant",
      categoryId: "1",
      subcategoryId: "2",
    };
    const expectedUrl =
      "/products?actif=true&search=plant&categoryId=1&subcategoryId=2";
    expect(buildProductSearchUrl(filters)).toBe(expectedUrl);
  });

  it("should build URL with only search", () => {
    const filters = { search: "plant" };
    const expectedUrl = "/products?actif=true&search=plant";
    expect(buildProductSearchUrl(filters)).toBe(expectedUrl);
  });

  it("should build URL with only categoryId", () => {
    const filters = { categoryId: "1" };
    const expectedUrl = "/products?actif=true&categoryId=1";
    expect(buildProductSearchUrl(filters)).toBe(expectedUrl);
  });

  it("should build URL with only subcategoryId", () => {
    const filters = { subcategoryId: "2" };
    const expectedUrl = "/products?actif=true&subcategoryId=2";
    expect(buildProductSearchUrl(filters)).toBe(expectedUrl);
  });

  it("should build URL with no filters", () => {
    const filters = {};
    const expectedUrl = "/products?actif=true";
    expect(buildProductSearchUrl(filters)).toBe(expectedUrl);
  });
});
