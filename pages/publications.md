---
layout: page
title: Publications
permalink: /publications/
---

Below is generated from `_data/publications.yml`. Grouped by year.

{% assign pubs = site.data.publications | sort: "year" | reverse %}
{% assign years = pubs | map: "year" | uniq %}
{% for y in years %}
### {{ y }}
<ul class="pubs">
  {% for p in pubs %}
  {% if p.year == y %}
  <li>
    <span class="pub-authors">{{ p.authors | join: ", " }}</span>:
    <span class="pub-title">“{{ p.title }}”</span>.
    {% if p.venue %}<span class="pub-venue">{{ p.venue }}</span>.{% endif %}
    {% if p.note %}<span class="pub-note">{{ p.note }}</span>.{% endif %}
    {% if p.topic %}<span class="pub-topic" title="area"> ({{ p.topic }})</span>{% endif %}
    <div class="pub-links">
      {% if p.links.pdf %}<a href="{{ p.links.pdf }}">PDF</a>{% endif %}
      {% if p.links.arxiv %}<a href="https://arxiv.org/abs/{{ p.links.arxiv }}">arXiv</a>{% endif %}
      {% if p.links.doi %}<a href="https://doi.org/{{ p.links.doi }}">DOI</a>{% endif %}
      {% if p.links.code %}<a href="{{ p.links.code }}">Code</a>{% endif %}
    </div>
    {% if p.abstract %}<details><summary>Abstract</summary><p>{{ p.abstract }}</p></details>{% endif %}
  </li>
  {% endif %}
  {% endfor %}
</ul>
{% endfor %}
