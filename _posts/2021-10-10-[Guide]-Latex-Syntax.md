---
layout: post
title: "[Guide] Latex Syntax"
date: 2021-10-10
excerpt: "Một vài cú pháp Latex mà tôi thường dùng trong Markdown"
tags: [Guide, Math]
comments: true
---
<h1 align="center">
    Nội dung
</h1> 

<div align="center">
    <h4>
        <a href="#so-luoc" style="text-decoration: none; color:#823af7">Sơ lược | </a>
        <a href="#bang-chu-cai-hi-lap" style="text-decoration: none; color:#823af7">Bảng chữ cái Hy Lạp | </a>
        <a href="#toan-tu-trong-dai-so-boole" style="text-decoration: none; color:#823af7">Toán tử trong Đại số Boole | </a> 
        <a href="#toan-tu-trong-dai-so-quan-he" style="text-decoration: none; color:#823af7">Toán tử trong Đại số Quan hệ | </a> 
        <a href="#toan-tu-trong-logic-vi-tu" style="text-decoration: none; color:#823af7">Toán tử trong Logic vị từ | </a> 
        <a href="#cac-ki-hieu-mui-ten" style="text-decoration: none; color:#823af7">Các kí hiệu mũi tên (bổ sung) | </a> 
        <a href="#ki-hieu-trong-tap-hop" style="text-decoration: none; color:#823af7">Kí hiệu trong Tập hợp | </a> 
    </h4>
</div>

<h2 id="so-luoc">Sơ lược</h2>
<div> Dưới đây là một vài kí tự cơ bản của Latex mà tôi thường dùng để viết trên Markdown.
<br>  <strong>Lưu ý: </strong>khi viết kí tự Latex trong Markdown ta cần đặt cú pháp của chúng vào giữa cặp "$ $" và "$ $". Ví dụ muốn viết chữ alpha thì ta phải viết "$ $\alpha$ $" chứ không phải \alpha. Cặp kí hiệu dolar phải viết liền, bỏ khoảng cách.
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
|4      | $$\prec$$, $$\nprec$$, $$\succ$$ và $$\nsucc$$                      | \prec, \nprec, \succ và \nsucc                        |               |
|5      | $$\preceq$$, $$\npreceq$$, $$\succeq$$ và $$\nsucceq$$                | \preceq, \npreceq, \succeq và \nsucceq                |               |
|6      | $$\ll$$ và $$\gg$$                                                    | \ll và \gg                                            |               |
|7      | $$\lll$$ và $$\ggg$$                                                  | \lll và \ggg                                          |               |
|8      | $$\subset$$ và $$\not\subset$$        | \subset và \not\subset          |               |
|9      | $$\supset$$ và $$\not\supset$$          |\supset và \not\supset          |               |
|10     | $$\subseteq$$, $$\nsubseteq$$, $$\supseteq$$, $$\nsupseteq$$          | \subseteq, \nsubseteq, \supseteq và \nsupseteq        |               |  
|11     | $$\subseteq$$ và $$\sqsubseteq$$                      | \sqsubseteq và \nsqsubseteq                                        |           | 
|12     | $$\supseteq$$ và $$\sqsupseteq$$	|  \sqsupseteq và \nsqsupseteq|           |  
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

|:---:  | :---:                                                                 |    :----:                                             |         :---: |
|STT    | Kí tự                                                                 | Cú pháp                                               | Ghi chú       |
|:---:  | :---                                                                  |    :----                                              |          :--- |
|1      | $$\exists$$                                                            | \exists                                               |Tồn tại        |
|2      | $$\exists!$$                                                          | \exists!                             | Tồn tại duy nhất              |
|3      | $$\nexists$$          | \nexists      |  Không tồn tại             |
|4      | $$\forall$$                      | \forall                        | Với mọi              |
|5      | $$\neg$$                | \neg                | Phép toán phủ định              |
|6      | $$\Rightarrow$$                     | \Rightarrow                            | Suy ra (kéo theo)|
|7      | $$\Longrightarrow$$	| \Longrightarrow	                                            |   Suy ra (kéo theo)            |   
|8      | $$\Leftarrow$$             | \Leftarrow                                      | Suy ra chiều ngược  |
|9      | $$\Longleftarrow$$              |  \Longleftarrow                                     | Suy ra chiều ngược  |
|10      | $$\Leftrightarrow$$ | \Leftrightarrow          | Tương đương mệnh đề              |
|11      | $$\Longleftrightarrow$$    | \Longleftrightarrow         | Tương đương mệnh đề              |
|9      | $$\top$$         | \top        |               |  
|10      | $$\bot$$	| \bot	                                            |               |   
{: rules="groups"}

