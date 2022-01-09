---
layout: post
title: "ROT-X"
date: 2020-12-15
update: 2020-12-15
excerpt: "Something about ROT-X which I know"
tags: [Crypto, ROT]
comments: true
---

<h2 id="some-thing-about-rot-x">Something about ROT-X</h2>

<p>ROT-X ("rotate by X places", sometimes hyphenated ROT-X) is a simple letter substitution cipher that replaces a letter with the Xth letter after it in the alphabet. ROT13 is a special case of the Caesar cipher which was developed in ancient Rome.</p>
<p>Because there are 26 letters (2×13) in the basic Latin alphabet, ROT13 is its own inverse; that is, to undo ROT13, the same algorithm is applied, so the same action can be used for encoding and decoding. The algorithm provides virtually no cryptographic security and is often cited as a canonical example of weak encryption. It means encrypt(encrypt(message)) = decrypt(message).</p>
<p><strong>ROT13</strong> is used in online forums as a means of hiding spoilers, punchlines, puzzle solutions, and offensive materials from casual glance. ROT13 has inspired a variety of letter and word games online and is frequently mentioned in newsgroup conversations.</p>

<p>In a general way: encrypt(message) with ROT-X = decrypt(message) with ROT-(26-X)</p>
<p><b>Example:</b>
<li style="text-indent: 50px;">Encrypt(message) with ROT1 = decrypt(message) with ROT25 </li>
<li style="text-indent: 50px;">Decrypt(message) with ROT1 = encrypt(message) with ROT25</li>
<li style="text-indent: 50px;">Special case with <strong>ROT13</strong>: decrypt(message) = encrypt(encrypt(message))</li>
</p>
<p>Expanding the alphabet (can add a special character such as "[, ], {, }, 1, 2, 3, 4, 5, 6, 7, 8, 9, ), ...", then according to the operating mechanism of the ROT-X cipher, we can easily decode or encode them.</p>

<h2 id="learn-more">Learn more</h2>

<div align="left">
    <a href="https://vi.wikipedia.org/wiki/ROT13" class="btn">ROT 13 wikipedia</a> 
    <a href="https://github.com/hieuhdh/Cryptography/tree/master/ROT" class="btn">Some code about ROT-X</a>
</div>

<br>
<h1 align="center">
  Epilogue
</h1> 

<table>
  <thead>
    <tr>
<td style = "font-weight: bold">After what I have shared above, I hope it will be of some help to readers. If you have any questions or comments, you can contact me <a href="https://hieuhdh.github.io/deuteri/" class = "link_for_hover">here</a>.</td>
    </tr>
  </thead>
</table>

<br>
<div class="pre_next" style = "display: grid;grid-template-columns: 45% 45% 20px; grid-gap: 0 10%; font-weight: 500">
    <div class="item item1" style="text-align: right; position: relative;">
        <a href="https://hieuhdh.github.io/deuteri/Math-Overview/" class="btn" style="width: 100%">
            <div style = "font-size: 12px; margin-bottom:-10px">Previous</div>
            <div style = "top:50%;bottom:50%; transform:translate(-50%, -50%); position: absolute; width: 25px; height:25px; left: 25px">
            	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="xMidYMid meet" data-rnw-int- style="vertical-align: middle;"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg>
            </div>
            <div style = "position: relative; font-size: 16px; font-weight: 500 ">[Math] Overview</div>
        </a>
    </div>
    <div class="item item2" style="text-align: left; position: relative; ">
        <a href="https://hieuhdh.github.io/deuteri/Crypto-RSA/" class="btn" style="width: 100%">
        	<div style = "font-size: 12px; margin-bottom:-10px"> Next</div>
        	<div style = "top:50%;bottom:50%; transform:translate(-50%, -50%); position: absolute; width: 25px; height:25px; right: 0px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;" ><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </div>
        	<div style = "position: relative; font-size: 16px; font-weight: 500 ">[Crypto] RSA</div>
        </a>
    </div>
</div>

