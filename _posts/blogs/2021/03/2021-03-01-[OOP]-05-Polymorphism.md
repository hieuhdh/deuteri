---
layout: post
title: "Tính đa hình"
date: 2021-03-01
excerpt: "Một vài điều về tính đa hình trong phương pháp lập trình hướng đối tượng được thể hiện ở ngôn ngữ lập trình C++"
tags:
- OOP
- C++
comments: true
---

## Sơ lược về đa hình

### Liên kết (blinding)

Liên kết là sự kết nối một lời gọi phương thức này tới thân phương thức khác.

#### Liên kết tĩnh (Static blinding)

Liên kết tĩnh là loại liên kết do compiler quyết định (hay còn gọi là quyết định tại thời điểm biên dịch). 

Khi kiểu của đối tượng được quyết định tại compile time (bởi Compiler) thì đó là  liên kết tĩnh.

Trong phương pháp lập trình hướng đối tượng, liên kết tĩnh không thể có ghi đè (overloading - tôi sẽ nói kĩ hơn ở phần dưới) kết quả.

Hãy xem xét đoạn chương trình sau

{% highlight c++ %}
class A{}
class B:public A{}

int main(){
    B b;
}
{% endhighlight %}

Vì đối tượng giá trị b thuộc lớp đối tượng B đã được hình thành tại thời điểm biên dịch, do đó đây là 1 loại liên kết tĩnh.

#### Liên kết động (Dynamic blinding)

Liên kết động là loại liên kết chỉ xuất hiện khi thực thi (runtime). Ví dụ

{% highlight c++ %}
class A{}
class B:public A{}

int main(){
    A *a = new B;
}
{% endhighlight %}

Với đoạn chương trình trên, sự kết nối giữa lời gọi lớp A đến lớp B chỉ xuất hiện lúc chương trình được thực thi tức là con trỏ đối tượng thuộc lớp đối tượng A chỉ được tham chiếu đến lớp đối tượng B khi thực thi chương trình. Lúc chưa thực thi chương trình, không có bất kì chuyện gì xảy ra cả. Thì đây là một ví dụ điển hình cho liên kết động.

### Định nghĩa về đa hình

**Đa hình** là hiện tượng các đối tượng thuộc các lớp đối tượng khác nhau có khả năng hiểu cùng một thông điệp theo các cách khác nhau. Ví dụ thông điệp di chuyển thì đối với người bình thường thì sẽ di chuyển bằng hai chân còn đối với con chó, con mèo sẽ di chuyển bằng bốn chân.

Hãy xét một bài toán cơ bản để hiểu rõ đa hình hơn nhé

Bài toán: Cho lớp đối tượng người gồm những thuộc tính: Họ và tên, tuổi và phương thức `nhap` dùng để nhập thông tin, phương thức `xuat` dùng để xuất thông tin của người đó. Cho lớp đối tượng sinh viên kế thừa lớp đối tượng người có thêm thuộc tính là mã số sinh viên và cũng có phương thức nhập để nhập thông tin sinh viên, phương thức xuất để xuất thông tin sinh viên.

Yêu cầu hãy viết đoạn chương trình nhập và xuất danh sách các sinh viên được nhập vào.

Dễ dàng ta có thể viết đoạn mã như sau:

{% highlight c++ %}
class Nguoi{
protected:
    string ho_va_ten;
    int tuoi;
public:
    void nhap(){
        cout <<"Nhap ho va ten: ";
        getline(cin, ho_va_ten);
        cout <<"Nhap tuoi: ";
        cin >> tuoi;
    }

    void xuat(){
        cout <<"Ho va ten: " << this -> ho_va_ten << endl;
        cout <<"Tuoi: " << this -> tuoi;
    }
};