<br>
<h3 id="cac-ki-hieu-mui-ten">Các kí hiệu mũi tên (bổ sung)</h3>

|:---:  | :---:                                                                 |    :----:                                             |         :---: |
|STT    | Kí tự                                                                 | Cú pháp                                               | Ghi chú       |
|:---:  | :---                                                                  |    :----                                              |          :--- |
|1      | $$\Uparrow$$                                                            | \Uparrow                                               |Mũi tên lên   |
|2      | $$\Downarrow$$                                                          | \Downarrow                             | Mũi tên xuống    |
|3      | $$\Updownarrow$$          | \Updownarrow      |  Mũi tên lên xuống             |
|4      | $$\leftarrow$$                      | \leftarrow                        | Mũi tên trái 1 nét              |
|5      | $$\rightarrow$$                | \rightarrow                | Mũi tên phải 1 nét              |
|6      | $$\leftrightarrow$$                     | \leftrightarrow                            | Mũi tên 2 chiều 1 nét|
|7      | $$x \to y$$	| x \to y	                                            |            |   
|8      | $$\mapsto$$             | \mapsto                                      |  |
|9      | $$\rightharpoondown$$              |  \rightharpoondown                                     |   |
|10      | $$\leftharpoondown$$ | \leftharpoondown          |         |
|11      | $$\rightharpoonup$$    | \rightharpoonup         |           |
|9      | $$\leftharpoonup$$         | \leftharpoonup        |               |   
{: rules="groups"}

<br>
<h3 id="ki-hieu-trong-tap-hop">Kí hiệu trong Tập hợp</h3>

|:---:  | :---:                                                                 |    :----:                                             |         :---: |
|STT    | Kí tự                                                                 | Cú pháp                                               | Ghi chú       |
|:---:  | :---                                                                  |    :----                                              |          :--- |
|1      | $$\emptyset$$                                                            | \emptyset                                          |Tập rỗng       |
|2      | $$\varnothing$$                             | \varnothing                             | Tập không có giá trị              |
|3      | $$\mathbb{N,Z,Q,I,R,C}$$          | \mathbb{N,Z,Q,I,R,C}     |  Các trường số             |
|4      | $$\in$$                      | \in                        |              |
|5      | $$\notin$$                | \notin                |               |
|6      | $$\subset$$                      | \subset                            | Tập con thực sự|
|7      | $$\subseteq$$              | \subseteq                                     | Tập con  |
|8      | $$\supset$$    | \supset         |           |
|9      | $$\supseteq$$         | \supseteq        |               |  
|10      | $$\cup$$	| \cup	                                            |               |   
|11      | $$\cap$$	| \cap	                                            |               |
|12      | $$\backslash$$	| \backslash	                                            | Tập hiệu              |
{: rules="groups"}
<!-- <h3>
<span id="1">1. Bảng chữ cái Hy Lạp (Greek letters)</span></h3>
<table class="w3-table-all w3-hoverable">
  <thead>
<tr class="w3-green">
    <th>Ký tự</th>
    <th>Lệnh</th>
    <th>Ghi chú</th>
  </tr>
</thead>
  <tbody>
<tr>
    <td>$A$ và $\alpha$</td>
    <td><code>A</code> và <code>\alpha</code></td>
    <td></td>
  </tr>
<tr>
    <td>$B$ và $\beta$</td>
    <td><code>B</code> và <code>\beta</code></td>
    <td></td>
  </tr>
<tr>
<td>$\Gamma$ và $\gamma$</td>
    <td><code>\Gamma</code> và <code>\gamma</code></td>
    <td></td>
</tr>
</tbody></table> -->

<h1 align="center">
  Lời kết
</h1> 

Sau những gì mà tôi đã chia sẻ ở trên mong rằng sẽ giúp ích được phần nào đó cho bạn đọc. Mọi thắc mắc hoặc góp ý bạn đọc có thể liên hệ <a href="https://hieuhdh.github.io/deuteri/" style="text-decoration: none; color:blue" >tại đây</a>.
{: .notice}