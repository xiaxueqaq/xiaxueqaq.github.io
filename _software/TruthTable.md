---
title: "Truth Table Calculator"
collection: software
permalink: /software/TruthTable
excerpt: "Language: C<br><br>This is a tiny program I wrote to calculate the truth table of a propositional formula."
language: 'C'
date: 2019-03-19
---

I used this C program to compute the truth table of a propositional logic formula (to finish my logic homework) / 过去我写数理逻辑作业时用这个C程序打命题逻辑语句真值表

Example 1
```
Copyright (c) 2019 xiaxueqaq @ BUAA 1709(SMS)/ 1723(SAE), All Rights Reserved
Type "help" for usage, or input the boolean expression directly
((p>q)>p)
Expression Parsed, 2 Variables Found
p q  result
T|T| =T
T|F| =T
F|T| =F
F|F| =F
```

Example 2
```
Copyright (c) 2019 xiaxueqaq @ BUAA 1709(SMS)/ 1723(SAE), All Rights Reserved
Type "help" for usage, or input the boolean expression directly
(p>q)=(-q>-p)
Expression Parsed, 2 Variables Found
p q  result
T|T| =T
T|F| =T
F|T| =T
F|F| =T
```

Example 3
```
Copyright (c) 2019 xiaxueqaq @ BUAA 1709(SMS)/ 1723(SAE), All Rights Reserved
Type "help" for usage, or input the boolean expression directly
(a^b)vc
Expression Parsed, 3 Variables Found
a b c  result
T|T|T| =T
T|T|F| =T
T|F|T| =T
T|F|F| =F
F|T|T| =T
F|T|F| =F
F|F|T| =T
F|F|F| =F
```

Check it out:

<a href="https://github.com/xiaxueqaq/Truth-Table-Calculator" target="_blank">
    <button style="background-color: white; color: black;">GitHub</button>
</a>
