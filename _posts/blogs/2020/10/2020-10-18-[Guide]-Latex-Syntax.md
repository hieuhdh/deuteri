---
layout: post
title: "Latex Syntax"
date: 2020-10-18
update: 2020-12-09
excerpt: "Một vài cú pháp Latex mà tôi thường dùng trong Markdown"
tags: [Guide, Math, Syntax]
comments: true
---

<h2 id="so-luoc-ve-cac-bang-ki-tu">Sơ lược về về các cú pháp cơ bản</h2>
<div> <strong>Mô tả: </strong>Dưới đây là một vài bảng thể hiện kí tự cũng như các cú pháp cơ bản của Latex mà tôi thường dùng trong việc viết kí hiệu toán học trên Markdown.
<br>  <strong>Lưu ý: </strong>khi viết kí tự Latex trong Markdown ta cần đặt cú pháp của chúng vào giữa cặp "$ $" và "$ $". Ví dụ muốn viết kí hiệu alpha thì ta phải viết "$ $\alpha$ $" chứ không phải \alpha. Cặp kí hiệu dolar phải viết liền, bỏ khoảng cách.
</div>


<h3 id="bang-chu-cai-hi-lap">Bảng chữ cái Hi Lạp</h3>

|:---:  | :---:                                         |    :----:                         |         :---: |
|STT    | Kí tự                                         | Cú pháp                           | Ghi chú       |
|:---:  | :---                                          |    :----                          |          :--- |
|1      | A và $$\alpha$$                               | A và \apha                        |               |
|2      | B và $$\beta$$                                | B và \beta                        |               |
|3      | $$\Gamma$$ và $$\gamma$$                      | \Gamma và \gamma                  |               |
|4      | $$\Delta$$ và $$\delta$$                      | \Delta và \delta                  |               |
|5      | $$E$$, $$\epsilon$$ và $$\varepsilon$$        | E, \epsilon và \varepsilon        |               |
|6      | $$Z$$ và $$\zeta$$                            | Z và \zeta                        |               |
|7      | $$H$$ và $$\eta$$                             | H và \eta                         |               |
|8      | $$\Theta$$, $$\theta$$ và $$\vartheta$$       | \Theta, \theta và \vartheta       |               |
|9      | $$I$$ và $$\iota$$                            | I và \iota                        |               |  
|9      | $$K$$, $$\kappa$$ và $$\varkappa$$            | K, \kappa và \varkappa            |               |  
|10     | $$\Lambda$$ và $$\lambda$$                    | \Lambda và \lambda                |               |  
|11     | $$M$$ và $$\mu$$                              | M và \mu                          |               |  
|12     | $$N$$ và $$\nu$$                              | N và \nu                          |               |  
|13     | $$\Xi$$ và $$\xi$$                            | \Xi và \xi                        |               |  
|14     | $$O$$ và $$\omicron$$                         | O và \omicron                     |               |  
|15     | $$\Pi$$, $$\pi$$ và $$\varpi$$                | \Pi, \pi và \varpi                |               |  
|16     | $$P$$, $$\rho$$ và $$\varrho$$                | P, \rho và \varrho                |               |  
|17     | $$\Sigma$$, $$\sigma$$ và $$\varsigma$$       | \Sigma, \sigma và \varsigma       |               | 
|18     | $$T$$ và $$\tau$$                             | T và \tau                         |               |   
|19     | $$\Upsilon$$ và $$\upsilon$$                  | \Upsilon và \upsilon              |               |  
|20     | $$\Phi$$, $$\phi$$ và $$\varphi$$             | \Phi, \phi và \varphi             |               | 
|21     | $$X$$ và $$\chi$$                             | X và \chi                         |               | 
|22     | $$\Psi$$ và $$\psi$$                          | \Psi và \psi                      |               | 
|23     | $$\Omega$$ và $$\omega$$                      | \Omega và \omega                  |               | 
|24     | $$F$$ và $$\digamma$$                         | F và \digamma                     |               | 
{: rules="groups"}