class SinhVien: public Nguoi{
private:
    string MSSV;
public:
    void nhapThongTinSinhVien(){
        cout <<"Nhap ho va ten: ";
        getline(cin, ho_va_ten);
        cout <<"Nhap tuoi: ";
        cin >> tuoi;
        cin.ignore();
        cout << "Nhap ma so sinh vien: ";
        getline(cin, MSSV);
    }

    void xuatThongTinSinhVien(){
        cout <<"Ho va ten: " << this -> ho_va_ten << endl;
        cout <<"Tuoi: " << this -> tuoi << endl;
        cout <<"Ma so sinh vien: " << this -> MSSV << endl;
    }
};

void nhapDanhSachSinhVien(SinhVien sv[], int so_luong){
    for (int i = 0; i < so_luong; i++)
        sv[i].nhapThongTinSinhVien();
}

void xuatDanhSachSinhVien(SinhVien sv[], int so_luong){
    for (int i = 0; i < so_luong; i++)
        sv[i].xuatThongTinSinhVien();
}
{% endhighlight %}

Hoặc ta có thể dùng phân loại `enum` để giải quyết bài toán trên một cách tường minh (nhưng khá rườm rà) bằng cách tạo ra một phân loại `enum loai{Ng, SV}` và đoạn mã chuyển đổi bên dưới

{% highlight c++ %}
enum loai{
    Ng,
    SV
};

class Nguoi{
protected:
    string ho_va_ten;
    int tuoi;
public:
    loai pl;
    Nguoi(){
        this->pl = Ng;
    }

    void nhap(){
        cout <<"Nhap ho va ten: ";
        getline(cin, ho_va_ten);
        cout <<"Nhap tuoi: ";
        cin >> tuoi;
    }

    void xuat(){
        cout <<"Ho va ten: " << this -> ho_va_ten << endl;
        cout <<"Tuoi: " << this -> tuoi;
    }
};

class SinhVien: public Nguoi{
private:
    string MSSV;
public:
    SinhVien(){
        this->pl = SV;
    }

    void nhapThongTinSinhVien(){
        cout <<"Nhap ho va ten: ";
        getline(cin, ho_va_ten);
        cout <<"Nhap tuoi: ";
        cin >> tuoi;
        cin.ignore();
        cout << "Nhap ma so sinh vien: ";
        getline(cin, MSSV);
    }

    void xuatThongTinSinhVien(){
        cout <<"Ho va ten: " << this -> ho_va_ten << endl;
        cout <<"Tuoi: " << this -> tuoi << endl;
        cout <<"Ma so sinh vien: " << this -> MSSV << endl;
    }
};
{% endhighlight %}

Về mặc cú pháp thì cả hai đoạn code trên đều ổn thỏa, nhưng suy nghĩ một xíu là cả `người` và `sinh viên` đều cùng có phương thức `nhap` cũng như `xuat` nhưng cách hiểu hai phương thức của hai đối tượng là khác nhau, thế tại sao không dùng cùng phương thức mà lại đặc thêm phương thức `nhapThongTinSinhVien` và `xuatThongTinSinhVien` gây thêm dài dòng (tôi không nói việc tạo ra nhiều phương thức là sai mà chỉ là gây ra phức tạp bài toán, dài dòng, khó sửa chữa).

Vậy làm sao để thể hiện được việc "cả `người` và `sinh viên` đều cùng có phương thức `nhap` cũng như `xuat` nhưng cách hiểu hai phương thức của hai đối tượng là khác nhau" trên code?

Phương thức ảo sẽ giúp ta giải quyết được ván đề này.

### Phương thức ảo

**Phương thức ảo** là một trong những cách thể hiện tính đa hình trong ngôn ngữ lập trình C++.

Các phương thức ở lớp cơ sở có tính đa hình phải được định nghĩa là phương thức ảo. Và để thể hiện 1 hàm thành phần là 1 phương thức ảo thì ta chỉ cần thêm từ khóa `virtual` trước tên hàm đó là được.

