// test-sitemap.ts
import sitemap from "./app/sitemap";

async function testSitemap() {
  const result = await sitemap();

  console.log("Total URLs:", result.length);
  console.log("\nFirst 3 entries:");
  console.log(JSON.stringify(result.slice(0, 3), null, 2));

  // Check for issues
  const missingDates = result.filter((entry) => !entry.lastModified);
  if (missingDates.length > 0) {
    console.warn("\n⚠️  Entries missing lastModified:", missingDates.length);
  }

  console.log("\n✅ Sitemap generated successfully!");
}

testSitemap();