<br>
<h3 id="toan-tu-trong-dai-so-boole">Toán tử trong Đại số Boole</h3>
<div>Vì trong đại số Boole có một phần người ta dựa vào đó kết hợp với lý thuyết mã Grey để tạo nên cổng logic và phép toán tuyển với phép toán hội trong cổng logic lúc này tương ứng là <strong>or</strong> và <strong>and</strong>, do đó mới có bộ kí hiệu mới là <strong>\lor</strong> và <strong>\land</strong>. </div>
<div>Để có thể thao tác đúng về mặt ý nghĩa, việc ta lựa chọn loại cú pháp đúng cho các trường hợp thích hợp là điều cần thiết.</div>

|:---:  |  :---:                                        |     :----:                        |         :---:     |
|STT    | Kí tự                                         | Cú pháp                           | Ghi chú           |
|:---:  | :---                                          |    :----                          |          :---     |
|1      | $$\wedge$$ hoặc $$\land$$                     | \wedge hoặc \land                  | Phép toán hội     |
|2      | $$\vee$$   hoặc $$\lor$$                      | \vee hoặc \lor                     | Phép toán tuyển   |
|3      | $$\neg$$                                      | \neg                               | Phép toán phủ định |
{: rules="groups"}

<br>
<h3 id="toan-tu-trong-dai-so-quan-he">Toán tử trong Đại số Quan hệ</h3>

|:---:  | :---:                                                                 |    :----:                                             |         :---: |
|STT    | Kí tự                                                                 | Cú pháp                                               | Ghi chú       |
|:---:  | :---                                                                  |    :----                                              |          :--- |
|1      | $$<$$, $$\nless$$, $$>$$ và $$\ngtr$$                                 | <, \nless, > và \ngtr                                 |               |
|2      | $$\le$$, $$\nleq$$, $$\geq$$ và $$\ngeq$$                             | \le, \nleq, \geq và \ngeq                             |               |
|3      | $$\leqslant$$, $$\nleqslant$$, $$\geqslant$$, $$\ngeqslant$$          | \leqslant, \nleqslant, \geqslant, và \ngeqslant       |               |
|4      | $$\prec$$, $$\nprec$$, $$\succ$$ và $$\nsucc$$                        | \prec, \nprec, \succ và \nsucc                        |               |
|5      | $$\preceq$$, $$\npreceq$$, $$\succeq$$ và $$\nsucceq$$                | \preceq, \npreceq, \succeq và \nsucceq                |               |
|6      | $$\ll$$ và $$\gg$$                                                    | \ll và \gg                                            |               |
|7      | $$\lll$$ và $$\ggg$$                                                  | \lll và \ggg                                          |               |
|8      | $$\subset$$ và $$\not\subset$$                                        | \subset và \not\subset                                |               |
|9      | $$\supset$$ và $$\not\supset$$                                        |\supset và \not\supset                                 |               |
|10     | $$\subseteq$$, $$\nsubseteq$$, $$\supseteq$$, $$\nsupseteq$$          | \subseteq, \nsubseteq, \supseteq và \nsupseteq        |               |  
|11     | $$\subseteq$$ và $$\sqsubseteq$$                                      | \sqsubseteq và \nsqsubseteq                           |               | 
|12     | $$\supseteq$$ và $$\sqsupseteq$$	                                    | \sqsupseteq và \nsqsupseteq                           |               |  
|13     | $$=$$ và $$\ne$$                                                      | = và \ne                                              |               |  
|14     | $$\doteq$$                                                            | \doteq                                                |               |  
|15     | $$\equiv$$                                                            | \equiv                                                |               |  
|16     | $$\approx$$                                                           | \approx                                               |               |  
|17     | $$\cong$$                                                             | \cong                                                 |               |  
|18     | $$\simeq$$                                                            | \simeq                                                |               |  
|19     | $$\sim$$                                                              | \sim                                                  |               |  
|20     | $$\propto$$                                                           | \propto                                               |               | 
|21     | $$\parallel$$ và $$\nparallel$$                                       | \parallel và \nparallel                               |               |   
|22     | $$\vdash$$ và $$\dashv$$                                              | \vdash và \dashv                                      |               |  
|23     | $$\in$$, $$\ni$$ và $$\notin$$                                        | \in, \ni và \notin                                    |               | 
|24     | $$\perp$$                                                             | \perp                                                 |               | 
|25     | $$\mid$$                                                              | \mid                                                  |               | 
|26     | $$\asymp$$, $$\bowtie$$ và $$\models$$                                | \asymp, \bowtie và \models                            |               | 
|27     | $$\smile$$ và $$\frown$$                                              | \smile và \frown                                      |               | 
{: rules="groups"}

