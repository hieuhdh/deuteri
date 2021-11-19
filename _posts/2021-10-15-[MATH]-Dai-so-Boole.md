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
        <a href="#ham-boole" style="text-decoration: none; color:#823af7">Hàm Boole | </a>
        <a href="#dang-noi-roi-chinh-tac-cua-ham-boole" style="text-decoration: none; color:#823af7">Dạng nối rời chính tắc của hàm Boole | </a>
        <a href="#bia-karnaugh" style="text-decoration: none; color:#823af7">Bìa Karnaugh | </a> 
        <a href="#cach-dung-bia-kar-trong-viec-don-gian-ham-boole" style="text-decoration: none; color:#823af7">Cách dùng bìa Kar trong việc đơn giản biểu thức trong đại số Boole | </a> 
        <a href="#[CHINHQUY]-cach-dung-bia-kar-trong-viec-don-gian-ham-boole" style="text-decoration: none; color:#823af7">Một cách chính quy khác trong việc dùng bìa Kar để tối giản hàm Boole | </a> 
        <a href="#co-the-ban-da-biet" style="text-decoration: none; color:#823af7">Có thể bạn đã biết</a> 
    </h4>
</div>

<h2 id="dinh-nghia">Định nghĩa</h2>

<div>
    Trong đại số trừu tượng, <strong>đại số Boole</strong> là một cấu trúc đại số có các tính chất cơ bản của cả các phép toán trên tập hợp và các phép toán logic. Cụ thể, phép toán trên tập hợp được quan tâm là phép toán giao, phép toán hợp, phép toán bù và các phép toán logic là <strong>Và</strong>, <strong>Hoặc</strong>, <strong>Không</strong>.
</div>
<div>
    <strong>Đại số Boole</strong> được đặt tên theo George Boole (1815-1864) – Một nhà toán học người Anh.
</div>
<div>
    <a href="https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A1i_s%E1%BB%91_Boole" style="text-decoration: none; color:blue" >Xem thêm</a>
</div>
<br>
<h2 id="tinh-chat">Tính chất</h2>

Cho một đại số Boole $$\big(A, \wedge, \vee, \neg, 0, 1 \big)$$. Ta có bảng mô tả các tính chất sau:

|:---:  | :---:                                         |    :----                         |      
|STT    | Tên tính chất                                 | Thể hiện                           | 
|:---:  | :---                                          |    :----                          |     
|1| Tính giao hoán| $$\forall x, y, z \in A \text{. Ta có} \begin{cases}  x \wedge y = y \wedge x \\ x \vee y = y \vee x \end{cases} $$    |    
|2| Tính kết hợp | $$\forall x, y, z \in A \text{. Ta có} \begin{cases}  (x \wedge y ) \wedge z = x \wedge  (y \wedge z ) \\  ( x \vee y ) \vee z = x  \vee  (y \vee z ) \end{cases} $$|           
|3| Tính phân phối   | $$\forall x, y, z \in A \text{. Ta có} \begin{cases}  x \wedge ( y \vee z )= (x \wedge y  ) \vee (x \wedge z ) \\  x \vee ( y \wedge z )= (x \vee y  ) \wedge (x \vee z )\end{cases}  $$|               
|4|Tính hấp thụ|$$\forall x, y\in A \text{. Ta có} \begin{cases}x \vee (x \wedge y ) = x\\ x \wedge(x \vee y ) = x\end{cases}$$|               
|5| Tính trung hòa|$$\forall x\in A \text{. Ta có} \begin{cases}  x \vee 0 = 0 \vee x = x \\ x \wedge 1 = 1 \wedge x = x\end{cases}$$ |               
|6| Tính bù |$$\forall x\in A \text{. Ta có} \begin{cases}  x \wedge \neg x = 0 \\ x \vee \neg x = 1 \end{cases} $$ |              |
{: rules="groups"}

<br>
<h2 id="ham-boole">Hàm Boole</h2>
<h3 id="bien-boole">Biến Boole</h3>
<h4 id="dinh-nghia-bien-boole">Định nghĩa</h4>

