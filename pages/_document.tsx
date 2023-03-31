import { Html, Head, Main, NextScript } from "next/document";

const fireflies = 5;

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {Array.from({ length: fireflies }, (_, i) => (
          <div className="firefly" key={i}></div>
        ))}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
