---
layout: post
title: "[Guide] Overview"
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
{% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
    <article>
    <h2 id="{{ this_word }}" class="tag-heading">{{ this_word }}</h2>
        <ul class = "main-entry-title">
    {% for post in site.tags[this_word] %}{% if post.title != null and psst.tag == "Guide" %}
        <li class="entry-title"><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
    {% endif %}{% endfor %}
        </ul>
    </article><!-- /.hentry -->
{% endunless %}{% endfor %}
<br>
<div class="pre_next" style = "display: grid;grid-template-columns: 45% 45% 20px; grid-gap: 0 10%; font-weight: 500">
    <div class="item item1" style="text-align: right; position: relative;">
        <a href="https://hieuhdh.github.io/deuteri/Crypto-Overview/" class="btn" style="width: 100%">
            <div style = "font-size: 12px; margin-bottom:-10px">Previous</div>
            <div style = "top:50%;bottom:50%; transform:translate(-50%, -50%); position: absolute; width: 25px; height:25px; left: 25px">
            	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="xMidYMid meet" data-rnw-int- style="vertical-align: middle;"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg>
            </div>
            <div style = "position: relative; font-size: 16px; font-weight: 500 ">[Crypto] Overview</div>
        </a>
    </div>
    <div class="item item2" style="text-align: left; position: relative; ">
        <a href="https://hieuhdh.github.io/deuteri/Crypto-picoCTF/" class="btn" style="width: 100%">
        	<div style = "font-size: 12px; margin-bottom:-10px"> Next</div>
        	<div style = "top:50%;bottom:50%; transform:translate(-50%, -50%); position: absolute; width: 25px; height:25px; right: 0px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;" ><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </div>
        	<div style = "position: relative; font-size: 16px; font-weight: 500 ">[Crypto] picoCTF</div>
        </a>
    </div>
</div>

