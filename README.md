# CPF College Complex — School Website

A modern, single-page website for **CPF College Complex** (Accra & Koforidua, Ghana).
No frameworks, no build tools — just plain HTML, CSS and JavaScript. It runs anywhere.

## How to view the site

Double-click **`index.html`** — it opens in your browser.
(For best results — and later for hosting — you can also serve it, e.g. with the
VS Code "Live Server" extension or `python -m http.server`.)

## How to make changes (the important part)

> **All website content lives in ONE file: [`js/data.js`](js/data.js).**
> Open it with Notepad (or any editor), change the text between the `" "`
> quotes, save, and refresh the browser. That's it.

### Common tasks

| I want to…                         | Do this in `js/data.js`                                |
| ---------------------------------- | ------------------------------------------------------ |
| Change a phone number / email      | Edit the `contact` block at the top                    |
| Add the proprietor's real name     | Edit `proprietor.name`                                 |
| Change the headline on the banner  | Edit the `hero` block                                  |
| Add a photo to the gallery         | Put the image in the **`assets`** folder, then copy a `{ "src": … }` block inside `gallery.photos` and point it to your new file |
| Hide the gallery / a campus / map  | Delete (or empty) the matching block                   |
| Link the report-generation app     | Put the app's web address in `reportsPortal.url`       |
| Change the copyright / developer credit | Edit the `footer` block (`copyright`, `developer`) |
| Change the school colours          | Edit `--navy` and `--gold` at the top of `css/style.css` |

The file is heavily commented — every section explains itself.
**Tip:** only edit text *between* quotes and keep the commas; if something breaks,
undo (Ctrl+Z) or restore from a backup copy.

## Folder structure

```
cpf-college-complex/
├── index.html        ← page structure (rarely needs editing)
├── css/style.css     ← design/colours (edit colours at the top)
├── js/data.js        ← ★ ALL TEXT, PHOTOS & CONTACTS — edit this
├── js/main.js        ← behaviour (no need to touch)
└── assets/           ← your images
    ├── crest.png         (school crest)
    ├── students.jpg      (pupils at assembly)
    ├── school-bus.jpg    (CPF bus)
    ├── proprietor-1.jpg  (founder — portrait)
    └── proprietor-2.jpg  (founder — speaking)
```

## Putting it online (free options)

1. **Netlify Drop** — go to <https://app.netlify.com/drop> and drag the whole
   `cpf-college-complex` folder in. Done — you get a live link instantly.
2. **GitHub Pages** — upload the folder to a GitHub repository, then enable
   Pages in the repo settings.
3. **Vercel** — similar: import the folder and deploy.

After hosting, buy a domain such as `cpfcollegecomplex.com` and point it there
(Netlify/GitHub guides walk you through it).

## Things to update when you can

- `proprietor.name` — currently a placeholder ("Name of Proprietor")
- `contact.email` — verify the real inbox
- `mapEmbed` — replace with the exact campus location for an accurate map
- Add more real photos of classrooms, Sports/Graduation day, etc. to the gallery
- `reportsPortal.url` — when the report-generation app is live
