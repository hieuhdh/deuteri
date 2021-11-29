---
layout: post
title: "[Crypto] picoCTF - 2019"
date: 2020-10-10
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
    <a href="#the-numbers" style="text-decoration: none; color:#6200ee">The numbers | </a> 
    <a href="#easy1" style="text-decoration: none; color:#6200ee">Easy 1 | </a>
    <a href="#13" style="text-decoration: none; color:#6200ee">13 | </a> 
    <a href="#caesar" style="text-decoration: none; color:#6200ee">Caesar | </a>
    <a href="#tapping" style="text-decoration: none; color:#6200ee">Tapping | </a>
    <a href="#list-of-challenge" style="text-decoration: none; color:#6200ee">List of challenge</a> 
  </h4>
</div>

## The numbers 

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141733927-30722fe9-8fda-4a9e-83f2-a77ad1ad811b.png"><img src="https://user-images.githubusercontent.com/86739367/141733927-30722fe9-8fda-4a9e-83f2-a77ad1ad811b.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh challenge</i></a></figcaption>
</figure>

Sau khi chúng ta download file ảnh từ challenge về ta được hình bên dưới.

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141735086-20dca9f2-4583-48c0-b635-558647e4c21d.png"><img src="https://user-images.githubusercontent.com/86739367/141735086-20dca9f2-4583-48c0-b635-558647e4c21d.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh minh họa sau khi mở file</i></a></figcaption>
</figure>

Từ hình trên ta chú ý rằng phần đầu dãy số là `16 9 3 15 3 20 6{`và kết hợp với gợi ý của đề bài  ta sẽ phát hiện ra khi convert dãy số `16 9 3 15 3 20 6` ra bảng chữ cái thì sẽ cho ra được chữ `PICOCTF` (các số chính là vị trí các chữ cái trong bảng chữ cái latin). Ta làm tương tự với các dãy số sau, ta sẽ thấy được flag

flag: **PICOCTF{THENUMBERSMASON}**
{: .notice}

## Easy1

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141735589-6e87129a-c0d9-4414-9e09-9c5fef56f5ba.png"><img src="https://user-images.githubusercontent.com/86739367/141735589-6e87129a-c0d9-4414-9e09-9c5fef56f5ba.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh challenge</i></a></figcaption>
</figure>

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141735638-102065d5-b355-4c31-b683-9617666b627e.png"><img src="https://user-images.githubusercontent.com/86739367/141735638-102065d5-b355-4c31-b683-9617666b627e.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh trong file table</i></a></figcaption>
</figure>

Từ hình ảnh trên, ta biết được challenge này đang sử dụng <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" style="text-decoration: none; color:blue">Vigenère_cipher</a> thuộc mật mã Caesar. Theo mã hóa Vigenère cipher, chúng ta sẽ được cung cấp 1 chuỗi key và chuỗi Ciphertext. Và để tìm message ta sẽ decoder từng kí tự một, bằng cách message[i] = (Ciphertext[i] - key[i] + 26) % 26. Tôi có viết một script để giải quyết vấn đề này 

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141735971-86fdd243-afba-42b5-9154-7c1f9e96f9aa.png"><img src="https://user-images.githubusercontent.com/86739367/141735971-86fdd243-afba-42b5-9154-7c1f9e96f9aa.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Code giải mã thể hiện trên C++</i></a></figcaption>
</figure>

Sau khi chạy đoạn code trên, ta dễ dàng tìm ra được decoder là `CRYPTOISFUN` và đây cũng chính là 1 phần của flag cần tìm

Flag: **picoCTF{CRYPTOISFUN}**
{: .notice}

## 13

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141736152-4812194b-3d44-468b-af4d-793f164ed7ba.png"><img src="https://user-images.githubusercontent.com/86739367/141736152-4812194b-3d44-468b-af4d-793f164ed7ba.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh challenge</i></a></figcaption>
</figure>

Ngay đầu dòng mô tả, ta cũng nhận ra đây là 1 challenge về <a href="https://vi.wikipedia.org/wiki/ROT13" tyle="text-decoration: none; text-color:blue" >ROT13</a> cơ bản, ta có thể dùng 1 số công cụ giải mã code trên google như là <a href="https://rot13.com/" style="text-decoration: none; color:blue">giải mã ROT13</a>  và tôi cũng có viết 1 đoạn code nhỏ để giải mã cũng như nói 1 vài thứ tôi hiểu về loại mã hóa này, các bạn có thể <a href="https://github.com/hieuhdh/Cryptography/blob/master/ROT/rot13.cpp" style="text-decoration: none; color:blue">xem tại đây</a> 

Flag: **picoCTF{not_too_bad_of_a_problem}**
{: .notice}