Quan trọng hơn, nhờ phương thức ảo sẽ giúp cho các đối tượng thể hiện cách hiểu của nó đối với một thông điệp nào đó. Và đoạn chương trình trên ta có thể thay bằng.

{% highlight c++ %}
class Nguoi{
protected:
    string ho_va_ten;
    int tuoi;
public:
    void virtual nhap(){
        cout <<"Nhap ho va ten: ";
        getline(cin, ho_va_ten);
        cout <<"Nhap tuoi: ";
        cin >> tuoi;
    }

    void virtual xuat(){
        cout <<"Ho va ten: " << this -> ho_va_ten << endl;
        cout <<"Tuoi: " << this -> tuoi;
    }
};

class SinhVien: public Nguoi{
private:
    string MSSV;
public:
    void nhap(){
        cout <<"Nhap ho va ten: ";
        getline(cin, ho_va_ten);
        cout <<"Nhap tuoi: ";
        cin >> tuoi;
        cin.ignore();
        cout << "Nhap ma so sinh vien: ";
        getline(cin, MSSV);
    }

    void xuat(){
        cout <<"Ho va ten: " << this -> ho_va_ten << endl;
        cout <<"Tuoi: " << this -> tuoi << endl;
        cout <<"Ma so sinh vien: " << this -> MSSV << endl;
    }
};

void nhapDanhSachSinhVien(SinhVien sv[], int so_luong){
    for (int i = 0; i < so_luong; i++)
        sv[i].nhap();
}

void xuatDanhSachSinhVien(SinhVien sv[], int so_luong){
    for (int i = 0; i < so_luong; i++)
        sv[i].xuat();
}
{% endhighlight %}

Như ở phần tính kế thừa, ta đã biết rằng lớp đối tượng `SinhVien` sẽ kế thừa tất cả các thuộc tính và phương thức của lớp đối tượng `Nguoi` và phương thức `nhap` với `xuat` trong lớp đối tượng `Nguoi` đang ở phạm vi public tức lớp đối tượng `SinhVien` sẽ sử dụng được 2 phương thức đó:

* Đối với phương thức `nhap`, lớp đối tượng `SinhVien` đã kế thừa được việc nhập thông tin `họ và tên` và thông tin `tuổi` tức ở phương thức `nhap` ở lớp đối tượng `SinhVien` ta không cần thiết lập thêm việc nhập 2 thông tin đó nữa (tránh bị thừa). Hay nói các khác, trong hàm `nhap` của lớp đối tượng `SinhVien`, ta chỉ cần thêm định nghĩa cho việc nhập thông tin MSSV mà thôi.
* Đối với phương thức `xuat` ta cũng lý giải tương tự và chỉ cần thêm định nghĩa cho việc xuất thông tin MSSV mà thôi.

Từ hai nhận định trên, ta đã có thể rút gọn đoạn mã cho 2 lớp đối tượng `Nguoi` và `SinhVien` đi rất nhiều. Và đây là mã sau khi rút gọn:

{% highlight c++ %}
class Nguoi{
protected:
    string ho_va_ten;
    int tuoi;
public:
    void virtual nhap(){
        cout <<"Nhap ho va ten: ";
        getline(cin, ho_va_ten);
        cout <<"Nhap tuoi: ";
        cin >> tuoi;
        cin.ignore();
    }

    void virtual xuat(){
        cout <<"Ho va ten: " << this -> ho_va_ten << endl;
        cout <<"Tuoi: " << this -> tuoi;
    }
};

class SinhVien: public Nguoi{
private:
    string MSSV;
public:
    void nhap(){
        Nguoi::nhap();
        cout << "Nhap ma so sinh vien: ";
        getline(cin, MSSV);
    }

    void xuat(){
        Nguoi::xuat();
        cout <<"Ma so sinh vien: " << this -> MSSV << endl;
    }
};
{% endhighlight %}

Và chúng ta đã áp dụng được tính đa hình lẫn kế thừa trong đoạn mã trên.