Biến $$x$$ được gọi là biến Boole nếu nó chỉ nhận các giá trị trong tập $$\big\{0, 1\big\}$$

Một hàm từ tập $$\Big\{ \big( x_1, x_2, ..., x_n \big) \vert x_i \in \big \{0, 1 \big\}, 1\le i \le n \Big\} $$ tới tập $$\big \{0, 1\big \}$$ được gọi là một hàm Boole bậc $$n$$.

Ví dụ: $$F \big(x, y, z \big) = x + y + z $$ được gọi là hàm Boole bậc 3.

<br>
<h2 id="dang-noi-roi-chinh-tac-cua-ham-boole">Dạng nối rời chính tắc của hàm Boole</h2>
<h3 id="mot-vai-dieu-can-biet">Một vài điều cần biết</h3>
<h4 id="cac-dinh-nghia">Định nghĩa về từ đơn, đơn thức, từ tối tiểu (đơn thức tối tiểu), công thức đa thức </h4>

Từ đơn là mỗi biến Boole $$x_i$$ hoặc $$\neg x_i$$ trong tập hợp các hàm Boole $$n$$ biến $$F_n$$ theo $$n$$ biến $$x_1, x_2, ..., x_n$$.

<div>Đơn thức là tích khác không của một số hữu hạn từ đơn.</div>
<div>Từ tối tiểu (đơn thức tối tiểu) là tích khác không của đúng n từ đơn.</div>
<div>Công thức đa thức là công thức biểu diễn hàm Boole thành tổng của các đơn thức. </div>
<div>Dạng nối rời chính tắc bản chất chính là công thức biểu diễn hàm Bool <strong>thành tổng của các từ tối tiểu</strong>.</div>

<h4 id="vi-du">Ví dụ</h4> 

textmax
{: .notice}

Xét hàm Boole với ba biến $$x,y,z$$ ta có: 

$$ \begin{align*} 
    \bullet \ \ & x, y,z, \neg x, \neg y, \neg z \text{ là các từ đơn.}\\  
    \bullet \ \ & xyz \text{ là từ tối tiểu (đơn thức tối tiểu).} \\ 
    \bullet \ \ & xy, xz, \neg yz \text{ là các đơn thức.}  \\
    \bullet \ \ & xyz \wedge x\neg yz \text{ là một dạng nối rời chính tắc.}
\end{align*}$$

<div id="luu-y"><strong>Lưu ý</strong></div>
<div>Công thức đa thức F được gọi là tối tiểu nếu với bất kì công thức G của hàm Boole đã cho mà đơn giản hơn F thì <strong>G và F đơn giản như nhau.</strong> </div>
<h4 id="cach-tim-dang-noi-roi-chinh-tac-co-ban">Cách tìm dạng nối rời chính tắc cơ bản</h4>
<div><strong>Bước 1:</strong> Bổ sung các từ đơn còn thiếu vào các đơn thức.</div>
<div><strong>Bước 2:</strong> Với mỗi đơn thức thu được ở bước 1, ta nhân đơn thức đó với tổng của những từ đơn bị thiếu và phần bù của nó trong đơn thức đó.</div>
<div><strong>Bước 3:</strong> Tiếp tục khai triển hàm thu được ở bước 2 và loại bỏ những đơn thức bị trùng. Công thức đa thức thu được chính là dạng nối rời chính tắc của hàm Boole ban đầu.</div>
<h4 id="bai-toan-1">Bài toán 1 </h4> 
<div>Trong F4 tìm dạng nối rời chính tắc: (F4 ở đây ám chỉ hàm Boole 4 biến)</div> 

$$F \big( x,y,z,t \big) = xz \neg t \vee \neg y \neg z \neg t \vee xyt \vee \neg x yz \vee \neg x \neg y \neg z \neg t \vee \neg x yz \neg t$$

**Giải:**

**Bước 1:** Các từ đơn còn thiếu: $$x, \neg x, y, \neg y, z, \neg z$$

**Bước 2:** Các từ đơn ở bước 1 tạo thành bộ đối ngẫu (hay gọi là phần bù của nhau). Tiến hành thêm và nhân: 

