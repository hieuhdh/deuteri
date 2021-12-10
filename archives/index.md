---
layout: archive
title: Archives
excerpt: "Archive of something that I have written in the past time"
comments: false
---

<section class="timeline-section">
    <div class="timeline-items">
        {% for post in site.posts %} 
            <!-- {% if post.project %} -->
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">{{ post.date | date:'%b %d, %Y' }}</div>
                <div class="timeline-content">
                    <h3><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></h3>
                    <p>{{ post.excerpt }}</p>
                </div>
            </div>
            <!-- {% endif %} -->
        {% endfor %}
    </div>
</section>