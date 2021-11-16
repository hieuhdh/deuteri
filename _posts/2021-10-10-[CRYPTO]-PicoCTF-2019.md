---
layout: post
title: "[Crypto] Pico CTF - 2019"
date: 2021-10-10
excerpt: "Some writeup of me about Crypto"
tags: [Crypto CTF]
comments: true
---
<h1 align="center">
  Write up
</h1> 

<div align="center">
  <h4>
    <a href="#the-numbers">The numbers</a> |
    <a href="#easy1">Easy 1</a> |
    <a href="#13">13</a> |
    <a href="#caesar">Caesar</a> |
    <a href="#tapping">Tapping</a> |
    <a href="#list-of-challenge">List of challenge</a> 
  </h4>
</div>

## The numbers 

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141733927-30722fe9-8fda-4a9e-83f2-a77ad1ad811b.png"><img src="https://user-images.githubusercontent.com/86739367/141733927-30722fe9-8fda-4a9e-83f2-a77ad1ad811b.png"></a>
	<figcaption><a href="#" title="">Hình ảnh challenge</a></figcaption>
</figure>

Sau khi chúng ta download file ảnh từ challenge về ta được hình bên dưới.

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141735086-20dca9f2-4583-48c0-b635-558647e4c21d.png"><img src="https://user-images.githubusercontent.com/86739367/141735086-20dca9f2-4583-48c0-b635-558647e4c21d.png"></a>
	<figcaption><a href="#" title="">Hình ảnh minh họa sau khi mở file</a></figcaption>
</figure>

Từ hình trên ta chú ý rằng phần đầu dãy số là `16 9 3 15 3 20 6{`và kết hợp với gợi ý của đề bài  ta sẽ phát hiện ra khi convert dãy số `16 9 3 15 3 20 6` ra bảng chữ cái thì sẽ cho ra được chữ `PICOCTF` (các số chính là vị trí các chữ cái trong bảng chữ cái latin). Ta làm tương tự với các dãy số sau, ta sẽ thấy được flag

>flag: **PICOCTF{THENUMBERSMASON}**

## Easy1

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141735589-6e87129a-c0d9-4414-9e09-9c5fef56f5ba.png"><img src="https://user-images.githubusercontent.com/86739367/141735589-6e87129a-c0d9-4414-9e09-9c5fef56f5ba.png"></a>
	<figcaption><a href="#" title="">Hình ảnh challenge</a></figcaption>
</figure>

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141735638-102065d5-b355-4c31-b683-9617666b627e.png"><img src="https://user-images.githubusercontent.com/86739367/141735638-102065d5-b355-4c31-b683-9617666b627e.png"></a>
	<figcaption><a href="#" title="">Hình ảnh trong file table</a></figcaption>
</figure>

Từ hình ảnh trên, ta biết được challenge này đang sử dụng <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher">Vigenère_cipher</a> cipher thuộc mật mã Caesar. Theo mã hóa Vigenère cipher, chúng ta sẽ được cung cấp 1 chuỗi key và chuỗi Ciphertext. Và để tìm message ta sẽ decoder từng kí tự một, bằng cách message[i] = (Ciphertext[i] - key[i] + 26) % 26. Tôi có viết một script để giải quyết vấn đề này 

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141735971-86fdd243-afba-42b5-9154-7c1f9e96f9aa.png"><img src="https://user-images.githubusercontent.com/86739367/141735971-86fdd243-afba-42b5-9154-7c1f9e96f9aa.png"></a>
	<figcaption><a href="#" title="">Code giải mã thể hiện trên C++</a></figcaption>
</figure>

Sau khi chạy đoạn code trên, ta dễ dàng tìm ra được decoder là `CRYPTOISFUN` và đây cũng chính là 1 phần của flag cần tìm

>Flag: **picoCTF{CRYPTOISFUN}**

## 13

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141736152-4812194b-3d44-468b-af4d-793f164ed7ba.png"><img src="https://user-images.githubusercontent.com/86739367/141736152-4812194b-3d44-468b-af4d-793f164ed7ba.png"></a>
	<figcaption><a href="#" title="">Hình ảnh challenge</a></figcaption>
</figure>

Ngay đầu dòng mô tả, ta cũng nhận ra đây là 1 challenge về <a href="https://vi.wikipedia.org/wiki/ROT13">ROT13</a> cơ bản, ta có thể dùng 1 số công cụ giải mã code trên google như là <a href="https://rot13.com/">giải mã ROT13</a>  và tôi cũng có viết 1 đoạn code nhỏ để giải mã cũng như nói 1 vài thứ tôi hiểu về loại mã hóa này, các bạn có thể <a href="https://github.com/hieuhdh/Cryptography/blob/master/ROT/rot13.cpp">xem tại đây</a> 