$$ \begin{align*} 
    F& \big( x,y,z,t \big) = f \\ 
    f& = xz \neg t \vee \neg y \neg z \neg t \vee xyt \vee \neg x yz \vee \neg x \neg y \neg z \neg t \vee \neg x yz \neg t \\  
    f& = xz \neg t + \neg y \neg z \neg t + xyt + \neg x yz +  \neg x \neg y \neg z \neg t + \neg x yz \neg t \\ 
    f& = x \big( y + \neg y \big) z \neg t + \big( x + \neg x \big)\neg y \neg z \neg t + xy \big(z + \neg z \big)t + \neg x yz \big(t + \neg t \big) +  \neg x \neg y \neg z \neg t + \neg x yz \neg t \\
    f& = xyz \neg t + x \neg y zt + x\neg y \neg z \neg t + \neg x \neg y \neg z \neg t + xyzt + xy \neg z t + \neg x yzt + \neg x yz \neg t + \neg x \neg y \neg z \neg t + \neg x y \neg z t
\end{align*}$$

**Bước 3:** Loại bỏ những đơn thức bị trùng 

$$f = xyz \neg t + x \neg y z \neg t + x \neg y \neg z \neg t + \neg x \neg y \neg z \neg t + xyzt + xy \neg z t + \neg x yzt + \neg x yz \neg t + \neg x y \neg z t$$
<div><strong>Đây cũng chính là dạng nối rời chính tắc cần tìm.</strong></div>
<br>
<h2 id="bia-karnaugh">Bìa Karnaugh (bìa Kar)</h2>
<h3 id="mot-vai-thong-tin">Một vài thông tin</h3>
<h4 id="thong-tin-ve-bia-kar">Thông tin về bìa Kar</h4>     
<div>Bìa Karnaugh (hay sơ đồ Các-nô, biểu đồ Veitch) là một công cụ vô cùng thuận tiện cho việc đơn giản các biểu thức trong đại số Boole. Hoạt động dựa theo nguyên lí mã Gray (hai bộ kí số liên tiếp đối ngẫu nhau). </div>
<h4 id="tham-khao-them">Tham khảo thêm</h4>

<div align="left">
    <a href="https://vi.wikipedia.org/wiki/B%C3%ACa_Karnaugh" class="btn">Bìa Karnaugh (VN)</a> 
    <a href="https://en.wikipedia.org/wiki/Karnaugh_map" class="btn">Bìa Karrnaugh(EN)</a>
    <a href="https://vi.wikipedia.org/wiki/M%C3%A3_Gray" class="btn">Mã Gray</a>
</div>

<br>
<h3 id="cac-cach-bieu-dien-bia-kar">Các cách biểu diễn bìa Kar</h3>
<h4 id="bieu-dien-bia-kar-theo-tu-don">Biểu diễn theo từ đơn</h4>

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/142407228-59d06a12-64f3-4e9c-b0f3-0878de2397f9.png"><img src="https://user-images.githubusercontent.com/86739367/142407228-59d06a12-64f3-4e9c-b0f3-0878de2397f9.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh biểu diễn bìa Kar theo từ đơn</i></a></figcaption>
</figure>

<br>
<h4 id="bieu-dien-bia-kar-theo-ki-so">Biểu diễn theo dạng kí số (đưa từ đơn ra ngoài)</h4>
<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/142407432-4f93badc-caff-4cdb-bc90-74c4bfdc98dd.png"><img src="https://user-images.githubusercontent.com/86739367/142407432-4f93badc-caff-4cdb-bc90-74c4bfdc98dd.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh biểu diễn bìa Kar theo dạng kí số (đưa từ đơn ra ngoài)</i></a></figcaption>
</figure>
<br>
<h3 id="mot-vai-thuat-ngu-trong-bia-kar">Một vài thuật ngữ trong bìa Kar</h3>
<h4 id="te-bao-te-bao-lon">Tế bào, tế bào lớn</h4>

T là tế bào của bìa Kar thì T là hình chữ nhật (theo nghĩa rộng) gồm $$2^{n-k}$$ ô với $$0 \le k \le n$$

