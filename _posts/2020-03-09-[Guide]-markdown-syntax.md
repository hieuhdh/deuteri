---
layout: post
title:  "Markdown Syntax"
date:   2021-03-09
excerpt: "Just about everything you'll need to style in the theme: Tiêu đềs, paragraphs, blockquotes, tables, code blocks, and more."
tag:
- Markdown 
- Syntax
- Guide
comments: true
---
<h1 align="center">
    Nội dung
</h1> 
<h4>
	<a href="#" style="text-decoration: none; color: black">Mục lục</a>
</h4>
<div align="left" >
    <h4>
    	<ol type = "I">
        	<li style = "font-size:13px; color: #823af7">
                <a href="#phan-tu-trong-HTML" style="text-decoration: none; color:#823af7">Phần tử trong HTML
                    <ol style = "font-size: 12px">
                        <li style = "color: #823af7">
                            <a href="#dinh-dang-tieu-de" style="text-decoration: none; color:#823af7">Định dạng tiêu đề</a> 
                        </li>
                        <li>
                            <a href="#dinh-dang-cac-doan-van" style="text-decoration: none; color:#823af7">Định dạng các đoạn văn</a> 
                        </li>
                        <li>
                            <a href="#chen-duong-link" style="text-decoration: none; color:#823af7">Chèn đường link</a> 
                        </li>
                        <li>
                            <a href="#chen-trich-dan" style="text-decoration: none; color:#823af7">Chèn trích dẫn</a> 
                        </li>
                        <li>
                            <a href="#chen-danh-sach" style="text-decoration: none; color:#823af7">Chèn danh sách
                            <ol style = "font-size: 12px" type = "i">
                                    <li style = "color: #823af7"><a href="#danh-sach-co-thu-tu" style="text-decoration: none; color:#823af7">Danh sách có thứ tự</a> </li>
                                    <li style = "color: #823af7"><a href="#danh-sach-khong-thu-tu" style="text-decoration: none; color:#823af7">Danh sách không thứ tự</a> </li>
                                </ol>
                            </a> 
                            <a href="#tao-ghi-chu" style="text-decoration: none; color:#823af7">Tạo ghi chú</a> 
                        </li>
                        <li>
                            <a href="#chen-bang" style="text-decoration: none; color:#823af7">Chèn bảng</a> 
                        </li>
        		    </ol>
                </a>
            </li>
            <li style = "font-size:13px; color: #823af7">
                <a href="#mot-so-tinh-chat-va-cac-phep-toan-dong-du-tren-vanh-module" style="text-decoration: none; color:#823af7">Một số tính chất và các phép toán đồng dư trên vành Module</a>
            </li>
            <li style = "font-size:13px; color: #823af7">
                <a href="#mot-so-vi-du-ve-xu-li-dong-du-trong-toan-hoc" style="text-decoration: none; color:#823af7">Một số ví dụ về xử lí đồng dư trong toán học
                    <ol style = "font-size: 12px">
                        <li style = "color: #823af7">
                            <a href="#ví-dụ-1" style="text-decoration: none; color:#823af7">Ví dụ 1
                                <ol style = "font-size: 12px" type = "i">
                                    <li style = "color: #823af7"><a href="#giải" style="text-decoration: none; color:#823af7">Giải ví dụ 1</a> </li>
                                </ol>
                            </a> 
                        </li>
        		    </ol>
                </a>
            </li>
            <li style = "font-size:13px; color: #823af7">
                <a href="#mot-so-vi-du-ve-xu-li-dong-du-trong-lap-trinh" style="text-decoration: none; color:#823af7">Một số ví dụ về xử lí đồng dư trong lập trình
                    <ol style = "font-size: 12px">
                        <li style = "color: #823af7">
                            <a href="#ví-dụ-2" style="text-decoration: none; color:#823af7">Ví dụ 2
                                <ol style = "font-size: 12px" type = "i">
                                    <li style = "color: #823af7"><a href="#hướng-tiếp-cận-cơ-bản" style="text-decoration: none; color:#823af7">Hướng tiếp cận cơ bản</a> </li>
                                    <li style = "color: #823af7"><a href="#hướng-tiếp-cận-thứ-2" style="text-decoration: none; color:#823af7">Hướng tiếp cận thứ 2</a> </li>
                                </ol>
                            </a> 
                        </li>
        		    </ol>
                </a>
            </li>
            <li style = "font-size:13px; color: #823af7">
                <a href="#co-the-ban-da-biet" style="text-decoration: none; color:#823af7">Có thể bạn đã biết</a>
            </li>
        </ol>
    </h4>
