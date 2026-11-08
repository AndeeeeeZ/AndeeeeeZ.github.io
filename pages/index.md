---
layout: default
permalink: /
---

<section class="home-intro" aria-label="Introduction">
  <div class="home-intro-portrait">
    <img src="{{ site.author.image | relative_url }}" alt="Illustrated hamster avatar for {{ site.author.name }}">
    <p>{{ site.description }}</p>
  </div>
  <div class="home-intro-copy">
    <h1>Hi, I'm Andi.</h1>
    <p>I'm a game development student who enjoys building games and learning through each project. Learn more about me <a href="{{ '/about/' | relative_url }}">here</a>.</p>
    <p>Explore my <a href="{{ '/projects/' | relative_url }}">projects</a> to see what I've made, or play my games on <a href="https://{{ site.author.itchio }}/">itch.io</a>. Looking for something specific? Browse projects by <a href="{{ '/skills/' | relative_url }}">skill</a>.</p>
  </div>
</section>
