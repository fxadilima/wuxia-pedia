import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-project</title>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
      </head>
      <body>
        <main class="w3-main w3-container">
          <Component />
        </main>
      </body>
    </html>
  );
}
