---
layout: post
title: "[Math] Đồng dư thức"
date: 2020-10-15
excerpt: "Một vài vấn đề nhỏ về đồng dư thức và ứng dụng xử lí đồng dư trong lập trình"
tags: [Math, Module, Đồng dư thức]
comments: true
---
<h1 align="center">
    Nội dung
</h1> 

<div align="center">
    <h4>
        <a href="#dinh-nghia" style="text-decoration: none; color:#823af7">Định nghĩa | </a>
        <a href="#mot-so-tinh-chat-va-cac-phep-toan-dong-du-tren-vanh-module" style="text-decoration: none; color:#823af7">Một số tính chất và các phép toán đồng dư trên vành Module | </a>
        <a href="#mot-so-vi-du-ve-xu-li-dong-du-trong-toan-hoc" style="text-decoration: none; color:#823af7">Một số ví dụ về xử lí đồng dư trong toán học | </a>
        <a href="#mot-so-vi-du-ve-xu-li-dong-du-trong-lap-trinh" style="text-decoration: none; color:#823af7">Một số ví dụ về xử lí đồng dư trong lập trình | </a> 
        <a href="#co-the-ban-da-biet" style="text-decoration: none; color:#823af7">Có thể bạn đã biết</a> 
    </h4>
</div>

<h2 id="dinh-nghia">Định nghĩa</h2>

### Phép lấy phần dư trong phép chia

Xét $$ a , b ∈ \mathbb{Z} , b \ne 0 $$, kí hiệu $$ a \ mod \ b $$ là số dư khi chia a cho b . 

