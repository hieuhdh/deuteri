---
layout: post
title: "[Math] Đại số Boole"
date: 2021-10-15
excerpt: "Một vài vấn đề nhỏ trong đại số Boole và sơ lược cách xử lí hàm Boole trên bìa Karnaugh"
tags: [Math, Boolean]
comments: true
---
<h1 align="center">
    Nội dung
</h1> 

<div align="center">
    <h4>
        <a href="#dinh-nghia" style="text-decoration: none; color:#823af7">Định nghĩa | </a>
        <a href="#tinh-chat" style="text-decoration: none; color:#823af7">Tính chất Đại số Boole | </a>
        <a href="#mot-so-vi-du-ve-xu-li-dong-du-trong-lap-trinh" style="text-decoration: none; color:#823af7">Một số ví dụ về xử lí đồng dư trong lập trình | </a> 
        <a href="#co-the-ban-da-biet" style="text-decoration: none; color:#823af7">Có thể bạn đã biết</a> 
    </h4>
</div>

<h2 id="dinh-nghia">Định nghĩa</h2>

<div>
    Trong đại số trừu tượng, <strong>đại số Boole</strong> là một cấu trúc đại số có các tính chất cơ bản của cả các phép toán trên tập hợp và các phép toán logic. Cụ thể, phép toán trên tập hợp được quan tâm là phép toán giao, phép toán hợp, phép toán bù và các phép toán logic là <strong>Và</strong>, <strong>Hoặc</strong>, <strong>Không</strong>.
</div>
<div>
    Đại số Boole đươc đặt tên theo George Boole (1815-1864) – Một nhà toán học người Anh.
</div>
<div>
    <a href="https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A1i_s%E1%BB%91_Boole" style="text-decoration: none; color:blue" >Xem thêm</a>.
</div>

<h2 id="tinh-chat">Tính chất</h2>

Cho một đại số Boole $$\big(A, \wedge, \vee, \neg, 0, 1 \big)$$. Ta có bảng mô tả các tính chất sau:

|:---:  | :---:                                         |    :----                         |      
|STT    | Tên tính chất                                 | Thể hiện                           | 
|:---:  | :---                                          |    :----                          |     
|1| $$\text{Tính giao hoán}$$| $$\forall x, y, z \in A \text{. Ta có} \begin{cases}  x \wedge y = y \wedge x \\ x \vee y = y \vee x \end{cases} $$    |    
|2| Tính kết hợp | $$\forall x, y, z \in A \text{. Ta có} \begin{cases}  \big(x \wedge y \big) \wedge z = x \wedge \big (y \wedge z \big) \\  \big( x \vee y \big) \vee z = x  \vee \big (y \vee z \big) \end{cases} $$|           
|3| Tính phân phối   | $$\forall x, y, z \in A \text{. Ta có} \begin{cases}  x \wedge \big( y \vee z \big)= \big(x \wedge y \big ) \vee \big(x \wedge z \big) \\  x \vee \big( y \wedge z \big)= \big(x \vee y \big ) \wedge \big(x \vee z \big)\end{cases}  $$|               
|4|Tính hấp thụ|$$\forall x, y\in A \text{. Ta có} \begin{cases}x \vee \big(x \wedge y \big) = x\\ x \wedge\big(x \vee y \big) = x\end{cases}$$|               
|5| Tính trung hòa|$$\forall x\in A \text{. Ta có} \begin{cases}  x \vee 0 = 0 \vee x = x \\ x \wedge 1 = 1 \wedge x = x\end{cases}$$ |               
|6| Tính bù |$$\forall x\in A \text{. Ta có} \begin{cases}  x \wedge \neg x = 0 \\ x \vee \neg x = 1 \end{cases} $$ |              |
{: rules="groups"}


<h1 align="center">
  Lời kết
</h1> 

Sau những gì mà tôi đã chia sẻ ở trên mong rằng sẽ giúp ích được phần nào đó cho bạn đọc. Mọi thắc mắc hoặc góp ý bạn đọc có thể liên hệ <a href="https://hieuhdh.github.io/deuteri/" style="text-decoration: none; color:blue" >tại đây</a>.
{: .notice}