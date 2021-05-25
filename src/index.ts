import { toConfig, createPage } from "roam-client";

const CONFIG = toConfig(`second-degree`);
createPage({ title: CONFIG });
