import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Iris казино",
    short_name: "Iris",
    description:
      "Iris казино - официальный сайт онлайн казино с зеркалом, бонусами и более 7000 играми",
    start_url: "/",
    display: "standalone",
    background_color: "#0e0b1a",
    theme_color: "#0e0b1a",
    lang: "ru",
    orientation: "portrait",
    categories: ["games", "entertainment"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png", purpose: "maskable" },
    ],
  }
}
