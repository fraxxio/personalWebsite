---
    title: beFriendly
    description: Find new friends in an interactive way!
    tags: ["FrontEnd", "NextJS", "Typescript"]
    thumbnail: ./thumbnails/befriendlyThumbnail.png
    featured: false
    github: https://github.com/fraxxio/beFriendly
    website: https://befriendly.onrender.com/
    layout: ../../layouts/ProjectLayout.astro
---

<h1 style="text-align: center; text-decoration: none; font-size: 2rem; padding-top: 4rem;">
Project overview
</h1>

<p style="text-align: center; max-width: 60%; margin-inline: auto; padding-top: 2rem; font-size: 1.1rem;">
<b>beFriendly is a web application developed using React and Express, and it's containerized into Docker image.</b> The is app aimed at facilitating meaningful connections between users. Individuals can select their nicknames and enter a matchmaking pool to be paired with other random users. After getting paired, users are prompted by a set of 10 random questions about personality that need to be answered in 2 minutes. After answering, pairs can engage in dialogue within a dedicated chat room, with their answers displayed right next to the chat window.
</p>

<h1 style="text-align: center; text-decoration: none; font-size: 1.5rem; padding-top: 2rem;">
Project features
</h1>

<div style="max-width: 60%; margin-inline: auto; padding-top: 1.5rem;">

- [x] Matchmaking system for pairing users into chatrooms.
- [x] Socket.io event listeners for handling user actions:
  <div style="padding-left: 1rem;">

  - [x] Connect / Disconnect.
  - [x] Activity in chat.
  - [x] Answering progress.
  - [x] Sending messages.

  </div>

- [x] Full chatting experience with modern features:ting.
  <div style="padding-left: 1rem;">

  - [x] Adding reactions to messages.
  - [x] Replying to other messages.
  - [x] Emoji selection menu.

  </div>

</div>

<h1 style="text-align: center; text-decoration: none; font-size: 1.5rem; padding-top: 2rem;">
System design
</h1>

<p style="text-align: center; max-width: 60%; margin-inline: auto; padding-top: 2rem; font-size: 1.1rem; padding-bottom: 4rem">
I wanted to keep everything as simple as possible because the app itself is pretty small and I wanted to deploy working website fast. Therefore, the architecture of the app is very simple. On the client side there's mainly three parent components that work as pages and on the server side I created two files: index.js where I implemented all the socket.io event listeners and utils.js which has all the logic for handling matchmaking and user states. Below I created a visualization of how user matchmaking is handled on the server:
</p>
<div style="display: flex; justify-content: center;">
<img alt="User flow diagram" width="950px" src="/befriendlyDiagram.png" />
</div>

<h1 style="text-align: center; text-decoration: none; font-size: 1.5rem; padding-top: 2rem;">
Testing
</h1>

<p style="text-align: center; max-width: 60%; margin-inline: auto; padding-top: 2rem; font-size: 1.1rem; padding-bottom: 4rem">
I wanted to check the performance of my <b>Express</b> server and matchmaking implementation so I ran load tests with <b>Artillery</b>. The results for javascript server were pretty good in my opinion. <b>The server can handle about 2000+ users concurrently without any issue.</b> Here is actual results from the test:
</p>
<div style="display: flex; justify-content: center; margin-bottom: 4rem;">
<img alt="Testing screenshot" image" width="700px" src="/Tests.png" />
</div>
