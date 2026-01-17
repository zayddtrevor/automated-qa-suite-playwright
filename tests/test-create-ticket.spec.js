const { test, expect } = require("@playwright/test");

test("User can create a support ticket", async ({ page }) => {
  await page.goto("/dashboard");

  const inputs = page.getByRole("textbox");
  await inputs.first().fill("Juan Dela Cruz");

  await page.selectOption("select", { label: "No Connection" });
  await page.selectOption("select:nth-of-type(2)", "Low");

  await page.getByRole("button", { name: "Add Ticket" }).click();

  // Verify ticket appears in table
  await expect(page.getByText("Juan Dela Cruz")).toBeVisible();
});
