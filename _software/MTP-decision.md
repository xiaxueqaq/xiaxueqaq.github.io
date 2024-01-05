---
title: "Univariate Mixed Trigonometric Polynomial Decision Algorithm"
collection: software
permalink: /software/MTP-decision
excerpt: "Language: Mathematica<br><br>This is the package providing DecideMTP in [our paper](https://dl.acm.org/doi/abs/10.1145/3597066.3597104)."
language: 'Mathematica'
date: 2023-02-06
---

This project provides a decision algorithm to the first-order theory of univariate MTPs. The implementation is based on MATHEMATICA 12. 

# Examples
For example, suppose we want to prove 
$$(\forall x)\left(\left(\left(x^2\cos x-\sin x=0\right)\wedge \left(x>0\right)\right)\implies\left(x-1>0\right)\right).$$

`ProveMTP[ForAll[x, x^2 Cos[x] - Sin[x] == 0 && x > 0 \[Implies] -1 + x > 0]]`, which returns `True`.

Another example is from the National College Entrance Examination 2023 (NCEE2023) in China. Problem 22 asks students to prove when $0 < x < 1$, we have $x-x^2 < \sin x < x$. This can be shown by our decision procedure with the call:

`ProveMTP[ForAll[x, ((x > 0) \[And] (x - 1 < 0)) \[Implies] ((Sin[x] - x + x^2 > 0) \[And] (Sin[x] - x < 0))]]`, which returns `True`.

Check it out: 
<a href="https://github.com/xiaxueqaq/MTP-decision" target="_blank">
    <button style="background-color: white; color: black;">GitHub</button>
</a>