Giả sử T là 1 tế bào lớn của bìa Kar thì:
* $$T$$ *là một tế bào và* $$T \subseteq Kar \big(f\big)$$  
* *Hơn nữa:* $$\nexists \ T^{'}:  T^{'} \ne T \wedge T \subseteq T^{'}   \subseteq Kar \big(f\big)$$ 

<br>
<h2 id="cach-dung-bia-kar-trong-viec-don-gian-ham-boole">Cách dùng bìa Kar trong việc đơn giản biểu thức trong đại số Boole</h2>
<h4>Cách dùng</h4>
<div>Đối chiếu các đơn thức trong biểu thức đại số Boole xem từ đơn nào không xuất hiện trong các đơn thức đấy, thì chúng ta sẽ điền vào bảng các kí số 0 hoặc 1 (các kí số này là do người ra đề quy định) vào bảng sao cho các kí số này tạo thành 1 tế bào là cho chúng từ đơn trong biểu thức đại số Boole ban đầu không xuất hiện. </div>
<div><strong>Lưu ý:</strong> Khi gom nhóm cái kí số thì phải gom theo dạng lũy thừa bậc n của 2, tuyệt đối không được gom 1 số lẽ các kí số.</div>
<div>Ta cùng quay lại bài toán 1, ở đây ta sẽ điền các kí số 0 hoặc 1 vào bìa Kar sao cho hợp lí</div>
<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/142408551-b59d37fb-3c2d-4ea2-80b5-5aa71af33c97.png"><img src="https://user-images.githubusercontent.com/86739367/142408551-b59d37fb-3c2d-4ea2-80b5-5aa71af33c97.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh bìa Kar sau khi điền đầy đủ kí số</i></a></figcaption>
</figure>
<div>
Từ bìa Kar ở trên ta dễ dàng thấy được dạng nối rời chính tắc của hàm Boole đã cho, bản chất nó chính là tổng các tế bào gồm 1 ô duy nhất. Và công dạng nối rời chính tắc cần tìm
</div>

$$f = xyz \neg t + x \neg y z \neg t + x \neg y \neg z \neg t + \neg x \neg y \neg z \neg t + xyzt + xy \neg z t + \neg x yzt + \neg x yz \neg t + \neg x y \neg z t$$

<h4 id = "huong-tiep-can-bia-kar-theo-dang-the-hien-ki-so">Hướng tiếp cận bìa Kar theo dạng thể hiện các kí số (ở hình dưới)</h4>
<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/142407432-4f93badc-caff-4cdb-bc90-74c4bfdc98dd.png"><img src="https://user-images.githubusercontent.com/86739367/142407432-4f93badc-caff-4cdb-bc90-74c4bfdc98dd.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh biểu diễn bìa Kar theo dạng kí số (đưa từ đơn ra ngoài)</i></a></figcaption>
</figure>
<div><strong>Thắc mắc:</strong> Các bạn sẽ thấy điều kì lạ ở hình trên và sẽ đặt ra câu hỏi là tại sao đi theo hàng ngang và hàng dọc thì lại là 01 rồi đến 11, nó phải là 01 rồi mới đến 10 chứ ?. Để trả lời cho câu hỏi này chúng ta sẽ đi tiếp phần phía dưới.</div>
<div><strong>Ràng buộc:</strong> Nếu bạn biểu diễn bìa Kar theo dạng đưa kí số vào thì bắt buộc bạn phải điền bộ số gồm 2 kí số giống hệt hình phía bên trên và đặt chỉ số như sau:</div>
<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/142409233-13ab2c65-0543-4011-97d9-69b9132f25d9.png"><img src="https://user-images.githubusercontent.com/86739367/142409233-13ab2c65-0543-4011-97d9-69b9132f25d9.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh sau khi đã add thứ tự chỉ số vào bìa Kar</i></a></figcaption>
</figure>

Những con số $$0, 1, 2,... , 15$$ đã điền ở trên thật chính là các con số chỉ thứ tự của bộ trạng thái $$\big(x, y, z, t \big)$$ được thể hiện trong bảng chân trị 4 biến theo mã Gray trải dài từ trạng thái $$0000$$ đến trạng thái $$1111$$ chứ hoàn toàn không phải điền một cách tùy ý.

Quay trở lại **bài toán 1**, thay vì ta xem $$x, y, z, t$$ là các biến thì ta sẽ tìm cách đơn giản hơn (cho máy tính hiểu) chuyển hết về kí số và điền như sau:
<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/142409588-f0653c91-8531-4977-b045-4895137adb16.png"><img src="https://user-images.githubusercontent.com/86739367/142409588-f0653c91-8531-4977-b045-4895137adb16.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh cho sự khoanh vùng 1 vài tế bào trong bìa Kar - đảm bảo sơ đồ phủ</i></a></figcaption>
</figure>

<h4 id = "giai-thich-cho-cach-khoanh">Giải thích cho cách khoanh</h4>

Đơn thức đầu tiên: $$xz \neg t$$ ta thấy chỉ có từ đơn $$y$$ không xuất hiện, nghĩa là $$y$$ đã bị đổi trạng thái từ `0` qua `1` hoặc từ `1` qua `0`. Mà  nằm ở thể khoẳng định (hay còn gọi là ở trạng thái cao - nếu xét về mặt các kí số) thì chắc chắn nằm ở trạng thái `1` (hay còn gọi là nhận chân trị `1`) và $$\neg t$$ là phủ định thì chắc chắn nằm ở trạng thái `0`.  Từ đây ta có thể kết luận: $$xz \neg t = xyz \neg t + x \neg y z \neg t$$ hay nói cách khác $$xz \neg t$$ sẽ nhận 2 ô ở 2 trạng thái là $$1110$$ và $$1010$$ như trên. Lý giải tương tự với các từ đơn còn lại.

**Ngoài ra:** Ta chỉ cần tách hình bên trên thành những tế bào gồm 1 ô thì đấy chính xác là dạng nối rời chính tắc cần tìm. Hiển như dạng nối rời chính tắc này trùng với dạng nối rời chính tắc ở 2 cách trên vì bản chất 3 cách này như nhau.

<h4 id = "mo-rong">Mở rộng cho việc ứng dụng bìa Kar vào việc rút gọn tốt giản (hay còn gọi là tìm công thức đa thức tối tiểu) trong hàm Boole (xem ảnh dưới đây)</h4>
<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/142410839-be652e67-43bc-42e5-8021-6265d0c20450.png"><img src="https://user-images.githubusercontent.com/86739367/142410839-be652e67-43bc-42e5-8021-6265d0c20450.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh cho việc khoanh tối giản bìa Kar </i></a></figcaption>
</figure>

<br>
<div><strong>Từ hình ảnh trên, ta tìm kiếm được 1 vài thứ </strong></div>

1. Các tế bào lớn: $$x\neg t \neg t, xz \neg t, yz, yt, \neg y \neg z \neg t $$ 
2. Một vài hàm Boole được rút gọn: $$\left[ \begin{array}{cc}  f = x& \neg y \neg t + xz \neg t + yz + yt + \neg y \neg z \neg t \\  f = x&z \neg t + yz + yt + \neg y \neg z \neg t \\ f = x& \neg y \neg t + xz \neg t + yz + yt \\  ... \end{array} \right.$$ 
3. Hàm Boole được rút gọn tối giản: $$\left[ \begin{array}{cc}  f = x& \neg y \neg t + xz \neg t + yz + yt \\ f = x&z \neg t + \neg y \neg z \neg t + yz + yt  \end{array} \right.$$

<br>
<table>
  <thead>
    <tr>
      <td align="left">
        ❓ 
      </td>
<td style = "font-weight: bold">Cách làm phía trên có khó hiểu quá không? Làm thế nào để khoanh được như trên?</td>
    </tr>
  </thead>
</table>
<br>
<div>Để trả lời cho câu hỏi này thì cũng khó có thể trả lời sao cho hợp lí, vì mỗi người mỗi cách nhận định về vấn đề này, bạn đọc có thể tìm hiểu kĩ hoặc làm cách nào đó nếu muốn hiểu bản chất của cách trên hoặc có thể bắt đầu từ 1 cách cơ sở nhất mà tôi sắp trình bày.</div>
<div><strong>Dưới đây tôi sẽ cung cấp thêm 1 cách chính quy khác để thực hiện việc tối giản biểu thức hàm Boole dễ dàng hơn. </strong></div>
<br>
<h2 id="[CHINHQUY]-cach-dung-bia-kar-trong-viec-don-gian-ham-boole">Một cách chính quy khác trong việc dùng bìa Kar để tối giản hàm Boole </h2>
<h3 id = "dinh-nghia-ve-phu">Định nghĩa về phủ tối tiểu của một tập hợp</h3>

Cho $$S =\big\{X_1, X_2, ..., X_n \big\}$$ là họ các tập con của $$X$$. Khi đó $$S$$ được gọi là phủ của $$X$$ nếu $$X=\cup X_i$$
Giả sử $$S$$ là phủ của $$X$$. Khi đó, $$S$$ được gọi là **phủ tối tiểu** của $$X$$ nếu với mọi $$i$$ sao cho $$S \setminus X_i$$ không là phủ của $$X$$. Ngược lại với điều trên thì $$S$$ được gọi là **phủ không tối tiểu** của $$X$$ .

### Thuật toán tìm công thức đa thức tối tiểu của hàm Boole $$f$$

* **Bước 1:** Vẽ biểu đồ Karnaugh của $$f$$
* **Bước 2:** Xác định tất cả các tế bào lớn của $$Kar\big(f\big)$$
* **Bước 3:** Xác định tất cả các tế bào lớn $$m$$ nhất thiết phải chọn - Ta nhất thiết phải chọn tế bào lớn $$T$$ khi tồn tại một ô của $$Kar\big(f\big)$$ mà ô này chỉ nằm trong đúng tế bào lớn $$T$$ đó mà không nằm trong bất kì tế bào lớn nào khác.
* **Bước 4:** Xác định phủ tối tiểu gồm các tế bào lớn:
    * Nếu các tế bào lớn được chọn ở **Bước 3** đã phủ được $$Kar\big(f\big)$$ thì ta có duy nhất một phủ tối tiểu gồm các tế bào lớn của $$Kar\big(f\big)$$
    * Nếu các tế bào lớn được chọn ở bước 3 chưa phủ được $$Kar\big(f\big)$$ thì:
        * Xét một ô chưa bị phủ, lúc này sẽ có ít nhất hai tế bào lớn chứa ô này, ta chọn một trong các tế bào lớn này. Cứ tiếp tục như thế, ta sẽ tìm được tất cả các phủ gồm các tế bào lớn của $$Kar\big(f\big)$$ 
        * Loại bỏ các phủ không tối tiểu, ta tìm được tất cả các phủ tối tiểu gồm các tế bào lớn của $$Kar\big(f\big)$$ 
* **Bước 5:**: Xác định công thức đa thức tối tiểu củ $$f$$ 
    * Từ những phủ tối tiểu ta đã tìm được ở **Bước 4**, ta sẽ xác định được các công thức đa thức tối tiểu tương ứng của $$f$$ 
    * Loại bỏ các công thức đa thức mà có một công thức đa thức mà đơn giản hơn chúng. 
    * Các công thức đa thức còn lại chính là công thức đa thức tối tiểu của $$f$$ 

Thuật toán trên nếu mà đọc thì sẽ có phần rất khó hiểu, để làm rõ hơn tôi sẽ trình bày thuật toán trên ở bài toán bên dưới.

#### Bài toán 2: Tìm các công thức đa thức tối tiểu của hàm Boole $$f$$ được thể hiện bằng bìa $$Kar$$ dưới đây

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/142414194-e4c3f84f-c032-49f5-a924-42dd5d2f3f64.png"><img src="https://user-images.githubusercontent.com/86739367/142414194-e4c3f84f-c032-49f5-a924-42dd5d2f3f64.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Mô tả hàm Boole f bởi bìa Kar</i></a></figcaption>
</figure>

**Bước 1:** Ta tiến hành tiếp cận bài toán trên bằng việc tìm đánh chỉ số cho các tế bào lớn - hình bên dưới

<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/142414505-c691108c-f862-4c03-8b06-0b91750cb46c.png"><img src="https://user-images.githubusercontent.com/86739367/142414505-c691108c-f862-4c03-8b06-0b91750cb46c.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Mô tả hàm bìa Kar sau khi đã đánh dấu</i></a></figcaption>
</figure>

**Bước 2:** Ta có các tế bào lớn: $$T_1 = yt, T_2 = \neg y \neg t, T_3 = xy, T_4 = x\neg t $$

**Bước 3:** Từ hình trên ta nhận thấy có 4 ô (mỗi ô chỉ có 1 chỉ số duy nhất) thỏa mãn để ta bắt buộc chọn các tế bào lớn mà có mặt các chỉ số đó, tức là tế bào lớn $$T_1$$ và tế bào lớn $$T_2$$ là 2 tế bào lớn bắt buộc phải chọn. 

**Bước 4:** Sau khi chọn xong 2 tế bào lớn thì vẫn chưa phủ hết bìa $$Kar$$, lúc này trên bìa $$Kar$$ các ô còn lại đều có 2 chỉ số trong 1 ô, cụ thể là thuộc 2 tế bào lớn $$T_3$$ và $$T_4$$. Tức là ta có 2 cách chọn tiếp. 
Từ các bước trên, ta có sơ đồ phủ dưới đây: 
<figure align="center">
	<a href="https://user-images.githubusercontent.com/86739367/142415332-43321bcc-9c38-464c-a9c2-9dc69c8394e4.png"><img src="https://user-images.githubusercontent.com/86739367/142415332-43321bcc-9c38-464c-a9c2-9dc69c8394e4.png"></a>
	<figcaption><a href="#" title="" style = "text-decoration: none"><i>Hình ảnh mô tả sơ đồ phủ</i></a></figcaption>
</figure>

Từ sơ đồ phủ trên, dễ dàng thấy được $$\left[ \begin{array}{cc}  Kar\big(f\big) = T_1 \cup T_2 \cup T_3 \ \big(1\big) \\  Kar\big(f\big) = T_1 \cup T_2 \cup T_4 \ \big(2\big) \end{array} \right. $$

Do $$\big(1\big)$$ và $$\big(2\big)$$ đều là các phủ tối tiểu nên ta nhận cả 2.

**Bước 5:** Từ hai phủ tối tiểu của bước 4, ta lập ra 2 công thức đa thức mà đều đơn giản như nhau, do đó ta kết luận hàm Boole $$f$$ đã cho có 2 công thức đa thức tối tiểu.
Cụ thể 2 công thức tối tiểu đó là $$\left[ \begin{array}{cc}  f = yt + \neg y \neg t + xy \\  f = yt + \neg y \neg t + x\neg t \end{array} \right.$$

<div><strong> Thông tin thêm</strong><div>
<div>Hàm Boole f ngoài việc biểu diễn bằng các biến Boole (hay còn gọi là dạng chuẩn tắc) như phần trên, người ta còn biểu diễn hàm Boole f bằng ánh xạ như sau:</div>

$$f\big (x, y, z, t \big)=xyzt + \neg x yzt \Longleftrightarrow f^{-1}\big(1\big) = \big \{1111, 0111\big\} = \overline{f}^{-1} \big(0\big)$$

<h2 id="co-the-ban-da-biet">Có thể bạn đã biết</h2>

<div align="left">
    <a href="https://en.wikipedia.org/wiki/George_Boole" class="btn">George Boole</a> 
    <a href="https://en.wikipedia.org/wiki/Gray_code" class="btn">Grey code</a>
    <a href="https://en.wikipedia.org/wiki/Boolean" class="btn">Boolean</a>
</div>

<h1 align="center">
  Lời kết
</h1> 

Sau những gì mà tôi đã chia sẻ ở trên mong rằng sẽ giúp ích được phần nào đó cho bạn đọc. Mọi thắc mắc hoặc góp ý bạn đọc có thể liên hệ <a href="https://hieuhdh.github.io/deuteri/" style="text-decoration: none; color:blue" >tại đây</a>.
{: .notice}