---
layout: post
title: "[CRYPTO] picoCTF"
date: 2021-10-10
excerpt: "Some writeup of me about Crypto in picoCTF"
blog: true
tags: [Crypto CTF]
feature: https://user-images.githubusercontent.com/86739367/141987523-68a87eae-f4b0-4c0e-b40d-5c5415491fe9.png
comments: true
---

<p align="center" style = "font-size: 20px">
    I send all you guys some topics that I have written. I'm really stupid at English, so I write all in Vietnamese ::v
</p> 
<br><br>
<ul class="overview-timeline">
    {% for post in site.posts %} 
        {% if post.blog == null %}
            {% for tag in post.tags %}
                {% if tag == "Crypto CTF" %}
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
