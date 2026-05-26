---
title: "Foundational Analysis Of The Solvability Complexity Index: The Weihrauch-SCI Intermediate Hierarchy"
date:           2026-03-19
selected:       true
pub:            "ArXiv"
pub_date:       "2026-03-19"
abstract: >
  The Solvability Complexity Index (SCI) provides an extensional limit-height formalism for recovering a target map $\Xi$ from finite samples of an evaluation interface $\Lambda\subseteq\mathbb C^\Omega$ by finite-height towers of pointwise limits. We first give a foundational analysis of what this extensional framework does and does not determine.
  We show that the SCI separation axiom is equivalent to a factorization of $\Xi$ through the full evaluation table, and we isolate the minimal logical role of $\Lambda$ as an information interface.

  To connect the SCI to Type-2 computability and Weihrauch reducibility, we give an effective enrichment for countable $\Lambda$ by viewing the evaluation table image $I_{\Lambda}\subseteq\mathbb{C}^{\mathbb{N}}$ as a represented space and factoring $\Xi$ as $\widehat{\Xi}$.
  We then define the Weihrauch-SCI rank of a problem as the least number of iterated limit-oracles needed to compute it in the Weihrauch sense, i.e. the least $k$ such that $\widehat{\Xi}\le_{W}\lim^{(k)}$, and prove well-posedness and representation invariance of this rank.

  A central negative result is that the unrestricted raw type-G SCI model (arbitrary post-processing of finite oracle transcripts) is generally not a computability model in the Type-2/Weihrauch sense: finite-query factorizations collapse raw type-G height, and analytic non-Borel decision problems yield examples with raw $\mathrm{SCI}_G=0$ but infinite Weihrauch-SCI rank. We therefore distinguish the raw extensional SCI from implemented SCI variants, where the indexed approximation table is required to be realized uniformly by a chosen class of operations.
  To recover a robust bridge, we introduce an intermediate SCI hierarchy by restricting the admissible deepest-level post-processing to regularity classes (continuous/Borel/Baire) and, optionally, to fixed-query versus adaptive-query policies. We prove that these restrictions form hierarchies, and we establish comparison theorems showing what each restriction logically enforces.

  Finally, we give self-contained canonical source problems over Cantor-matrix inputs which realize arbitrary finite standard raw type-G SCI heights. These examples are not presented as computability models by themselves; rather, they are calibration objects for the extensional SCI and for the interaction between finite-query information, Borel hierarchy level, restricted SCI towers, and Weihrauch-style uniform iterated-limit complexity.
cover:          /assets/images/covers/cover1.jpg
authors:
- Christopher Sorg
links:
  arXiv: 
    url: https://arxiv.org/abs/2603.18955
  #Paper: https://arxiv.org/abs/2603.18955
---