Hơn nữa với đoạn mã trên, không những dễ đọc mà ta còn dễ dàng sửa đổi cũng như thêm vào những định nghĩa mới.

Câu hỏi đặt ra ở đây là tại sao 2 phương thức `nhap` và `xuat` trong lớp đối tượng `Nguoi` là phương thức ảo?

**Trả lời:** Việc biến 2 phương thức nêu trên thành phương thức ảo nhằm sửa lỗi phân giải tĩnh (tôi đã đề cập ở phân sau). 

> Tuy là phương thức `nhap` cũng như phương thức `xuat` ở lớp đối tượng `SinhVien` không có từ khóa `virtual` nhưng bù lại phương thức tương ứng của chúng ở lớp `Nguoi` (tức lớp cơ sở) lại là phương thức ảo, do đó cả hai phương thức `nhap` và`xuat` ở lớp đối tượng `SinhVien` cũng đều là phương thức ảo.
>
> Từ đây, ta có 2 cách để một phương thức trở thành phương thức ảo:
> * Một là thêm từ khóa `virtual` vào trước tên phương thức.
> * Hai là phương thức tương ứng của nó ở lớp cơ sở là phương thức ảo.

Đặc biệt, việc thêm từ khóa `virtual` ở lớp cơ sở nhằm giúp cho lớp dẫn xuất có thể tự hiểu theo cách mà nó sẽ được hiểu đối với một phương thức nào đó, chứ không mang ý nghĩa là loại bỏ phương thức đó đi. Giống như ở ví dụ trên, đối tượng thuộc lớp đối tượng `SinhVien` khi trỏ đến phương thức `nhap` (hoặc `xuat`) thì nó sẽ hiểu phương thức `nhap` (hoặc `xuat`) đang trỏ đến nằm ở trong lớp đối tượng `SinhVien` chứ không phải lớp đối tượng `Nguoi`.

### Phương thức hủy ảo (Virtual destructor)

Ta thêm từ khóa `virtual` trước phương thức hủy bất kì, thì ngay lập tức phương thức hủy đó sẽ trở thành phương thức hủy ảo.

Quay trở lại một đoạn mã tương tự phần `destructor` mà ta đã gặp ở phần kế thừa

{% highlight c++ %}
using namespace std;

class A{
public:
    ~A(){
        cout << "A";
    }
};

class B: public A{
public:
    ~B(){
        cout << "B";
    }
};

class C: public B{
public:
    ~C(){
        cout << "C";
    }
};

int main(){
    A *a = new C; 
    delete a;
}
{% endhighlight %}

Sau khi thực thi chương trình, chương trình sẽ xuất ra chữ `A` tức là con trỏ a thuộc lớp đối tượng A đã bị hủy. Câu hỏi đặt ra là có chắc chắn rằng sau dòng `delete a` được thực thi thì toàn bộ vùng nhớ trong chương trình đều đã được giải phóng không?

Ở ví dụ trên vì khá đơn giản nên ta có thể khẳng định rằng toàn bộ vùng nhớ trong chương trình đều đã được giải phóng, nhưng giả sử chương trình trên có 1 phương thức khởi tạo trong lớp đối tượng C và trong phương thức đó có sinh ra các đối tượng con trỏ, thì lúc này toàn vùng nhớ có được giải phóng sau khi ta thực thi lệnh `delete a` không? Câu trả lời là không vì muốn toàn bộ vùng nhớ được giải phóng, thì ta phải làm cách nào đó để thực thi tất cả các phương thức hủy của các đối tượng mà ta đã tạo (kể cả khi ta dùng liên kết động).

Lúc này đây, việc làm cho phương thức hủy ở lớp đối tượng A thành phương thức hủy ảo làm hoàn toàn cần thiết và nó giúp cho chúng ta dễ dàng giải quyết vấn đề trên. Đoạn mã hoàn chỉnh