<br>
<h3 id="toan-tu-trong-logic-vi-tu">Toán tử trong Logic vị từ</h3>

|:---:  | :---:                                                                 |    :----:                                        |               :---: |
|STT    | Kí tự                                                                 | Cú pháp                                          | Ghi chú             |
|:---:  | :---                                                                  |    :----                                         |                :--- |
|1      | $$\exists$$                                                           | \exists                                          | Tồn tại             |
|2      | $$\exists!$$                                                          | \exists!                                         | Tồn tại duy nhất    |
|3      | $$\nexists$$                                                          | \nexists                                         | Không tồn tại       |
|4      | $$\forall$$                                                           | \forall                                          | Với mọi             |
|5      | $$\neg$$                                                              | \neg                                             | Phép toán phủ định  |
|6      | $$\Rightarrow$$                                                       | \Rightarrow                                      | Suy ra (kéo theo)   |
|7      | $$\Longrightarrow$$	                                                | \Longrightarrow	                               | Suy ra (kéo theo)   |   
|8      | $$\Leftarrow$$                                                        | \Leftarrow                                       | Suy ra chiều ngược  |
|9      | $$\Longleftarrow$$                                                    |  \Longleftarrow                                  | Suy ra chiều ngược  |
|10     | $$\Leftrightarrow$$                                                   | \Leftrightarrow                                  | Tương đương mệnh đề  |
|11     | $$\Longleftrightarrow$$                                               | \Longleftrightarrow                              | Tương đương mệnh đề  |
|9      | $$\top$$                                                              | \top                                             |                     |  
|10     | $$\bot$$	                                                            | \bot	                                           |                     |   
{: rules="groups"}

<br>
<h3 id="cac-ki-hieu-mui-ten">Các kí hiệu mũi tên (bổ sung)</h3>

|:---:  | :---:                                                                 |    :----:                                       |                :---: |
|STT    | Kí tự                                                                 | Cú pháp                                         | Ghi chú              |
|:---:  | :---                                                                  |    :----                                        |                 :--- |
|1      | $$\Uparrow$$                                                          | \Uparrow                                        | Mũi tên lên          |
|2      | $$\uparrow$$                                                          | \uparrow                                        | Mũi tên lên          |
|3      | $$\Downarrow$$                                                        | \Downarrow                                      | Mũi tên xuống        |
|4      | $$\downarrow$$                                                        | \downarrow                                      | Mũi tên xuống        |
|5      | $$\searrow$$                                                          | \searrow                                        | Mũi tên xéo xuống    |
|6      | $$\nearrow  $$                                                        | \nearrow                                        | Mũi tên xéo lên      |
|7      | $$\Updownarrow$$                                                      | \Updownarrow                                    | Mũi tên lên xuống    |
|8      | $$\leftarrow$$                                                        | \leftarrow                                      | Mũi tên trái 1 nét   |
|9      | $$\rightarrow$$                                                       | \rightarrow                                     | Mũi tên phải 1 nét   |
|10     | $$\leftrightarrow$$                                                   | \leftrightarrow                                 | Mũi tên 2 chiều 1 nét|
|11     | $$x \to y$$	                                                        | x \to y	                                      |                      |   
|12     | $$\mapsto$$                                                           | \mapsto                                         |                      |
|13     | $$\longmapsto$$                                                       | \longmapsto                                     |                      |
|14     | $$\rightharpoondown$$                                                 |  \rightharpoondown                              |                      |
|15     | $$\leftharpoondown$$                                                  | \leftharpoondown                                |                      |
|16     | $$\rightharpoonup$$                                                   | \rightharpoonup                                 |                      |
|17     | $$\leftharpoonup$$                                                    | \leftharpoonup                                  |                      | 
|18     | $$\longrightarrow$$                                                   | \longrightarrow                                 |                      | 
|19     | $$\longleftarrow$$                                                    | \longleftarrow                                  |                      |  
{: rules="groups"}

