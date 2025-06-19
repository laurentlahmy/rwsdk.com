import { defineApp } from "rwsdk/worker";
import { index, render, route, prefix } from "rwsdk/router";
import { Document } from "src/Document";
import Home from "src/pages/Home";
import { setCommonHeaders } from "src/headers";
import sitemap from "./sitemap";
import PersonalSoftware from "src/pages/readme/PersonalSoftware";
import { notFound } from "src/utils/notFound";

import { addonChangelog } from "src/addons/changelog/routes";
import { blogRoutes } from "./app/addons/blog";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),

  render(Document, [
    route("/", Home),
    route("/personal-software", PersonalSoftware),

    prefix("/blog", blogRoutes),

    route("/docs", async () => {
      return new Response(null, {
        status: 301,
        headers: {
          Location: "https://docs.rwsdk.com",
        },
      });
    }),

    route("/docs/getting-started/quick-start/", async () => {
      return new Response(null, {
        status: 301,
        headers: {
          Location: "https://docs.rwsdk.com/getting-started/quick-start/",
        },
      });
    }),
    route("/sitemap.xml", async () => {
      // this should become an addon, and it should take other sitemaps as inputs and merge them together
      return new Response(sitemap, {
        status: 200,
        headers: {
          "Content-Type": "application/xml",
        },
      });
    }),
    route("/robots.txt", async () => {
      // This should also become an addon
      const robotsTxt = `User-agent: *
        Allow: /
        Disallow: /search
        Sitemap: https://rwsdk.com/sitemap.xml`;

      return new Response(robotsTxt, {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }),
    addonChangelog({ routePrefix: "/changelog" }),
    route("*", async () => {
      return notFound();
    }),
  ]),
]);
