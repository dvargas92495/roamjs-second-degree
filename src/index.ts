import { toConfig, createPage } from "roam-client";
import { createConfigObserver } from "roamjs-components";

const CONFIG = toConfig(`second-degree`);
createPage({ title: CONFIG });

createConfigObserver({
  title: CONFIG,
  config: {
    versioning: true,
    tabs: [],
  },
});
