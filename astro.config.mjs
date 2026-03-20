import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "ABCDiatypeSemi-Mono",
      cssVariable: "--font-mono",
      options: {
        variants: [
          {
            src: ["./src/fonts/ABCDiatypeSemi-MonoVariable.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
});
