
---

I have github repo dedicated for this project, and currently it does not link to ay of the static pages containing the already refined and stabil works, but I can easily link them locally.

Our focus now is to make it better, here's my `index.tsx`, that will display the front page:

```tsx
import MarkdownIt from 'markdown-it';
import MarkdownItFootnote from 'markdown-it-footnote';

export default async function Home() {
  const realPath = Deno.cwd() + "/index.md";
  const txt = await Deno.readTextFile(realPath);
  const md = new MarkdownIt({html: true}).use(MarkdownItFootnote);
  const html = md.render(txt);
  return (
    <div class="w3-content" dangerouslySetInnerHTML={{__html: html}} />
  );
}
```

Let's clarify something, apparently `Lume` generated sites will be refered to using something like:
`/backstory/chapter1.html`, thus removing the need for `/static` part, as this website is controlled by `fresh`.

---

Now, let's have a look at my other folder, containing my static site, and review my current `_config.ts`:

```ts
import lume from "lume/mod.ts";
import footnote from 'markdown-it-footnote';

const markdown = {
  plugins: [footnote]
};

const site = lume({
  server: {
    port: 8000
  },
  prettyUrls: true,
  emptyDest: false,
  dest: '../../wuxia-pedia/static/backstories'
}, {markdown});


site.copy("./images", "images");
site.copy("./favicon.ico", "favicon.ico");
site.copy("./favicon.png", "favicon.png");

export default site;
```

**Reply**:

Based on this configuration, the path to your static content within your Fresh website will indeed be something like /backstories/chapter1/ (due to prettyUrls: true).

This confirms that when you create links in your Fresh index.md, you should point to these generated paths. For example, a link to chapter1.md in your Lume site would become /backstories/chapter1/ in your Fresh website.

Now that we have a clear understanding of how your static site is built and where it's located in relation to your Fresh project, what would you like to work on next? Perhaps:

- Updating the links in your index.md to point to the correct /backstories/... paths?
- Thinking about the navigation structure to make it easy for users to access both the dynamic and static content?
- Adding some W3CSS styling to the links on your homepage?

Let me know your preference!

I guess it should be the right time to gather my stories in the static `backstories` folder, so that I can test my fresh configurations.

---

Ooops, looks like we have to modify the `_config.ts`, apparently, fresh will not interpret the link as static pages, unless we provide the `.html` file names. So:

```ts
const site = lume({
  server: {
    port: 8000
  },
  prettyUrls: false,
  emptyDest: false,
  dest: '../../wuxia-pedia/static/backstories'
}, {markdown});
```

---

The simple test was written in Indonesian, but the I use a link to the English version (okay for testing purpose):

# Paladin in Violent Winds

Saat ini belum ada bacaan yang menarik selain berikut:

- [Perubahan pada Chapter 34 Yitian Tulong Ji](/backstories/yttlj/en/ch34/part1.html)


So the static pages in `/backstories` will be automatically updated, whenever I work on the static site. I will occasionally update my github repo, so that the site in `Deno Deploy` will also be updated (but not too frequent).