<br>
<h3 id="ki-hieu-trong-tap-hop">Kí hiệu trong Tập hợp</h3>

|:---:  | :---:                                                                 |    :----:                                      |                 :---: |
|STT    | Kí tự                                                                 | Cú pháp                                        | Ghi chú               |
|:---:  | :---                                                                  |    :----                                       |                  :--- |
|1      | $$\emptyset$$                                                         | \emptyset                                      | Tập rỗng              |
|2      | $$\varnothing$$                                                       | \varnothing                                    | Tập không có giá trị   |
|3      | $$\mathbb{N,Z,Q,I,R,C}$$                                              | \mathbb{N,Z,Q,I,R,C}                           | Các trường số         |
|4      | $$\in$$                                                               | \in                                            |                       |
|5      | $$\notin$$                                                            | \notin                                         |                       |
|6      | $$\subset$$                                                           | \subset                                        | Tập con thực sự        |
|7      | $$\subseteq$$                                                         | \subseteq                                      | Tập con               |
|8      | $$\supset$$                                                           | \supset                                        |                       |
|9      | $$\supseteq$$                                                         | \supseteq                                      |                       | 
|10     | $$\cup$$	                                                            | \cup	                                         |                       |  
|11     | $$\cap$$	                                                            | \cap	                                         |                       |
|12     | $$\backslash$$	                                                    | \backslash	                                 | Tập hiệu               |
|13     | $$\vert A \vert$$	                                                    | \vert A \vert	                                 | Lực lượng tập hợp      |
{: rules="groups"}

<br>
<h3 id="ki-hieu-trong-hinh-hoc">Kí hiệu trong Hình học</h3>

|:---:  | :---:                                                                 |    :----:                                      |                 :---: |
|STT    | Kí tự                                                                 | Cú pháp                                        | Ghi chú               |
|:---:  | :---                                                                  |    :----                                       |          :--- |
|1      | $$\overline{\rm AB}$$                                                | \overline{\rm AB}                         | Độ dài đại số AB     |
|2      | $$\angle$$                             | \angle                             | Góc              |
|3      | $$\measuredangle$$                             | \measuredangle                             | Góc             |
|4      | $$\triangle$$          | \triangle     |  Tam giác             |
|5      | $$\cong$$                      | \cong                        |              |
|6      | $$\ncong$$                | \ncong                |               |
|7      | $$\sim$$                      | \sim                            | Tương đồng |
|8      | $$\nsim$$              | \nsim                                     | Không tương đồng |
|9      | $$\Vert$$                | \Vert         |  Song song         |
|10     | $$\nparallel$$         | \nparallel        |  Không song song             |  
|11     | $$\perp$$	| \perp	                                            |    Vuông góc           |   
|12     | $$\not\perp$$	| \not\perp	                                            | Không vuông góc              |
|13     | $$\overrightarrow{\rm AB}$$	| \overrightarrow{\rm AB}	                                            |vector AB              |
{: rules="groups"}

<br>
<h3 id="ki-hieu-cac-dau-ngoac">Kí hiệu các dấu ngoặc</h3>

|:---:  | :---:                                                                 |    :----:                                      |                 :---: |
|STT    | Kí tự                                                                 | Cú pháp                                        | Ghi chú               |
|:---:  | :---                                                                  |    :----                                       |          :--- |
|1      | $$\big($$, $$\Big($$ và $$\bigg($$ và $$\Bigg($$             |  \big(, \Big(, \bigg( và \Bigg(        | Dấu ngoặc tròn mở     |
|2      | $$\big)$$, $$\Big)$$ và $$\bigg)$$ và $$\Bigg)$$             |  \big), \Big), \bigg) và \Bigg)        | Dấu ngoặc tròn đóng   |
|3      | $$\big[$$, $$\Big[$$ và $$\bigg[$$ và $$\Bigg[$$             |  \big[, \Big[, \bigg[ và \Bigg[        | Dấu ngoặc vuông mở    |
|4      | $$\big]$$, $$\Big]$$ và $$\bigg]$$ và $$\Bigg]$$             |  \big], \Big], \bigg] và \Bigg]        | Dấu ngoặc vuông đóng  |
|5      | $$\{$$, $$\big\{$$, $$\Big\{$$ và $$\bigg\{$$ và $$\Bigg\{$$ | \{, \big\{, \Big\{, \bigg\{ và \Bigg\{ | Dấu ngoặc nhọn mở     |
|6      | $$\}$$, $$\big\}$$, $$\Big\}$$ và $$\bigg\}$$ và $$\Bigg\}$$ | \}, \big\}, \Big\}, \bigg\} và \Bigg\} | Dấu ngoặc nhọn đóng   |
{: rules="groups"}

