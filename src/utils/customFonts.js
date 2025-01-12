import localFont from "next/font/local";

const OrpheusPro = localFont({
  src: [
    {
      path: "../assets/fonts/OrpheusPro-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-orpheuspro",
});

const Twentieth = localFont({
  src: [
    {
      path: "../assets/fonts/TwentiethCenturyforKenmoreBold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/TwentiethCenturyforKenmoreLight.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../assets/fonts/TwentiethCenturyforKenmoreMedium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/TwentiethCenturyforKenmoreSemibold.ttf",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--font-twentieth",
});

export { OrpheusPro, Twentieth };