## caesar

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141736511-222a24b9-2d50-4e27-93a0-0a44024e0090.png"><img src="https://user-images.githubusercontent.com/86739367/141736511-222a24b9-2d50-4e27-93a0-0a44024e0090.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh challenge</i></a></figcaption>
</figure>

Lại là 1 challenge về mật mã caesar. Hiểu đơn giản thì mã caesar là một dạng mật mã thay thế, trong đó mỗi ký tự trên văn bản sẽ được thay bằng một ký tự khác, có vị trí cách nó một khoảng xác định trong bảng chữ cái. 
Tham vọng của ta là tìm khoảng dịch chuyển các chữ cái hợp lí để biến thông điệp dspttjohuifsvcjdpoabrkttds thành một thông điệp có nghĩa. 
Vì bảng chữ cái có 26 kí tự, tức là có tối đa 25 khoảng dịch chuyển, tôi đã ngồi chạy  từng khoảng 1 thì biết được rằng khoảng dịch chuyển của message này là 25 kí tự, hay nó còn được gọi là `ROT25` tôi có <a href="https://github.com/hieuhdh/Cryptography/blob/master/ROT/rot25.cpp" style="text-decoration: none; color:blue">1 script</a> để giải mã chúng 

Flag: **picoCTF{crossingtherubiconzaqjsscr}**
{: .notice}

### Xem thêm

<div align="left">
    <a href="https://vi.wikipedia.org/wiki/M%E1%BA%ADt_m%C3%A3_Caesar" class="btn">Mật mã caesar</a> 
    <a href="https://privacycanada.net/classical-encryption/caesar-cipher/" class="btn">Mật mã caesar</a>
    <a href="https://cryptii.com/pipes/caesar-cipher" class="btn">Decode caesar online</a>
</div>

## Tapping

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/141736956-97b9172e-0f90-4346-ac1d-62a309f7f779.png"><img src="https://user-images.githubusercontent.com/86739367/141736956-97b9172e-0f90-4346-ac1d-62a309f7f779.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh sau khi "nc jupiter.challenges.picoctf.org 21610"</i></a></figcaption>
</figure>

Ở challenge này, ngay đầu tiên ta có dòng gợi ý: `What kind of encoding uses dashes and dots?`

Và đúng, tôi có nghiên cứu về loại mật mã này, đây là mật mã morse, sau khi nhận diện được loại mã hóa, ta dễ dàng có thể tự decode hoặc dùng 1 số công cụ decode mã <a href="https://vi.wikipedia.org/wiki/M%C3%A3_Morse" style="text-decoration: none; color:blue">morse</a> có sẵn ở trên intenet. 

Flag: **PICOCTF{M0RS3C0D31SFUN3902019519}**
{: .notice}

### Xem thêm

<div align="left">
    <a href="https://morsedecoder.com/vi/" class="btn">Mã morse</a> 
    <a href="https://morsecode.world/international/translator.html" class="btn" >Giải mã mã morse</a>
</div>

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

<br>
<h1 align="center">
  Epilogue
</h1> 

Sau những gì mà tôi đã chia sẻ ở trên mong rằng sẽ giúp ích được phần nào đó cho bạn đọc. Mọi thắc mắc hoặc góp ý bạn đọc có thể liên hệ <a href="https://hieuhdh.github.io/deuteri/" style="text-decoration: none; color:blue" >tại đây</a>.
{: .notice}

<br>
<div class="pre_next" style = "display: grid;grid-template-columns: 45% 45% 20px; grid-gap: 0 10%; font-weight: 500">
    <div class="item item1" style="text-align: right; position: relative;">
        <a href="https://hieuhdh.github.io/deuteri/Guide-Overview/" class="btn" style="width: 100%">
            <div style = "font-size: 12px; margin-bottom:-10px">Previous</div>
            <div style = "top:50%;bottom:50%; transform:translate(-50%, -50%); position: absolute; width: 25px; height:25px; left: 25px">
            	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="xMidYMid meet" data-rnw-int- style="vertical-align: middle;"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg>
            </div>
            <div style = "position: relative; font-size: 16px; font-weight: 500 ">[Guide] Overview</div>
        </a>
    </div>
    <div class="item item2" style="text-align: left; position: relative; ">
        <a href="https://hieuhdh.github.io/deuteri/Crypto-picoCTF-2021/" class="btn" style="width: 100%">
        	<div style = "font-size: 12px; margin-bottom:-10px"> Next</div>
        	<div style = "top:50%;bottom:50%; transform:translate(-50%, -50%); position: absolute; width: 25px; height:25px; right: 0px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;" ><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </div>
        	<div style = "position: relative; font-size: 16px; font-weight: 500 ">picoCTF-2021</div>
        </a>
    </div>
</div>