<br>
<h2 id="so-luoc-ve-cac-cu-phap">Một vài cú pháp khác</h2>

<h3 id="gioi-han">Giới hạn</h3>

|:---:  | :---:                                                                 |    :----:                                      |                 :---: |
|STT    | Kí tự                                                                 | Cú pháp                                        | Ghi chú               |
|:---:  | :---                                                                  |    :----                                       |          :--- |
|1      | $$\lim_{x\to\infty}(x+1)^{666}$$             |  \lim_{x\to\infty}(x+1)^{666}|  Giới hạn dạng nhỏ   |
|2      | $$\displaystyle \lim_{x\to\infty}(x+1)^{666}$$        | \displaystyle \lim_{x\to\infty}(x+1)^{666}| Giới hạn dạng to   |
{: rules="groups"}

<br>
<h3 id="tong-sigma">Tổng Sigma</h3>

|:---:  | :---:                                                                 |    :----:                                      |                 :---: |
|STT    | Kí tự                                                                 | Cú pháp                                        | Ghi chú               |
|:---:  | :---                                                                  |    :----                                       |          :--- |
|1      | $$\sum_{i=1}^n(C^i_na^ib^{n-i})$$             |  \sum_{i=1}^n(C^i_na^ib^{n-i})| Tổng dạng nhỏ     |
|2      | $$\displaystyle \sum_{i=1}^n(C^i_na^ib^{n-i})$$        | \displaystyle \sum_{i=1}^n(C^i_na^ib^{n-i})| Tổng dạng to   |
{: rules="groups"}

<br>
<h3 id="tich-phan">Tích phân</h3>

|:---:  | :---:                                                                 |    :----:                                      |                 :---: |
|STT    | Kí tự                                                                 | Cú pháp                                        | Ghi chú               |
|:---:  | :---                                                                  |    :----                                       |          :--- |
|1      | $$\int_1^2(x+1)^{666}dx$$             |  \int_1^2(x+1)^{666}dx |   Tích phân dạng nhỏ   |
|2      | $$\displaystyle \int_1^2(x+1)^{666}dx$$        | \displaystyle \int_1^2(x+1)^{666}dx | Tích phân dạng to  |
{: rules="groups"}

<br>
<h3 id="phan-thuc">Phân thức</h3>

|:---:  | :---:                                                                 |    :----:                                      |                 :---: |
|STT    | Kí tự                                                                 | Cú pháp                                        | Ghi chú               |
|:---:  | :---                                                                  |    :----                                       |          :--- |
|1      | $$\dfrac{x}{y}$$             |  \dfrac{x}{y} |     |
|2      | $$\dfrac{x^{12}+xy+xy^{10}}{2xy+x+y^{10}}$$        | \dfrac{x^{12}+xy+xy^{10}}{2xy+x+y^{10}} |   |
{: rules="groups"}

<br>
<h3 id="khai-can">Khai căn</h3>

|:---:  | :---:                                                                 |    :----:                                      |                 :---: |
|STT    | Kí tự                                                                 | Cú pháp                                        | Ghi chú               |
|:---:  | :---                                                                  |    :----                                       |          :--- |
|1      | $$\sqrt{xy}$$             |  \sqrt{xy} |     |
|2      | $$\sqrt[n]{xy}$$        | \sqrt[n]{xy} |   |
|3      | $$\dfrac{x+y}{2} \geq \sqrt{xy}$$        | \dfrac{x+y}{2} \geq \sqrt{xy} | Vận dụng   |
{: rules="groups"}

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