>Flag: **picoCTF{not_too_bad_of_a_problem}**

## caesar

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141736511-222a24b9-2d50-4e27-93a0-0a44024e0090.png"><img src="https://user-images.githubusercontent.com/86739367/141736511-222a24b9-2d50-4e27-93a0-0a44024e0090.png"></a>
	<figcaption><a href="#" title="">Hình ảnh challenge</a></figcaption>
</figure>

Lại là 1 challenge về mật mã caesar. Hiểu đơn giản thì mã caesar là một dạng mật mã thay thế, trong đó mỗi ký tự trên văn bản sẽ được thay bằng một ký tự khác, có vị trí cách nó một khoảng xác định trong bảng chữ cái. 
Tham vọng của ta là tìm khoảng dịch chuyển các chữ cái hợp lí để biến thông điệp dspttjohuifsvcjdpoabrkttds thành một thông điệp có nghĩa. 
Vì bảng chữ cái có 26 kí tự, tức là có tối đa 25 khoảng dịch chuyển, tôi đã ngồi chạy  từng khoảng 1 thì biết được rằng khoảng dịch chuyển của message này là 25 kí tự, hay nó còn được gọi là `ROT25` tôi có 1 <a href="https://github.com/hieuhdh/Cryptography/blob/master/ROT/rot25.cpp">script</a> để giải mã chúng 

>Flag: **picoCTF{crossingtherubiconzaqjsscr}**

### Xem thêm

<div align="center">
  <h5>
    <a href="https://vi.wikipedia.org/wiki/M%E1%BA%ADt_m%C3%A3_Caesar" class="btn btn-success">Mật mã caesar</a> 
    <a href="https://privacycanada.net/classical-encryption/caesar-cipher/" class="btn btn-success">Mật mã caesar</a>
    <a href="https://cryptii.com/pipes/caesar-cipher" class="btn btn-success">Decode caesar online</a>
  </h5>
</div>

## Tapping

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141736956-97b9172e-0f90-4346-ac1d-62a309f7f779.png"><img src="https://user-images.githubusercontent.com/86739367/141736956-97b9172e-0f90-4346-ac1d-62a309f7f779.png"></a>
	<figcaption><a href="#" title="">Hình ảnh sau khi " nc jupiter.challenges.picoctf.org 21610 "</a></figcaption>
</figure>

Ở challenge này, ngay đầu tiên ta có dòng gợi ý: `What kind of encoding uses dashes and dots?`

Và đúng, tôi có nghiên cứu về loại mật mã này, đây là mật mã morse, sau khi nhận diện được loại mã hóa, ta dễ dàng có thể tự decode hoặc dùng 1 số công cụ decode mã <a href="https://vi.wikipedia.org/wiki/M%C3%A3_Morse">morse</a> có sẵn ở trên intenet. 

>Flag: **PICOCTF{M0RS3C0D31SFUN3902019519}**

### Xem thêm

<a href="https://morsedecoder.com/vi/">Mã morse</a>

<a href="https://morsecode.world/international/translator.html">Giải mã mã morse</a>

## List of challenge

<div align="center">
  <h5>
    <a href="https://play.picoctf.org/practice/challenge/68?category=2&originalEvent=1&page=1" class="btn btn-success">The numbers</a> 
    <a href="https://play.picoctf.org/practice/challenge/43?category=2&originalEvent=1&page=1" class="btn btn-success">Easy1</a>
    <a href="https://play.picoctf.org/practice/challenge/62?category=2&originalEvent=1&page=1" class="btn btn-success">13</a>
    <a href="https://play.picoctf.org/practice/challenge/64?category=2&originalEvent=1&page=1" class="btn btn-success">caesar</a>
    <a href="https://play.picoctf.org/practice/challenge/21?category=2&originalEvent=1&page=1" class="btn btn-success">Tapping</a>
  </h5>
</div>

<h1 align="center">
  Epilogue
</h1> 

Sau những gì mà tôi đã chia sẻ ở trên mong rằng sẽ giúp ích được phần nào đó cho bạn đọc. Mọi thắc mắc hoặc góp ý bạn đọc có thể liên hệ <a href="https://hieuhdh.github.io/deuteri/">tại đây</a>.