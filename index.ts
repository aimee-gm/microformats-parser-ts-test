import { mf2 } from "microformats-parser";

mf2('<p class="h-card">Hello, <span class="p-name">World</span>!</p>', {
  baseUrl: "https://example.com",
});