{% highlight c++ %}
using namespace std;

class A{
public:
    virtual ~A(){
        cout << "A";
    }
};

class B: public A{
public:
    ~B(){
        cout << "B";
    }
};

class C: public B{
public:
    ~C(){
        cout << "C";
    }
};

int main(){
    A *a = new C; 
    delete a;
}
{% endhighlight %}

Lúc này, trình biên dịch sẽ biết được rằng khi thực thi lệnh `delete a` tức sẽ thực thi phương thức hủy của lớp đối tượng C (thông qua từ khóa `virtual`). Và hiển nhiên, theo tính chất của tính kế thừa thì lần lượt phương thức hủy của lớp đối tượng B và của lớp đối tượng A sẽ được thực thi sau đó. Tóm lại, toàn bộ vùng nhớ sẽ được giải phóng hoàn toàn.

### Phương thức khởi tạo ảo (Virtual contructor)

Rất tiếc, không thể có phương thức khởi tạo ảo.

### Phương thức thuần ảo

Về mặt lý thuyết, phương thức thuần ảo là phương thức ảo không có nội dung.

Về mặt ngôn ngữ, tùy trình biên dịch sau này mà nó có thể chấp nhận những phương thức ảo có nội dung (nhưng không thể thực thi các nội dung).

Ví dụ ta có một phương thức ảo: `void virtual abc(){...}`. Ta biến nó thành phương thức thuần ảo bằng cách thêm `=0` vào sau phương thức và không cần định nghĩa nội dung, tức là `void virtual abc() = 0`.

Phương thức thuần ảo cũng là nền tảng để xây dựng 1 lớp đối tượng trừu tượng.

### Lớp đối tượng trừu tượng

Lớp đối tượng trừu tượng là lớp có chứa tối thiểu 1 phương thức thuần ảo.

Một lớp cơ sở khi có chứa tối thiểu 1 phương thức thuần ảo, ta gọi nó là lớp cơ sở trừu tượng.

Ta không thể tạo ra đối tượng giá trị thuộc lớp cơ sở trừu tượng nhưng có thể tạo ra đối tượng con trỏ để thực hiện liên kết động từ lớp cơ sở trừu tượng đến các lớp dẫn xuất (trường hợp lớp dẫn xuất không là 1 lớp trừu tượng).

Các lớp dẫn xuất muốn được tạo đối tượng khi và chỉ khi lớp dẫn xuất đó đã định nghĩa lại toàn bộ các phương thức thuần ảo đã có trong lớp cơ sở trừu tượng. Nếu không, lớp dẫn xuất đó sẽ trở thành một lớp đối tượng trừu tượng. Ví dụ

{% highlight c++ %}
class A{
public:
    void virtual action() = 0;
};

class B: public A{
public:
    void action(){}
};
{% endhighlight %}

Trong đoạn mã trên, lớp B có thể tạo đối tượng vì lớp B đã định nghĩa lại phương thức thuần ảo `action()` của lớp A. Còn đoạn mã bên dưới, thì cả A và B đều không thể tạo đối tượng.

{% highlight c++ %}
class A{
public:
    void virtual action() = 0;
};

class B: public A{
public:
};
{% endhighlight %}

## Các vấn đề trong đa hình

### Đa hình tại thời điểm biên dịch (Compiler time)

#### Nạp chồng hàm (Function overloading)

Câu hỏi đặt ra là ta đang có một hàm `cong` để thực hiện việc cộng hai số, làm thế nào để dùng cùng 1 hàm `cong` đó để ta có thể cộng hai số thực, hai số nguyên?

Lúc này, ta có thể định nghĩa hàm `cong` với các đối số truyền vào khác nhau để thực hiện chức năng ta cần. Việc làm này được gọi chung là nạp chồng hàm. Xem đoạn mã dưới đây

{% highlight c++ %}
int cong(int x, int y){
    return x + y;
}

