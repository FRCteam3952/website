import { defineConfig, squooshImageService } from 'astro/config';
import compress from "astro-compress";
import rome from "astro-rome";
import critters from "astro-critters";
import sitemap from "astro-sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
const site = "FRCteam3952.github.io";

// https://astro.build/config
export default defineConfig({
  site,
  image: {
    service: squooshImageService(),
  },
  integrations: [sitemap({
    xslUrl: site + '/assets/xsl/sitemap.xsl'
  }), rome(), critters(), compress(), svelte(), tailwind()]
});
