---
layout: archive
title: Archives
excerpt: "Archive of something that I have written in the past time"
comments: false
---

<!-- <ul class="listing">
{% for post in site.posts %}
  {% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
  {% if year != y %}
    {% assign year = y %}
    <li class="listing-seperator">{{ y }}</li>
  {% endif %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul> -->

<section class="timeline-section">
	<div class="timeline-items">
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">{{ post.date | date:'%b %d, %Y' }} {% if post.update and post.update != "" %}| Updated:
                                        {{ post.update | date: "%b %-d, %Y"}}{% endif %}</div>
			<div class="timeline-content">
				<h3><a class="zoombtn" href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></h3>
				<p>{{ post.excerpt }}</p>
			</div>
		</div>
	</div>
</section>