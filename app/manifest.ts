import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dhyanish Marbles",
    short_name: "Dhyanish",
    description:
      "Premium marble, granite, natural quartzite, onyx and crafted stone products in Ahmedabad.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4f2",
    theme_color: "#c21868",
    icons: [
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