</div>

<h2 id =  "phan-tu-trong-HTML"> Phần tử trong HTML</h2>
<h3 id="dinh-dang-tieu-de">Định dạng tiêu đề</h3>

Thay vì trong HTML bạn dùng các thẻ `h1, h2, h3, h4, h5, h6` để chỉ tiêu đề của đầu mục. Bạn có thể chuyển đổi tương ứng qua Markdown bằng cách gõ `#, ##, ###, ####, #####, ######` tương ứng 

Ví dụ tôi gõ 
```
# Tiêu đề 1 
## Tiêu đề 2
### Tiêu đề 3
#### Tiêu đề 4
##### Tiêu đề 5
###### Tiêu đề 6
``` 
Và dưới đây là kết quả mà Markdown hiển thị

# Tiêu đề 1

## Tiêu đề 2

### Tiêu đề 3

#### Tiêu đề 4

##### Tiêu đề 5

###### Tiêu đề 6

<div>Đặt biệt khi viết tiêu đề dạng Markdown như vậy, thì ID của tiêu đề chính là tên tiêu đề (viết toàn bộ chữ thường và giữa mỗi từ phải có dấu "-").</div>

Ví dụ đối với `Tiêu đề 1` ở trên thì sẽ có `id ="tiêu-đề-1"` (tuyệt đối không được bỏ dấu câu). Điều này sẽ tạo điều kiện thuận tiện hơn cho việc bạn muốn viết tiêu đề bằng Markdown nhưng muốn lấy id bằng HTML để làm 1 số việc gì đó.

<h3 id="dinh-dang-cac-doan-van">Định dạng các đoạn văn</h3>

Thay vì dùng thẻ `b` hay thẻ `strong` để in đậm văn bản thì trong Markdown cung cấp cho ta cặp `** **` hoặc `__ __` để làm việc 

Tương tự: 
- Dùng cặp `* *` hoặc `_ _` để in nghiêng văn bản
- Dùng cặp `*** ***` hoặc `__* *__` hoặc `_** **_` hoặc `**_ _**` để có thể hiển thị vừa in đậm và nghiêng cho văn bản

- Ví dụ tôi gõ
    ```
    **Đây là đoạn văn  in đậm**, *đây là đoạn văn in nghiêng*
    ```
    Và dưới đây là kết quả

    **Đây là đoạn văn  in đậm**, *đây là đoạn văn in nghiêng*

<h3 id="chen-duong-link">Chèn đường link</h3>

Dùng `[<đoạn văn lấy link>](<link>)` để chèn 1 đường link nào đó vào văn bản bạn muốn

Dùng `![<alt tên ảnh>](<link>)` để chèn 1 hình ảnh nào đó vào văn bản mà bạn muốn

Ví dụ tôi gõ
```
[Đây là một link dẫn đến facebook](www.facebook.com)
![Test](https://user-images.githubusercontent.com/86739367/143173794-ef2ac736-f3d6-4fa0-8b1a-87e86d74afa3.jpg)
```

Và dưới đây là kết quả

[Đây là một link dẫn đến facebook](www.facebook.com)

