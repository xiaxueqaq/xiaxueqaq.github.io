---
title: "An Algorithm for Transcendental Decision Problems"
collection: software
permalink: /software/trans-decision
excerpt: "Language: Mathematica<br><br>This is the package providing DecideTrigExt in [our paper](https://dl.acm.org/doi/10.1145/3666000.3669675)."
language: 'Mathematica'
date: 2024-01-29
---

This project provides a decision algorithm to trigonometric extensions. The implementation is based on MATHEMATICA 13. 

# Examples
For example, suppose we want to prove 
$$(\exists t)\left((t>0)\wedge(-\frac{11}{3} \mathrm{e}^{-t} \sin (3 t)+\mathrm{e}^{-t} \cos (3 t)-1=-5 t-7 \mathrm{e}^{-2 t}+2)\right)$$

`TrigExtVerify[
 Exists[x, (x > 0) \[And] (-E^(-2 x) (7 - 2 E^(2 x) + 5 E^(2 x) x) == 
     TrigExpand[-(1/3) E^-x (3 E^x - 3 Cos[3 x] + 11 Sin[3 x])])]]`, which returns `True`.

Check it out: 
<a href="https://github.com/xiaxueqaq/TranscendentalProblems" target="_blank">
    <button style="background-color: white; color: black;">GitHub</button>
</a>
