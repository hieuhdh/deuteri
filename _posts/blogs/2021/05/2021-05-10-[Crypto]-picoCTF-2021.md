---
layout: post
title: "[Crypto] picoCTF - 2021"
date: 2021-05-10
update: 2021-12-09
excerpt: "Some writeup of me about Crypto in picoCTF"
tags: [Crypto CTF, Writeup]
feature: https://user-images.githubusercontent.com/86739367/141987523-68a87eae-f4b0-4c0e-b40d-5c5415491fe9.png
comments: true
---

## Mod 26

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141799298-44539a31-14af-4460-af4f-faae3dd36659.png"><img src="https://user-images.githubusercontent.com/86739367/141799298-44539a31-14af-4460-af4f-faae3dd36659.png"></a>
	<figcaption><a href="#" class = "link_for_hover"><i>Hình ảnh challenge</i></a></figcaption>
</figure>

Cũng tương tự challenge `13` trong <a href="https://hieuhdh.github.io/deuteri/CRYPTO-PicoCTF-2019/#13" title="" style="text-decoration: none; color:#bb86fc">[Crypto] picoCTF 2019</a> ta cũng dùng chính `ROT13` và ngay lập tức chúng ta sẽ nhận flag

> Flag: **picoCTF{next_time_I'll_try_2_rounds_of_rot13_aFxtzQWR}**

## Mind your Ps and Qs

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141799930-206eedf8-8869-4ce5-b653-d5493caaea7a.png"><img src="https://user-images.githubusercontent.com/86739367/141799930-206eedf8-8869-4ce5-b653-d5493caaea7a.png"></a>
	<figcaption><a href="#" style = "text-decoration: none"><i>Hình ảnh challenge</i></a></figcaption>
</figure>

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141800044-b8e10e3c-78cf-4049-8b97-1da4addb8f3a.png"><img src="https://user-images.githubusercontent.com/86739367/141800044-b8e10e3c-78cf-4049-8b97-1da4addb8f3a.png"></a>
	<figcaption><a href="#" style = "text-decoration: none"><i>Hình ảnh nội dung file values</i></a></figcaption>
</figure>

Challenge này cung cấp cho ta một mã hóa <a href="https://vi.wikipedia.org/wiki/RSA_(m%C3%A3_h%C3%B3a)" title="" style="text-decoration: none; color:#bb86fc">RSA</a> cơ bản, và độ dài của chuỗi n khá nhỏ nên ta dễ dàng tìm được 2 số p và q sao cho $$\begin{cases}   pq = n  \\   (p,q) = 1 \end{cases} $$ thông qua <a href="http://factordb.com/" style="text-decoration: none; color:#bb86fc">web này</a>. Sau khi lấy được p và q rồi, chúng ta dễ dàng tiến hành giải quyết vấn đề. Và đây là cách giải quyết của tôi

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141800462-4a53140c-6272-485d-a22d-688c8c898b9e.png"><img src="https://user-images.githubusercontent.com/86739367/141800462-4a53140c-6272-485d-a22d-688c8c898b9e.png"></a>
	<figcaption><a href="#" class = "link_for_hover"><i>Code giải mã thể hiện trên python3</i></a></figcaption>
</figure>

Sau khi chạy đoạn code trên, ta sẽ nhận được flag

> Flag: **picoCTF{sma11_N_n0_g0od_00264570}**

## List of challenge

<div align="center">
  <div>
    <a href="https://play.picoctf.org/practice/challenge/144?category=2&originalEvent=34&page=1" class="btn btn-success">Mod 26</a> 
    <a href="https://play.picoctf.org/practice/challenge/162?category=2&originalEvent=34&page=1" class="btn btn-success">Mind your Ps and Qs</a>
  </div>
</div>

<br>
<h1 align="center">
  Lời kết
</h1> 

<table>
  <thead>
    <tr>
<td style = "font-weight: bold">Sau những gì mà tôi đã chia sẻ ở trên mong rằng sẽ giúp ích được phần nào đó cho bạn đọc. Mọi thắc mắc hoặc góp ý bạn đọc có thể liên hệ <a class = "link_for_hover" href="https://hieuhdh.github.io/deuteri/">tại đây</a>.</td>
    </tr>
  </thead>
</table>

