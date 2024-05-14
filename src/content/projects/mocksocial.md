---
    title: MockSocial
    description: Generate fake social media post screenshots with ease!
    tags: ["FrontEnd", "NextJS", "Tailwind", "Typescript"]
    thumbnail: ./thumbnails/MockSocialThumbnail.png
    featured: false
    website: https://mocksocial.vercel.app/
    github: https://github.com/fraxxio/MockSocial
    layout: ../../layouts/ProjectLayout.astro
---

<h1 style="text-align: center; text-decoration: none; font-size: 2rem;">Project overview</h1>

<p style="text-align: center; max-width: 60%; margin-inline: auto; padding-top: 2rem; font-size: 1.1rem;">
  <b>MockSocial</b> - Generate realistic fake social media post or message screenshots for Twitter, Instagram, Facebook, Discord, and ChatGPT. Customize usernames, text, profile pictures, posts, reactions, badges, and themes effortlessly.
</p>

<h1 style="text-align: center; text-decoration: none; font-size: 1.5rem; padding-top: 2rem;">Project features</h1>

<div style="max-width: 60%; margin-inline: auto; padding-top: 1.5rem;">

- [x] You can choose from 6 different social media platforms: **Twitter**, **Instagram**, **Facebook**, **Discord**, **ChatGPT**.
- [x] Ability to add custom values to the image:
  <div style="padding-left: 1rem;">

  - [x] Username.
  - [x] Post text, or message text.
  - [x] Profile picture.
  - [x] Post picture.
  - [x] Reaction emoji.
  - [x] User badge selection.
  - [x] Theme selection.

</div>

</div>

<h1 style="text-align: center; text-decoration: none; font-size: 1.5rem; padding-top: 2rem;">
Build process
</h1>

<p style="text-align: center; max-width: 60%; margin-inline: auto; padding-top: 2rem; font-size: 1.1rem; padding-bottom: 4rem">
When I came up with this idea I checked few simillar purpose websites and I wasn't very impressed. I was looking for a place where you could generate fake images for multiple platforms and not just posts, I also wanted messages or comments of that platform but all the apps I checked lacked one of the features so I made my own. First I wanted to know how can you generate a picture from html and css. I found and tested couple libraries and at the end chose <b>@hugocxl/react-to-image</b> which is a fork of <b>html-to-image</b> that had easy to use hooks for React.<br/> <br/>
Later in development I realised that I need to store temporary images preferably for free. And for that I chose <b>Uploadthing</b> which an <b>AWS S3</b> service that allows me to have 2 GB of file storage. <br/>
The problem was that the storage will eventually fill up so created a function that would automatically delete the image after uploading and getting the URL. Since the image doesn't disappear until the page is refreshed this solution worked perfectly.
</p>
