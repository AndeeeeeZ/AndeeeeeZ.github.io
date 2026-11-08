---
layout: page
title: Skills
permalink: /skills/
weight: 3
---

<link rel="stylesheet" href="{{ '/assets/css/projects.css' | relative_url }}">

# Skills

{% include about/skills-list.html %}

<section class="project-list skills-results" aria-label="Matching projects" hidden>
  {% assign sort_records = '' %}
  {% for project in site.projects %}
    {% unless project.published == false %}
      {% assign date_parts = project.end_date | split: '-' %}
      {% assign year = '0000' %}
      {% assign month = '00' %}
      {% if project.start_date and project.end_date == nil %}
        {% assign year = '9999' %}
        {% assign month = '99' %}
      {% elsif date_parts.size == 2 %}
        {% if date_parts[0].size == 4 %}
          {% assign year = date_parts[0] %}
          {% assign month = date_parts[1] %}
        {% else %}
          {% assign year = date_parts[1] %}
          {% assign month = date_parts[0] %}
        {% endif %}
        {% assign month = month | prepend: '0' | slice: -2, 2 %}
      {% endif %}
      {% assign top_rank = '0' %}
      {% if project.top == true %}{% assign top_rank = '1' %}{% endif %}
      {% assign sort_key = top_rank | append: year | append: month %}
      {% assign sort_record = sort_key | append: ':' | append: forloop.index0 | append: '|' %}
      {% assign sort_records = sort_records | append: sort_record %}
    {% endunless %}
  {% endfor %}
  {% assign sorted_records = sort_records | split: '|' | sort | reverse %}
  {% for record in sorted_records %}
    {% assign project_index = record | split: ':' | last | plus: 0 %}
    {% assign project = site.projects[project_index] %}
    {% include project-list-item.html project=project filterable=true %}
  {% endfor %}
</section>
<p class="skills-results-empty" role="status" hidden>No projects match all selected skills.</p>

<script src="{{ '/assets/js/skills-filter.js' | relative_url }}" defer></script>