double cong(double x, double y){
    return x + y;
}
{% endhighlight %}

Dù là cùng 1 hàm `cong`, nhưng chỉ cần thay đổi đối số truyền vào và trả về khác kiểu, ta đã thực hiện được chức năng cộng hai số nguyên và cộng hai số thực một cách dễ dàng.

Hoặc hãy xem một ví dụ khác cụ thể hơn về hướng đối tượng

{% highlight c++ %}
using namespace std;

class A{
public:
    void output(int x) { cout << x; };
    void output(float x) { cout << x; };
    void output(double x) { cout << x; };
};

int main(){
    A a;
    a.output(1);
    a.output(1.2);
    a.output(1.3);
}
{% endhighlight %}

Ở ví dụ trên, ta có lớp đối tượng `A` và có 1 phương thức `output` thể hiện giá trị của 1 đối số truyền vào bất kì (khác kiểu trả về). Trong hàm `main()` ta đã gọi phương thức `output` ra với các kiểu đối số truyền vào khác nhau và hiển nhiên kiểu dữ liệu của giá trị đầu ra trong 3 lần gọi là khác nhau.

Quy tắc nạp chồng 1 hàm (phương thức):
1. Nó phải có một danh sách đối số khác nhau.
2. Nó có thể có một kiểu trả lại khác nhau.
3. Nó có thể có các công cụ sửa đổi quyền truy cập khác nhau.
4. Nó có thể ném ra các ngoại lệ khác nhau.
5. Các phương thức từ một lớp cha có thể được nạp chồng trong một lớp con.

#### Nạp chồng toán tử (Operator overloading)

Câu hỏi đặt ra là tại sao trong lớp đối tượng `SinhVien` lại có phương thức nhập và xuất?
Mặc dù ta đã biết rằng trong ngôn ngữ lập trình C++ đã cung cấp cho chúng ta 2 loại toán tử `>>` (toán tử nhập) và `<<` (toán tử xuất). Thì liệu có cách nào dùng chính 2 loại toán tử đó để nhập cũng như xuất đối tượng `SinhVien` hay không?

Lúc này, chúng ta cần định nghĩa lại 2 loại toán tử nhập và xuất cho đối tượng `SinhVien` để có thể thực hiện được công việc trên. Việc làm này được gọi chung là nạp chồng toán tử.

Trong ngôn ngữ lập trình C++, có rất nhiều loại toán tử khác nhau mà những lập trình viên đã xây dựng từ rất lâu. Hiển nhiên, nếu kiến thức chúng ta đủ rộng và đủ tầm, hoàn toàn có thể tạo ra được các loại toán tử mới.

Trong ngôn ngữ lập trình C++, ta chỉ được quyền nạp chồng những toán tử mà bản thân những toán tử đó cho phép nạp chồng. Và đây cũng chứng tỏ được toán tử có khả năng đa năng hóa.

Hãy xem các ví dụ về nạp chồng toán tử tại 
<a class = "link_for_hover" href="https://github.com/hieuhdh/OOP/tree/master/Practice/04">https://github.com/hieuhdh/OOP/tree/master/Practice/04</a>

### Đa hình tại thời điểm thực thi (Runtime)

#### Ghi đè hàm (Overriding)

Ghi đè phương thức được hiểu đơn giản là việc ta biến 1 thông điệp cho các đối tượng khác nhau hiểu theo những cách khác nhau. Ví dụ trong lớp đối tượng `SinhVien` và lớp đối tượng `Nguoi` đều có phương thức `nhap()` và:
* Với đối tượng `Nguoi`: Hiểu phương thức `nhap()` chỉ ghi nhận 2 thông tin là học và tên và tuổi
* Với đối tượng `SinhVien`: Ngoài việc ghi nhận 2 thông tin của đối tượng `Nguoi`, nó còn ghi nhận thêm thông tin mã số sinh viên

