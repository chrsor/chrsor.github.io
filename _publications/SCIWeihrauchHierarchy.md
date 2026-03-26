---
title: "Foundational Analysis Of The Solvability Complexity Index: The Weihrauch-SCI Intermediate Hierarchy And A Koopman Operator Example"
date:           2026-03-19
selected:       true
pub:            "ArXiv"
pub_date:       "2026-03-19"
abstract: >
  The Solvability Complexity Index (SCI) provides an abstract notion of computing a target map $\Xi$ from finitely many oracle evaluations 
  $\Lambda\subseteq \mathbb{C}$ via finite-height towers of pointwise limits.  We first give a foundational analysis of what this
  extensional framework does and does not determine.
  We show that the SCI separation \enquote{axiom} is equivalent to a factorization of $\Xi$ through the full evaluation table, and we isolate the minimal logical role of $\Lambda$ as an information interface.

  To connect the SCI to Type-2 computability and Weihrauch reducibility, we give an effective enrichment
  for countable $\Lambda$ by viewing the evaluation table image $I_{\Lambda}\subseteq\mathbb{C}^{\mathbb{N}}$
  as a represented space and factoring $\Xi$ as $\widehat{\Xi}$.
  We then define the Weihrauch-SCI rank of a problem as the least number
  of iterated limit-oracles needed to compute it in the Weihrauch sense, i.e.\ the least $k$ such that
  $\widehat{\Xi}\le_{W}\lim^{(k)}$, and prove well-posedness and representation invariance of this rank.

  A central negative result is that the unrestricted type-$G$ SCI model (arbitrary post-processing of
  finite oracle transcripts) is generally not comparable to Weihrauch/Type-2 complexity: finite-query
  factorizations collapse type-$G$ height, and analytic (non-Borel) decision problems yield examples
  with $\mathrm{SCI}_{G}=0$ but infinite Weihrauch-SCI rank.
  To recover a robust bridge, we introduce an intermediate SCI hierarchy by restricting the admissible
  base-level post-processing to regularity classes (continuous/Borel/Baire) and, optionally, to fixed-query
  versus adaptive-query policies.  We prove that these restrictions form genuine hierarchies, and we
  establish comparison theorems showing what each restriction logically enforces (e.g.\ Borel towers
  compute only Borel targets; continuous-base towers yield finite Baire class).

  As an application, we reinterpret the SCI classification of Koopman spectral approximation problems
  as an instance of the intermediate hierarchy.
cover:          /assets/images/covers/cover1.jpg
authors:
- Christopher Sorg
links:
  arXiv: 
    url: https://arxiv.org/abs/2603.18955
  #Paper: https://arxiv.org/abs/2603.18955
---