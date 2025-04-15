import lume from "lume/mod.ts";
import footnotes from 'markdown-it-footnote';

const markdown = {
  plugins: [footnotes]
};

const site = lume({
  server: {
    port: 3000
  },
  prettyUrls: true,
  emptyDest: true,
}, {markdown});

site.copy("./images", "images");

site.copy("./favicon.ico", "favicon.ico");
site.copy("./favicon.png", "favicon.png");

export default site;
