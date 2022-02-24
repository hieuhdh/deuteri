---
layout: post
title: "RSA"
date: 2020-12-17
update: 
excerpt: "Vài điều tôi biết về mã hóa RSA"
tags: [Crypto, RSA]
comments: true
---

## **Thông tin**

Trong mật mã học, **RSA** là một thuật toán mật mã hóa khóa công khai. Đây là thuật toán đầu tiên phù hợp với việc tạo ra chữ ký điện tử đồng thời với việc mã hóa. Nó đánh dấu một sự tiến bộ vượt bậc của lĩnh vực mật mã học trong việc sử dụng khóa công cộng. RSA đang được sử dụng phổ biến trong thương mại điện tử và được cho là đảm bảo an toàn với điều kiện độ dài khóa đủ lớn.

RSA được xây dựng dựa trên lý thuyết số.

## **Lý thuyết cơ bản toán học trong RSA**
### **Mô tả sơ lược lý thuyết**

Để học RSA, chúng ta cần phải biết một số lý thuyết về đồng dư thức, module, số nguyên tố, hàm Euler, định lý số dư Trung Hoa,...

## **Quá trình tạo khóa và giải mã**
### **Quá trình tạo khóa**

1. Chọn 2 số nguyên tố lớn $$p$$ và $$q$$ sao cho $$p \ne q$$
2. Tính $$n=pq$$
3. Tính giá trị của hàm Euler:  $$\phi(n) = \big(p - 1\big)\big(q-1\big)$$
4. Chọn một số tự nhiên $$e$$ sao cho  $$ \begin{cases}   1<e<\phi(n) \\   \big(e, \phi(n)\big) = 1 \end{cases} $$
5. Tính $$d$$ sao cho $$de \equiv 1 \ \big(mod \ \phi(n) \big)$$ 

### **Lưu ý**

Ớ bước 3: Theo tiêu chuẩn [PKCS#1 v2.1](https://aita.gov.vn/tieu-chuan-rsa-crytography-standard-version-2.2-pkcs-1-v2.2){: .link_for_hover} người ta dùng $$\lambda = LCM(p-1,q-1)$$ thay cho 

$$\phi(n) = \big(p - 1\big)\big(q-1\big)$$

Ở bước 5: Ta dễ dàng biến đổi như sau:

$$ \begin{align*} 
    de  \equiv 1 \ \big(mod \ \phi(n) \big)  \Rightarrow & de - 1 \equiv \ \big(mod \ \phi(n) \big) 
    \\
    \Rightarrow &de  - 1 \vdots \phi(n) 
   \\ 
    \Rightarrow  &de  - 1 = k .\phi(n) 
    \\
    \Rightarrow &d = \frac{k.\phi(n) + 1}{e} =  \frac{k(p-1)(q-1) + 1}{e}
\end{align*}$$

###  **Quá trình mã hóa**

Giả sử An là **người nhận** thông điệp bí mật, chỉ An biết khóa bí mật {d, n} và mọi người có thể biết khóa công khai {e, n}. Nếu người gửi gửi một thông điệp $$m$$ cần được giữ bí mật cho An, hãy chọn khóa công khai của An {e, n} và sau đó tính $$c = m^e \ mod \ n$$ rồi gửi  đến cho An.

### **Quá trình giải mã**

Sau khi nhận được $$c$$, An sẽ tính toán theo khóa riêng mà cô ấy có bằng cách tính $$m = c^d \ mod \ n$$
Kết quả là thông điệp sẽ được gửi bởi người gửi. 

## **Tham khảo thêm**

[RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)){: .btn}
[Số nguyên tố](https://vi.wikipedia.org/wiki/S%E1%BB%91_nguy%C3%AAn_t%E1%BB%91){: .btn}
[Hàm Euler](https://vi.wikipedia.org/wiki/H%C3%A0m_phi_Euler){: .btn}
[Định lý số dư Trung Hoa](https://vi.wikipedia.org/wiki/%C4%90%E1%BB%8Bnh_l%C3%BD_s%E1%BB%91_d%C6%B0_Trung_Qu%E1%BB%91c){: .btn}
[Đồng dư thức](https://hieuhdh.github.io/deuteri/Math-Dong-du-thuc/){: .btn}

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
