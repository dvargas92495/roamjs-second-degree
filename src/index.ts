import { addStyle, toConfig } from "roam-client";
import { createConfigObserver } from "roamjs-components";
import React from "react";

const CONFIG = toConfig(`example`);

createConfigObserver({
  title: CONFIG,
  config: {
    brand: '#00B96C',
    versioning: true,
    tabs: [
      {
        id: "home",
        fields: [
          {
            title: "sup",
            type: "text",
            description: "yo",
          },
        ],
      },
      {
        id: "import",
        fields: [
          {
            title: "normal setting",
            type: "text",
            description: "yo",
          },
          {
            title: "what now",
            type: "text",
            description: "yo",
          },
        ],
      },
      {
        id: "premium",
        toggleable: "dev_price_1JoVzWFHEvC1s7vk5uxF8XWB",
        fields: [
          {
            type: "custom",
            title: "Just a div",
            description: "Literally. It's just a div",
            options: {
              component: () => React.createElement("div"),
            },
          },
        ],
      },
    ],
  },
});
