---
layout: post
title: "[Crypto] picoCTF - 2021"
date: 2021-10-10
excerpt: "Some writeup of me about Crypto in picoCTF"
tags: [Crypto CTF, Writeup]
feature: https://user-images.githubusercontent.com/86739367/141987523-68a87eae-f4b0-4c0e-b40d-5c5415491fe9.png
comments: true
---
<h1 align="center">
  Write up
</h1> 

<div align="center">
  <h4>
    <a href="#mod-26">Mod 26</a> |
    <a href="#mind-your-ps-and-qs">Mind your Ps and Qs</a> |
    <a href="#list-of-challenge">List of challenge</a> 
  </h4>
</div>

## Mod 26

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141799298-44539a31-14af-4460-af4f-faae3dd36659.png"><img src="https://user-images.githubusercontent.com/86739367/141799298-44539a31-14af-4460-af4f-faae3dd36659.png"></a>
	<figcaption><a href="#" title="">Hình ảnh challenge</a></figcaption>
</figure>

Cũng tương tự challenge `13` trong <a href="https://hieuhdh.github.io/deuteri/CRYPTO-PicoCTF-2019/#13" title="">[Crypto] Pico CTF 2019</a> ta cũng dùng chính `ROT13` và ngay lập tức chúng ta sẽ nhận flag

flag: **picoCTF{next_time_I'll_try_2_rounds_of_rot13_aFxtzQWR}**
{: .notice}

## Mind your Ps and Qs

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141799930-206eedf8-8869-4ce5-b653-d5493caaea7a.png"><img src="https://user-images.githubusercontent.com/86739367/141799930-206eedf8-8869-4ce5-b653-d5493caaea7a.png"></a>
	<figcaption><a href="#" title="">Hình ảnh challenge</a></figcaption>
</figure>

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141800044-b8e10e3c-78cf-4049-8b97-1da4addb8f3a.png"><img src="https://user-images.githubusercontent.com/86739367/141800044-b8e10e3c-78cf-4049-8b97-1da4addb8f3a.png"></a>
	<figcaption><a href="#" title="">Hình ảnh nội dung file values</a></figcaption>
</figure>

Challenge này cung cấp cho ta một mã hóa <a href="https://vi.wikipedia.org/wiki/RSA_(m%C3%A3_h%C3%B3a)" title="">RSA</a> cơ bản, và độ dài của chuỗi n khá nhỏ nên ta dễ dàng tìm được 2 số p và q sao cho $$\begin{cases}   pq = n  \\   (p,q) = 1 \end{cases} $$ thông qua <a href="http://factordb.com/" >web này</a>. Sau khi lấy được p và q rồi, chúng ta dễ dàng tiến hành giải quyết vấn đề. Và đây là cách giải quyết của tôi

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141800462-4a53140c-6272-485d-a22d-688c8c898b9e.png"><img src="https://user-images.githubusercontent.com/86739367/141800462-4a53140c-6272-485d-a22d-688c8c898b9e.png"></a>
	<figcaption><a href="#" title="">Code giải mã thể hiện trên python3</a></figcaption>
</figure>

Sau khi chạy đoạn code trên, ta sẽ nhận được flag

Flag: **picoCTF{sma11_N_n0_g0od_00264570}**
{: .notice}

## List of challenge

<div align="center">
  <h5>
    <a href="https://play.picoctf.org/practice/challenge/144?category=2&originalEvent=34&page=1" class="btn btn-success">Mod 26</a> 
    <a href="https://play.picoctf.org/practice/challenge/162?category=2&originalEvent=34&page=1" class="btn btn-success">Mind your Ps and Qs</a>
  </h5>
</div>

<h1 align="center">
  Epilogue
</h1> 

Sau những gì mà tôi đã chia sẻ ở trên mong rằng sẽ giúp ích được phần nào đó cho bạn đọc. Mọi thắc mắc hoặc góp ý bạn đọc có thể liên hệ <a href="https://hieuhdh.github.io/deuteri/" style="text-decoration: none; color:blue" ><strong>tại đây</strong></a>.
{: .notice}