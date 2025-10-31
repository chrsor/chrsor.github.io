---
layout: page
title: Notes
permalink: /notes/
---

A selection of notes and posts.

<ul class="notes-list">
{% assign notes = site.posts | where_exp: "p", "p.categories contains 'notes'" %}
{% for post in notes %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="post-meta">— {{ post.date | date: "%b %d, %Y" }}</span>
  </li>
{% endfor %}
</ul>

Subscribe via the <a href="{{ '/feed.xml' | relative_url }}">RSS feed</a>.
