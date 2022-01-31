---
layout: post
title: "[GUIDE] Overview"
date: 2021-10-10
update: 2021-10-20
excerpt: "An overview of some of the tutorials I've written"
blog: true
tags: [Guide]
# feature: https://user-images.githubusercontent.com/86739367/141987523-68a87eae-f4b0-4c0e-b40d-5c5415491fe9.png
comments: true
---

<p align="center" style = "font-size: 20px">
    An overview of some of the tutorials I've written
</p> 
<br><br>
<ul class="overview-timeline">
    {% for post in site.posts %} 
        {% if post.blog == null %}
            {% for tag in post.tags %}
                {% if tag == "Guide" %}
                    <li class="main-post">
                        <span></span>
                        <div>
                            <h2 class="title-of-post">{{ post.title }}</h2>
                            <div class = "line-of-post"></div>
                            <div class="des-of-post">{{ post.excerpt }}</div>
                            <a class ="read-more" href="{{ site.url }}{{ post.url }}">
                                <div> Read More  &rarr;</div>
                            </a>
                        </div>
                        <span class="number">
                            <span>{{ post.date | date:'%b %d, %Y' }}</span>
                            <span>{% if post.update and post.update != "" %} {{ post.update | date: "%b %-d, %Y"}}{% endif %}</span>
                        </span>
                    </li>
                {% endif %}
            {%unless forloop.last %}{% endunless %}{% endfor %}
        {% endif %}
    {% endfor %}
</ul>
