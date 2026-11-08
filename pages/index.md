---
layout: default
permalink: /
description: Andi Zhu's game development portfolio, featuring games, tools, and projects.
---

<section class="home-intro" aria-label="Introduction">
  <div class="home-intro-portrait">
    <img src="{{ site.author.image | relative_url }}" alt="Illustrated hamster avatar for {{ site.author.name }}">
    <p>{{ site.description }}</p>
  </div>
  <div class="home-intro-copy">
    <h1>Hi, I'm Andi.</h1>
    <p>I'm a game development student who enjoys building games and learning through each project. You can <a href="{{ '/about/' | relative_url }}">learn more about me</a>.</p>
    <p>Play my games on <a href="https://{{ site.author.itchio }}/">itch.io</a>, or browse projects by <a href="{{ '/skills/' | relative_url }}">skill</a>.</p>
    <div class="home-intro-actions">
      <a class="home-intro-actions__primary" href="{{ '/projects/' | relative_url }}">View projects</a>
      <a class="home-intro-actions__secondary" href="mailto:{{ site.author.email }}">Contact me</a>
    </div>
  </div>
</section>