![Test](https://user-images.githubusercontent.com/86739367/143173794-ef2ac736-f3d6-4fa0-8b1a-87e86d74afa3.jpg)
<h3 id="chen-trich-dan">Chèn trích dẫn</h3>

Dùng `>` để chèn 1 đoạn trích dẫn

Dùng dạng dưới đây để có thể chèn 1 trích dẫn nhiều dòng  
```
> abc
>
> cde
>
> efg
```

Dùng lần lược `>, >>, >>>,...` để có thể chèn trích dẫn trong trích dẫn

Ví dụ tôi gõ 
```
> abc
>>
>> cde
>>
>> efg
>> 
> akaa
```

và dưới đây là kết quả
> abc
>>
>> cde
>>
>> efg
>> 
> akaa

<h3 id="chen-danh-sach">Chèn danh sách</h3>
<h4 id="danh-sach-co-thu-tu">Danh sách có thứ tự</h3>

Để tạo một danh sách có thứ tự, chỉ cần thêm các chữ số và dấu `.` trước đoạn danh sách cần thêm.

Ví dụ tôi gõ
```
1. abc
2. cde
3. edf
```
hay 
```
1. abc
1. cde
1. edf
```
hay 
```
1. abc
9. cde
3. edf
```
hay
```
1. abc
2. cde
    1. ABC
    2. CDE
3. edf
```
hay
```
1. abc
22. cde
    1. ABC
    2. CDE
3. edf
```

Và kết quả hiển thị:
* Đoạn code 1
    1. abc
    2. cde
    3. edf
* Đoạn code 2
    1. abc
    1. cde
    1. edf
* Đoạn code 3
    1. abc
    9. cde
    3. edf
* Đoạn code 4
    1. abc
    2. cde
        1. ABC
        2. CDE
    3. edf
* Đoạn code 5
    1. abc
    22. cde
        1. ABC
        2. CDE
    3. edf

<h4 id="danh-sach-khong-thu-tu">Danh sách không thứ tự</h3>

Để tạo một danh sách có thứ tự, chỉ cần thêm các dạng `- hoặc + hoặc *` trước đoạn danh sách cần thêm.

Ví dụ tôi gõ
```
- abc
- cde
- edf
```
hay 
```
* abc
* cde
* edf
```
hay 
```
+ abc
+ cde
+ edf
```
hay
```
- abc
- cde
    - ABC
    - CDE
- edf
```
hay
```
- abc
- cde
    - ABC
        - CDE
- edf
```

Và kết quả hiển thị:
* Đoạn code 1
    - abc
    - cde
    - edf
* Đoạn code 2
    * abc
    * cde
    * edf
* Đoạn code 3
    + abc
    + cde
    + edf
* Đoạn code 4
    - abc
    - cde
        - ABC
        - CDE
    - edf
* Đoạn code 5
    - abc
    - cde
        - ABC
            - CDE
    - edf

<h3 id="chen-bang">Chèn bảng</h3>

Các bạn có thể dùng cú pháp dưới đây để tạo 1 bảng danh sách các sinh viên cơ bản
**Lưu ý:** 
* Kí tự `:---` dưới cột `STT` tức là căn lề trái
* Kí tự `:----:` dưới cột Họ và tên tức là căn giữa
* Kí tự `---:` dưới cột `Tuổi` tức là căn lề phải
    ```
    | STT | Họ và tên | Tuổi|
    |:----|:---------:|----:|
    | 1   | A         | 1   |
    | 2   | B         | 1   |
    | 3   | C         | 3   |
    | 4   | D         | 4   |
    ```

Và kết quả hiển thị

![Screenshot 2021-11-24 131848](https://user-images.githubusercontent.com/86739367/143185271-d09acf31-203c-40fa-a390-42984d2561aa.png)

<h3 id="tao-ghi-chu">Tạo ghi chú</h3>

Xem ví dụ về tạo các đoạn ghi chú dưới đây:
* Ghi chú bình thường

    `Ghi chú bình thường trên một dòng`
    ```
    Ghi chú bình thường
    Gồm nhiều dòng
    ```
* Ghi chú đoạn code (thêm loại vào sau đoạn ghi chú)
    * C++
        ```C++
        #include<iostream>

        int main(){
            std::cout <<"ok";
        }
        // Ở đoạn ghi chú này tôi dùng cú pháp 
        //  ```C++ <ghi code vào> ```
        ```
    * python
        ```python
        a = int(input())
        if a == 1:
            print("ok")
        else:
            print("done")
        # Ở đoạn ghi chú này tôi dùng cú pháp 
        #  ```python <ghi code vào> ```
        ```

<br>
<h1 align="center">
  Lời kết
</h1> 

Sau những gì mà tôi đã chia sẻ ở trên mong rằng sẽ giúp ích được phần nào đó cho bạn đọc. Mọi thắc mắc hoặc góp ý bạn đọc có thể liên hệ <a href="https://hieuhdh.github.io/deuteri/" style="text-decoration: none; color:blue" >tại đây</a>.
{: .notice}

<br>
<div class="pre_next" style = "display: grid;grid-template-columns: 45% 45% 20px; grid-gap: 0 10%;">
  <div class="item item1" style="text-align: right"><a href="https://hieuhdh.github.io/deuteri/Guide-Latex-Syntax/" class="btn" style="width: 100%">Previous: Latex Syntax<div style = "text-align: left">&laquo; </div></a></div>
  <div class="item item2" style="text-align: left"><a href="https://hieuhdh.github.io/deuteri/Crypto-picoCTF/" class="btn" style="width: 100%">Next: [Crypto] picoCTF<div style = "text-align: right">&raquo;</div></a></div>

</div>