Ví dụ:
$$
\left[\begin{array}{l}
    20 \ mod \ 5 = 0 \\
    3 \ mod \ 2 = 1 \\
    1 \ mod \ 9 = 1 \ hay \ 1 \  mod \ 9 = -8
\end{array}\right.
$$

Định nghĩa một cách chuẩn mực, xét phép chia Euclide a cho b: $$ \begin{align*} 
    \begin{cases}   q \in \mathbb{Z} \\  
                    a = bq + r \\ 
                    | r | < | b |  
    \end{cases}
\end{align*}$$. 

Thì ta có: $$ a \ mod \ b = r $$

### Đồng dư thức

Xét số nguyên $$ n > 1 $$ và 2 số nguyên $$ a, b $$. Ta kí hiệu $$ a \equiv b \ ( mod \ n ) $$ khi $$ a $$ và $$ b $$ có cùng số dư khi chia cho $$ n $$, đọc là $$ a $$ đồng dư với $$ b $$ theo module $$ n $$. 

Ví dụ:
$$
\left[\begin{array}{l}
    12\equiv5 \ (mod \ 8) \\
    17\equiv1 \ (mod \ 16) \\
    1\equiv-8 \ (mod \ 9)
\end{array}\right.
$$

Như vậy, $$ a \equiv b \ (mod \ n)⟺ a \ mod \ n = b \ mod \ n $$.

<br>
<h2 id="mot-so-tinh-chat-va-cac-phep-toan-dong-du-tren-vanh-module">Một số tính chất và các phép toán đồng dư trên vành Module</h2>

Trong <a href="https://vi.wikipedia.org/wiki/L%C3%BD_thuy%E1%BA%BFt_v%C3%A0nh" style="text-decoration: none; color:blue">lí thuyết vành</a>, ta có: 
$$ \begin{align*} 
    \begin{cases}   \overline{a_n} + \overline{b_n} = \overline{a+b}_n \\
                    \overline{a_n} - \overline{b_n} = \overline{a-b}_n  \\
                    \overline{a_n} \overline{b_n} = \overline{ab}_n 
    \end{cases}
\end{align*}$$

Ví dụ, $$ \overline{4_{10}} +\overline{9_{10}} = \overline{4+9}_{10} = \overline{13}_{10} = \overline{10 + 3}_{10} = \overline{10_{10}} + \overline{3}_{10} = 0 + \overline{3}_{10} $$

Với $$ a , b , c \in \mathbb{Z} $$, nếu $$ a \equiv b \ (mod \ n) $$

Thì:
$$ \begin{align*} 
    \begin{cases}   -a\equiv-b \ (mod \ n) \\  
                    a + c \equiv b + c \ ( mod \ n ) \\ 
                    a - c \equiv b - c \ ( mod \ n ) \\
                    ca \equiv cb\ (mod\ n )  \\
                    a^c \equiv b^c \ ( mod \ n )  \\
                    p ( a ) \equiv p ( b ) \ ( mod \ n ) \ với \ p \ là \ một \ đa \ thức \ có \ nghiệm\ nguyên. 
    \end{cases}
\end{align*}$$

Ngược lại nếu: 
$$\left[\begin{array}{l}
    a + c \equiv b + c \ ( mod \ n ) \Longleftrightarrow  a \equiv b \ ( mod \ n ) \\
    \begin{cases}   c a \equiv c b \ ( mod \ n ) \\   (n,c) = 1 \end{cases} \Longrightarrow \ a \equiv b \ ( mod \ n ) 
\end{array}\right.
$$

Xét
$$ 
    \begin{align*} 
        \begin{cases}   
            a_1 ≡ b_1 \ ( mod \ n ) \\
            a_2 ≡ b_2 \ ( mod \ n )                
        \end{cases}
    \end{align*}
$$ 
, thì ta có:
$$ \begin{align*} 
    \begin{cases}   a_1 + a_2 \equiv b_1 + b_2 \ ( mod \ n ) \\
                    a_1 - a_2 \equiv b_1 - b_2 \ ( mod \ n )  \\
                    a_1 a_2 \equiv b_1 b_2 \ ( mod \ n )
    \end{cases}
\end{align*}$$

Với $$ a , b , c \in \mathbb{Z} $$, ta gọi $$ a \ mod \ b $$ là phép chia lấy phần dư của $$ a $$ cho $$ b $$. Ta có hai điều cần lưu ý:

$$ \begin{align*} 
    \begin{cases}   (a + b) \ mod \ c = (a \ mod \ c + b \ mod \ c) \ mod \ c \\
                    ab \ mod \ c = (a \ mod \ c )( b \ mod \ c) \ mod \ c = \Big[(a \ mod \ c) (b \ mod \ c) \Big] \ mod \ c
    \end{cases}
\end{align*}$$

<br>
<h2 id="mot-so-vi-du-ve-xu-li-dong-du-trong-toan-hoc">Một số ví dụ về xử lí đồng dư trong toán học</h2>

### Ví dụ 1

Chúng ta cần chứng minh 1 số chia hết cho 5 khi và chỉ khi số đó có chữ số tận cùng bằng 0 hoặc 5. 

#### Tiếp cận bài toán theo hướng xử lí đồng dư

#### Giải

Không mất tính tổng quát, giả sử số chúng ta cần xét là: $$A = a_na_{n-1}...a_1$$

Yêu cầu bài toán tương đương với $$A \equiv 0 \big(\text{ mod 5}\big) \ \big(1\big)$$

Mà $$A = a_na_{n-1}...a_1 = a_n10^{n-1} + a_{n-1}10^{n-2} +...+a_1 \ \big(2\big)$$

Kết hợp $$\big(1\big)$$ và $$\big(1\big)$$ suy ra $$a_n10^{n-1} + a_{n-1}10^{n-2} +...+a_1 \equiv 0 \big(\text{ mod }5\big) \ \big(3\big) $$

Mặc khác vì $$10 \equiv 0 \text{ mod 5} \Longrightarrow 10^{k} \equiv 0 \text{ mod 5} \big( \forall k \in \mathbb{N} \big)

Do đó, $$\big(3\big) \Longleftrightarrow 0 + 0 +...+ a_1 \equiv 0 \big(\text{ mod }5\big) \Longleftrightarrow a_1 \equiv 0 \big(\text{ mod }5\big) $$

Nói cách khác, để $$A$$ chia hết cho 5 khi và chỉ khi $$a_1$$ chia hết cho 5. Và để $$a_1$$ chia hết cho 5 khi và chỉ khi 
$$
\left[\begin{array}{l}
    a_1 = 0 \\
    a_1 = 5
\end{array}\right.
$$

Ta có điều phải chứng minh.

<br>
<h2 id="mot-so-vi-du-ve-xu-li-dong-du-trong-lap-trinh">Một số ví dụ về xử lí đồng dư trong lập trình</h2>

### Ví dụ 2

Chúng ta cần tính tổng của dãy số $$ S(n) = 5+7+...+(2n+1) $$ và kết quả sẽ lấy module cho $$1000000009$$.

#### Hướng tiếp cận cơ bản

Điều đầu tiên chúng ta nghĩ đến chính là dùng một dòng `for i chạy từ 5 đến 2n+1` và tiến hành cộng dồn,  mỗi lần cộng xong sẽ tăng bước nhảy của i lên 2 đơn vị. Sau đó lấy kết quả chia lấy dư thì sẽ thu được đáp án cần tìm của bài toán.

Đối với việc code bằng ngôn ngữ `python` thì điều này hoàn toàn đúng, vì đây là 1 cách cơ bản nhất cũng như chắc ăn nhất mà ai ai cũng có thể nghĩ ra. Nhưng đặt một giả thiết là chúng ta đang làm việc trên ngôn ngữ C++ và $$2 \le n \le 10^{18}$$, và cụ thể lúc này ta đặt $$n = 10^{18}$$ thì câu chuyện giải quyết vấn đề này theo `Hướng tiếp cận cơ bản` thực sự không khả thi. Vậy ta giải quyết như thế nào?

Dựa vào xử lí đồng dư, tôi có một ý tưởng về một hướng tiếp cận khác của vấn đề trên với điều kiện **bình phương của số module không được vượt quá kiểu dữ liệu lớn nhất trong C++**. Vì sao lại có điều kiện như vậy thì tôi sẽ nói sau khi trình bày xong hướng tiếp cận thứ hai này. 

#### Hướng tiếp cận thứ 2

Bước 1: Việc đầu tiên là xét bình phương số module:

$$ \begin{align*} 
    1000000009^2=100000&0018000000081 \approx 10^{18} = {(10^3)}^6 = 1000^6 < {(1024)}^6  \\
    và& \ {(1024)}^6 = {(2^{10})}^6 = 2^{60}< 2^{63}-1
\end{align*}$$

Mà phạm vi tối đa của kiểu dữ liệu `long long` (tôi đặt là $$ll$$) trong C++ là $$ll=2^{63}-1$$. Vậy là hướng tiếp cận này của tôi có vẻ khả thi.

Bước 2: Đặt $$ M= 1000000009 $$. Tiến hành phân tích tổng $$S$$

$$ \begin{align*} 
    S(n)& + 4 = 1 + 3+ 5 + 7 + 9 +...+ (2n + 1) = (n + 1)^2 \\
    \Longrightarrow S(n)&   = (n + 1)^2 - 4  = (n-1)(n+3) \\
    \Longrightarrow S(n)& \ mod  \ M   = \big(n-1 \big)\big(n+3\big) \ mod \ M \\
    \Longrightarrow S(n)& \ mod  \ M    =\bigg \{ \Big[\big(n-1\big) \ mod \ M \Big] \Big[\big(n+3\big) \ mod \ M \Big] \bigg\} \ mod \ M 
\end{align*}$$

Từ cách phép biến đổi trên, ta đã biến phân tích biểu thức tổng một cách mạch lạc cũng như làm gọn vấn đề hơn, lúc này chỉ cần ta nhận được tham số $$n$$ truyền vào thì ta dễ dàng đưa ra kết quả cho bài toán trong việc code bằng C++. Vậy hướng tiếp cận này của tôi đã đúng với tất cả các trường hợp thử nghiệm của $$n$$ thỏa $$2 \le n \le 10^{18}$$ chưa? Đến thời điểm hiện tại, tôi nghĩ là hướng tiếp cận này chắc chắn đúng với toàn bộ trường hợp thử nghiệm trên.

<table>
  <thead>
    <tr>
      <td align="left">
        ❓ 
      </td>
<td style = "font-weight: bold">Vì sao bình phương của Module phải bé hơn phạm vi tối đa của kiểu dữ liệu lớn nhất trong C++?</td>
    </tr>
  </thead>
</table>

Để trả lời cho câu hỏi trên, tôi sẽ đưa ra một bài toán nho nhỏ là: Xuất ra giá trị của số nguyên $$n$$ (kiểu dữ liệu integer - từ khóa `int`)được nhập từ bàn phím. Điều này chẳng có gì phải bàn nếu ta nhập các giá trị nhỏ như `1, 2, 3,...` từ bàn phím. Nhưng nếu chúng ta nhập `2147483648` từ bàn phím thì sao?

Đúng vậy, lúc này hiện tượng <a href="https://vi.wikipedia.org/wiki/Tr%C3%A0n_s%E1%BB%91_nguy%C3%AAn" style="text-decoration: none; color:blue">tràn số nguyên</a> sẽ xảy ra, vì phạm vi tối đa của kiểu dữ liệu `int` chỉ là $$2^{31}-1$$ tức $$2147483647$$.

Ví dụ tôi xét module là 1 số mà bình phương của nó vượt quá $$2^{63} -1$$ tức là phạm vi tối đa của kiểu dữ liệu `long long`. Để ý sẽ thấy rằng, tôi đã tách tổng trên thành 1 tích với 2 thừa số là `n-1` và `n+3`, và tôi nhận xét: 

$$ \begin{cases}   n-1 \ mod  \ M < M \\   n + 3 \ mod \ M < M  \end{cases}   \Longrightarrow \Big[\big(n-1\big) \ mod \ M \Big] \Big[\big(n+3\big) \ mod \ M \Big] < M^2 $$ 

Dựa vào nhận xét trên, dễ dàng ta có thể nhập 1 số nguyên `n` đủ mạnh kết hợp với số module (tôi đặt là `M`) đủ lớn thì hiện tượng tràn số sẽ xuất hiện. Ví dụ `M = 4294967296` và `n = 4294967292` thì lúc này cả $$n-1$$ và $$n+3$$ đều nhỏ hơn số module và nó gần bằng với số module, hay nói cách khác thì tích 2 thừa số này gần bằng $$M^2$$ và điều quan trọng là $$M^2 = 4294967296^2 = 2^{64} > ll$$. Lúc này đây, chính xác chúng ta phải tìm 1 hướng tiếp cận khác đối với bài toán này.

Và những lập luận trên của tôi cũng đã giải thích cho việc tại sao trong hướng tiếp cận của tôi chỉ đúng với điều kiện số Module có bình phương phải nhỏ hơn hoặc bằng phạm vi tối đa của kiểu dữ liệu có phạm vi lớn nhất trong C++.

<br>
<h2 id="co-the-ban-da-biet">Có thể bạn đã biết</h2>

<div align="left">
    <a href="https://en.wikipedia.org/wiki/Fermat's_little_theorem" class="btn">Định lí fermat nhỏ</a> 
    <a href="https://en.wikipedia.org/wiki/Chinese_remainder_theorem" class="btn">Định lí số dư Trung Hoa</a>
    <a href="https://en.wikipedia.org/wiki/Modular_multiplicative_inverse" class="btn">Nghịch đảo Module</a>
    <a href="https://en.wikipedia.org/wiki/Euler's_theorem" class="btn">Định lí Euler</a>
</div>

<br>
<h1 align="center">
  Lời kết
</h1> 

Sau những gì mà tôi đã chia sẻ ở trên mong rằng sẽ giúp ích được phần nào đó cho bạn đọc. Mọi thắc mắc hoặc góp ý bạn đọc có thể liên hệ <a href="https://hieuhdh.github.io/deuteri/" style="text-decoration: none; color:blue" >tại đây</a>.
{: .notice}