---
layout: post
title: "[PROJECT] Overview"
date: 2020-01-01
excerpt: "An overview of some of projects I've done"
blog: true
tags: [Project]
comments: true
---

<p align="center" style = "font-size: 20px">
    An overview of some of projects I've done
</p> 
<br><br>
<ul class="overview-timeline">
    {% for post in site.posts %} 
        {% if post.blog == null %}
            {% for tag in post.tags %}
                {% if tag == "Project" %}
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
