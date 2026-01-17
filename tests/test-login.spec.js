const { test, expect } = require("@playwright/test");

test("Dashboard loads successfully", async ({ page }) => {
  await page.goto("/login");

  // Verify dashboard title appears
  await expect(
    page.getByRole("heading", { name: "NetOps Agent Dashboard" })
  ).toBeVisible();

  // Confirm correct URL
  await expect(page).toHaveURL(/dashboard|login/);
});
