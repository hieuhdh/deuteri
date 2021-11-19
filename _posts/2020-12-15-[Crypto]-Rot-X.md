---
layout: post
title: "ROT-X"
date: 2020-12-15
excerpt: "Something about ROT-X which I know"
tags: [Crypto, ROT]
comments: true
---
<h1 align="center">
    Contents
</h1> 

<div align="center">
    <h4>
        <a href="#some-thing-about-rot-x" style="text-decoration: none; color:#823af7">Something about ROT-X | </a>
        <a href="#learn-more" style="text-decoration: none; color:#823af7">Learn more</a> 
    </h4>
</div>

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

After what I have shared above, I hope it will be of some help to readers. If you have any questions or comments, you can contact me <a href="https://hieuhdh.github.io/deuteri/" style="text-decoration: none; color:blue" >here</a>.
{: .notice}