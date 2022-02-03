---
layout: post
title: "[OOP] Overview"
date: 2021-03-01
excerpt: "Vài điều về phương pháp lập trình theo hướng đối tượng"
blog: true
tags: [OOP]
comments: true
---

## **Thông tin chung**

OOP là viết tắt của cụm từ Object Oriented Programming - tức lập trình hướng đối tượng.

Hiển nhiên với một số bài toán như là tính tổng hai đa thức, so sánh các số phức, hay là các dạng bài về toán học đặc thù, ta có thể dễ dàng lập trình theo hướng cấu trúc để giải quyết các dạng bài toán đó.

Ví dụ với bài toán đưa ra: "Tính tổng 2 đa thức". Theo cách nhìn nhận của mỗi người: 

* Có thể quy bài toán vào một mảng với chỉ số của mảng là bậc của đa thức và giá trị của mảng tại chỉ số đó chính là hệ số tương ứng để giải quyết
* Có thể nhìn bài toán bằng cách nhìn tổng quát rằng 1 đa thức là tập hợp của nhiều đơn thức. Lúc này, có thể dùng danh sách liên kết để giải quyết vấn đề, với mỗi node là 1 đơn thức.
* ...
* Có thể nhìn bài toán bằng một hướng khác bằng việc xem mỗi đa thức là một đối tượng đa thức, một đối tượng đa thức bao gồm nhiều đối tượng đơn thức, một đối tượng đơn thức bao gồm đối tượng hệ số và biến số.

Thế đối tượng là gì?

* Trong thế giới thực, đối tượng được hiểu như là thực thể. Ví dụ: Thực thể người, dữ liệu, nhà, xe,...
* Mỗi đối tượng sẽ tồn tại trong một hệ thống và có ý nghĩa nhất định trong hệ thống.
* Đối tượng cũng góp phần biểu diễn thế giới thực trên máy tính một cách hiệu quả hơn.
* Đối tượng bao gồm thuộc tính và hành động (hay còn gọi là thao tác). Ví dụ: Con người có thuộc tính là tên, tuổi,...; có thao tác là ăn, mặc,...

Trên thực tế, xung quanh chúng ta luôn tồn tại những đối tượng và các đối tượng này là các thực thể có mối quan hệ với nhau. Ví dụ: Các sinh viên trong một lớp.

Trong ngữ cảnh blog này, tôi sẽ cung cấp cho các bạn sự miêu tả phương pháp lập trình hướng đối tượng bằng ngôn ngữ C++.

## **Tham hiểu thêm**

<a class = "link_for_hover" href="https://vi.wikipedia.org/wiki/L%E1%BA%ADp_tr%C3%ACnh_h%C6%B0%E1%BB%9Bng_%C4%91%E1%BB%91i_t%C6%B0%E1%BB%A3ng">Lập trình hướng đối tượng</a>

<br><br>
<ul class="overview-timeline">
    {% for post in site.posts %} 
        {% if post.blog == null %}
            {% for tag in post.tags %}
                {% if tag == "OOP" %}
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
