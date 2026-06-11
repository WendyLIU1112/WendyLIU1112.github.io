# Liu Wenli Academic Homepage

English academic personal website for Liu Wenli. The visual structure is inspired
by the AcademicPages-style layout of <https://lixintong-thu.github.io/>, while
the styling and implementation are original.

## Pages

- `index.html`: Bio and Research Interests
- `publications.html`: Publications and Preprints
- `life.html`: Hobbies and an animated curved photo carousel

## Local Preview

```bash
cd "/path/to/personal website"
python3 -m http.server 8000
```

Open <http://localhost:8000/>.

## Updating Content

### Profile

Edit the shared profile text in the three HTML files. Replace
`images/avatar.png` with a real portrait using the same filename.

### Publications

The publication list is intentionally left unfilled because no verified paper
list was provided. A ready-to-use HTML template is included as a comment in
`publications.html`. Only add papers after confirming title, author order, year,
and links.

### Life Photos

The initial carousel uses remote editorial placeholder images. To use personal
photos:

1. Add five images to `images/moments/`.
2. Replace each image URL in `life.html` with a local path such as
   `images/moments/badminton.jpg`.
3. Keep landscape or portrait images at least 1000 pixels wide for best quality.

## Deployment

Upload all files to the root of the GitHub Pages repository. For the current
account, the expected repository is `WendyLIU1112/WendyLIU1112.github.io`.

## Notes

- No framework or build step is required.
- The site is responsive and supports reduced-motion preferences.
- Email and academic profile links can be updated directly in each page.
