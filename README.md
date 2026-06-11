# Liu Wenli Academic Homepage

English academic personal website for Liu Wenli (刘文丽), Postdoctoral Research
Fellow in the School of Economics at Singapore Management University.

- Homepage: <https://wendyliu1112.github.io/>
- Email: <wenliliu@smu.edu.sg>
- Google Scholar: <https://scholar.google.com/citations?user=JFvxuJkAAAAJ&hl=zh-CN>
- GitHub: <https://github.com/WendyLIU1112/>

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

Edit the shared profile text in the three HTML files. The current portrait is
stored at `images/avatar.jpg`.

### Publications

The publication list in `publications.html` is based on `CV-Wenli Liu.pdf`
(January 2026). Update the page whenever a manuscript changes status or a new
paper is published.

### Life Photos

The carousel uses optimized local photos from the personal `figures` folder:

1. Add new images to `images/moments/`.
2. Replace or add each image URL in `life.html` using a local path such as
   `images/moments/badminton.jpg`.
3. Resize large originals to a maximum dimension of about 1600 pixels before
   publishing.

## Deployment

Upload all files to the root of the GitHub Pages repository. For the current
account, the expected repository is `WendyLIU1112/WendyLIU1112.github.io`.

## Notes

- No framework or build step is required.
- The site is responsive and supports reduced-motion preferences.
- Email and academic profile links can be updated directly in each page.
