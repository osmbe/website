# OSM BE Website
The new OpenStreetMap Belgium website.

## Customizing the website

Feel free to customize the website content.

### Creating an new post

1. In the `_posts` directory, create a new Markdown file. Name the file in the pattern of `YYYY-MM-DD-language-slug.md`, where *YYYY-MM-DD* is the date of the event or post, *language* is the language of the post (`fr`, `nl`, `en` or `ge`) and *slug* is a short, unique identifier for post. For example, a post in English dated January 1, 2016 entitled "Mappy New Year" might be named `2016-01-01-en-mappy-new-year.md`.

2. At the top of the Markdown file, add *front matter* for your content type. Each post needs some extra information at the top of the file called [front matter](http://jekyllrb.com/docs/frontmatter/). The front matter determines what kind of content it is and other settings, like authorship or RSVP information. See the next section, _Content types_, for a listing of front matter options.

   Here's example front matter for a post:

   ```
   ---
   title: Missing Maps Mapathon at Doctors without Borders / Handicap International Brussels 
   featured: images/missing-maps.png
   layout: post
   author: Jorieke Vyncke
   lang: nl
   ---
   ```

3. Beneath the front matter, write your post text. You can format your text using [Markdown](http://daringfireball.net/projects/markdown/syntax). For example:

   ```
   Artsen Zonder Grenzen (AZG) et Handicap International (HI) verwelkomen ons voor de volgende Missing Maps Mapathon. Kom en maak nieuwe kaarten met ons, samen met zij die de kaarten zullen gebruiken op het terrein! 
   ```

4. Preview your work with the "preview" tab.

5. Once you're satisfied with your new post, commit the Markdown file to GitHub (directly to the `master` branch).

In a few minutes, your post appears on website!

### Content Types

#### Post

Posts are like blog posts. These are great for meetup follow-ups or posts that don't have a meetup event tied to it.

| Name | Required | Value | Description |
| --- | --- | --- | --- |
| `layout` | Yes | `post` | This value should always be `post`. |
| `lang` | Yes | Language of the post | This value must be `fr`, `nl`, `en` (or `ge`). |
| `title` | Yes | Title of your post |
| `author` | No | Author's name |
| `featured` | No | URL path to an image | An image added here will show up for the post. |


### Getting help

- If you're having a problem (or if you have a suggestion), [create an issue](https://github.com/osmbe/website/issues) and we'll respond to it.
- The site is powered by Jekyll. To make custom tweaks to your own site, you should read [Jekyll's documentation](http://jekyllrb.com/docs/home/).
- The website is running the site on GitHub Pages (i.e., on the `gh-pages` branch of your repository). See [Getting Started with GitHub Pages](https://guides.github.com/features/pages/) for more information about using GitHub Pages.


This README file is based on [Maptime README file](https://github.com/maptime/starter).
