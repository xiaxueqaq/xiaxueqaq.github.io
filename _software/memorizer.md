---
title: "Memorizer"
collection: software
permalink: /software/memorizer
excerpt: "Language: Pascal<br><br>This is a tiny program I used to memorize vocabulary in 2017-2018."
language: 'Mathematica'
date: 2017-10-20
---

This is a tiny program I wrote to memorize the CET-4 vocabulary. It can also be easily modified to adapt to other tests (CET-6, IELTS, GRE, etc).

## Features / 特性
1. The options in Test 4 (Hard English to Chinese) are Chinese translation of similar words / 英译中（困难）测试中的选项为形似英文单词的中文含义
  * e.g. Find the Chinese translation of berry. The options are
  * A. a.欢乐的，愉快的 B. n.浆果(如草莓等) C. vt.背叛；辜负；泄漏 D. vt.埋葬，葬；埋藏 E. vt.携带；运载；传送 F. n.樱桃；樱桃树
  * (A. merry; **B. berry**; C. betray; D. bury; E. carry; F. strawberry)
2. Vice versa for Chinese to English / 中译英反之亦然
3. Spelling chenk leave the blank for a whole syllable / 拼写填空只会空出整个音节
4. The program also records the words you hesitate with / 犹豫作答的单词亦会被记录

I do not know what things are now, but at the time I wrote this software, no app supported these features / 不知道现在背单词软件情况如何，当时这些特性均是绝无仅有的

## Examples / 运行示例

Example 1
```
Copyright (c) 2017 xiaxueqaq @ BUAA Zhizhen College, All Rights Reserved
1:  Easy English To Chinese;
4:  Hard English To Chinese
6:  Hard English To Chinese From xxxx to yyyy in Dictionary Order
7:  Chinese To English
8:  Pronunciation Check
9:  Find Word Of A Definition
11: Review Mode
4
tutor
A. n.作者，作家
B. n.(口语)汽车
C. n.发动机；机动车
D. n.黄油；奶油
E. n.家庭教师；导师
F. n.颜色，彩色；颜料
e
AC! in 3.688 s1 attempt(s) to 1 word(s)
justice
A. n.(水果等)汁，液
B. vt.证明…是正当的
C. a.敌方的；不友善的
D. n.消遣，娱乐
E. n.薄片，切片；部分
F. n.正义，公正；司法
f
AC! in 2.495 s2 attempt(s) to 2 word(s)
series
A. vi.尖声喊叫 n.尖叫声
B. a.简短的；短暂的
C. vt.取得 vi.起源
D. n.天才，天赋，天资
E. n.长处，优点；功过
F. n.连续，系列；丛书
f
AC! in 3.193 s3 attempt(s) to 3 word(s)
leader
A. n.读者；读物，读本
B. n.激光
C. n.层，层次；铺设者
D. vt.为…带路；领导 n.铅，铅制品
E. n.领袖，领导人；首领
F. n.皮革；皮革制品
e
AC! in 3.285 s4 attempt(s) to 4 word(s)
sequence
A. n.判决；句子 vt.宣判
B. n.屡次；次数；频率
C. n.防御；防务；辩护
D. n.结果，后果
E. n.沉默 vt.使沉默
F. n.连续，继续；次序
a
WA!
f
AC! in 13.475 s6 attempt(s) to 5 word(s)
league
A. n.鹰
B. n.同盟，联盟；联合会
C. vi.&vi.&n.停止，停息
D. n.容易，舒适 vt.缓和
E. n.边缘，边；刀口
F. n.特征，特色；面貌
x
Your hard work should be recognized!
7 attempts to 6 words you have done!Your accuracy rate is 0.857
Here're the 1 words you may mismatch
sequence n.连续，继续；次序
```

Example 2
```
Copyright (c) 2017 xiaxueqaq @ BUAA Zhizhen College, All Rights Reserved
1:  Easy English To Chinese;
4:  Hard English To Chinese
6:  Hard English To Chinese From xxxx to yyyy in Dictionary Order
7:  Chinese To English
8:  Pronunciation Check
9:  Find Word Of A Definition
11: Review Mode
8
Please input the word you start with:
abandon
Please input the word you stop at
zone
a.顽皮的，淘气的   Hint: naugh__
naughty
AC! in 4.746 s1 attempt(s) to 1 word(s)
a.相似的，类似的   Hint: __milar
similar
AC! in 2.383 s2 attempt(s) to 2 word(s)
vt.推，逼迫 vi.推   Hint: pus_
push
AC! in 2.160 s3 attempt(s) to 3 word(s)
num.十九，十九个   Hint: ni__teen
nineteen
AC! in 3.779 s4 attempt(s) to 4 word(s)
n.一针；针脚 vt.缝   Hint: s_it_h
stitch
AC! in 5.579 s5 attempt(s) to 5 word(s)
n.故事，传说   Hint: ___e
s
Skipped! Answer:tale
n.杆，杠杆；控制杆   Hint: le___
level
WA!
x
Your hard work should be recognized!
8 attempts to 7 words you have done!Your accuracy rate is 0.875
Here're the 2 words you may mismatch
tale n.故事，传说
lever n.杆，杠杆；控制杆
```

Get it at:
<a href="https://github.com/xiaxueqaq/memorizer" target="_blank">
    <button style="background-color: white; color: black;">GitHub</button>
</a>
