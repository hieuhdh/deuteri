---
layout: post
title: "Tính đóng gói"
date: 2021-03-01
excerpt: "Một vài điều về tính đóng gói trong phương pháp lập trình hướng đối tượng được thể hiện ở ngôn ngữ lập trình C++"
tags:
- OOP
- C++
comments: true
---

## Tính đóng gói

Tính đóng gói của một lớp đối tượng giúp cho lớp đó có thể che giấu những thông điệp tuyệt mật mà những thông điệp này chỉ có thể truy xuất trong nội tại chính nó (một cách phá vỡ tính đóng gói là sử dụng hàm bạn, lớp bạn).

Đây là một tính chất giúp ràng buộc toàn vẹn dữ liệu của một lớp và đây cũng chính là điểm yếu chí mạng giúp cho rò rỉ thông tin của lớp đó bằng một số thủ thuật phá vỡ tính chất này.

### Phương thức GET

Vì tính đóng gói giúp che giấu thông tin của lớp đối tượng, do vậy người lập trình viên muốn truy cập từ bên ngoài những thuộc tính đang trong trạng thái che giâu, đòi hỏ họ phải viết mã để truy xuất được dữ liệu bên trong. Đó là dùng phương thức GET

Hãy xem xét đoạn mã dưới đây

{% highlight c++ %}
using namespace std;

class A{
private:
    int a = 10;
public:
};

int main(){
    A a;
}
{% endhighlight %}

Làm thế nào ta có thể truy xuất được thuộc tính `a` trong lớp đối tượng A tại hàm `main()`?

Hiển nhiên, ta có thể thêm một hàm bạn, một lớp bạn nhưng tôi sẽ không đề cập tại đây vì nó sẽ phá vỡ tính đóng gói của lớp đối tượng. Nghe cũng không hay lắm.

Lúc này, ta có thể dùng phương thức GET (hay còn gọi là getter) để truy xuất thuộc tính `a` mà không làm phá vỡ tính đóng gói. Hãy xem xét đoạn mã hoàn chỉnh bên dưới:


{% highlight c++ linenos %}
using namespace std;

class A{
private:
    int a = 10;
public:
    int get(){
        return a;
    }
};

int main(){
    A a;
    cout << a.get();
}
{% endhighlight %}


Hiển nhiên, chỉ cần 1 phương thức nhỏ, ta đã có thể truy xuất được thuộc tính `a` rồi. Câu hỏi đặt ra là làm cách nào để có thể thay đổi luôn giá trị của `a` mà lại không vi phạm tính đóng gói?

Lúc này, ta cần dùng đến phương thức SET (xem phần bên dưới)

### Phương thức SET

Đoạn mã hoàn chỉnh thể hiện việc thay đổi giá trị của thuộc tính `a`.

{% highlight c++ linenos %}
using namespace std;

class A{
private:
    int a = 10;
public:
    int get(){
        return a;
    }

    void set(int a){
        this->a = a;
    }
};

int main(){
    A a;
    a.set(20);
    cout << a.get();
}
{% endhighlight %}

## Tham khảo thêm

<a class = "link_for_hover" href="https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)">Tính đóng gói</a>

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