Lúc này, việc ghi đè phương thức là điều hoàn toàn cần thiết và cũng giúp tính đa hình thể hiện rõ hơn trong thời gian thực thi chương trình.

Quy tắc ghi đè 1 phương thức:
1. Nó phải là một phương thức được xác định thông qua mối quan hệ IS-A (thông qua mở rộng hoặc thực hiện). Đây là lý do tại sao bạn có thể thấy nó được gọi là đa hình kiểu con.
2. Nó phải có cùng danh sách đối số như định nghĩa phương thức ban đầu. Nó phải có cùng kiểu trả về hoặc kiểu trả về là lớp con của kiểu trả về của định nghĩa phương thức ban đầu.
3. Nó không thể có công cụ sửa đổi quyền truy cập hạn chế hơn.
4. Nó có thể có một công cụ sửa đổi quyền truy cập ít hạn chế hơn.
5. Nó không được thông qua một ngoại lệ mới hoặc đã kiểm tra rộng hơn.
6. Nó có thể thông qua 1 cách hẹp hơn, ít hơn hoặc không có ngoại lệ được kiểm tra, ví dụ: một phương thức khai báo IOException có thể bị ghi đè bởi một phương thức khai báo một FileNotFoundException (vì nó là một lớp con của IOException).
7. Phương thức ghi đè có thể ném ra bất kỳ ngoại lệ nào chưa được kiểm tra, bất kể phương thức ghi đè có khai báo ngoại lệ hay không.

#### Lỗi phân giải tĩnh

Lỗi phân giải tĩnh là lỗi xảy ra khi thực thi chương trình bằng việc ta ghi đè 1 phương thức nhưng gây ra hiện tượng đối tượng hiểu sai thông điệp mà phương thức truyền tải. Ta xem xét đoạn mã sau

{% highlight c++ %}
using namespace std;

class A{
public:
    void action() {
        cout << "A";
    }
};

class B: public A{
public:
    void action(){
        cout << "B";
    }
};

int main(){
    A *a = new B;
    a->action();
}
{% endhighlight %}

Nhận thấy đầu ra của chương trình trên là chữ `A`. Ở đây, rõ ràng ta đang dùng 1 con trỏ thuộc lớp đối tượng A thực hiện việc liên kết động với lớp đối tượng B và điều mong muốn của ta tại thời điểm này chính là việc thực thi phương thức `action()` hiện diện trong lớp đối tượng B, tức là đầu ra mong muốn phải là chữ `B`. 

Với ví dụ trên, đây là một trường hợp điển hình thể hiện lỗi phân giải tĩnh, việc sửa lỗi này cũng khá là đơn giản, ta chỉ cần biến phương thức `action()` trong lớp đối tượng `A` thành phương thức ảo là được. Đoạn mã hoàn chỉnh sau đây

{% highlight c++ %}
using namespace std;

class A{
public:
    void virtual action() {
        cout << "A";
    }
};

class B: public A{
public:
    void action(){
        cout << "B";
    }
};

int main(){
    A *a = new B;
    a->action();
}
{% endhighlight %}

### Sự khác nhau giữa Overriding và Overloading

Overriding xảy ra tại thời điểm chạy, trong khi Overloading xảy ra tại thời gian biên dịch.

Việc Overriding phải dựa trên một phương thức từ mối quan hệ IS-A, việc Overriding không nhất thiết phải như vậy. Overloading có thể xảy ra trong một lớp.

Các phương thức Overriding được chọn dựa trên kiểu đối tượng, trong khi các phương thức Overloading được chọn dựa trên kiểu biến (tham chiếu).

## Tham khảo thêm

<a class = "link_for_hover" href="https://en.wikipedia.org/wiki/Polymorphism_(computer_science)">Tính đa hình</a>

<a class = "link_for_hover" href="https://www.freecodecamp.org/news/polymorphism-in-java-tutorial-with-object-oriented-programming-example-code/">Overloading and Overriding</a>

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