# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Astro and TypeScript, deployed as a static GitHub Pages site. The catalogue and editorial guides share one repository and one site.

## Users

The primary users are Korean-speaking, everyday Windows users who want a trustworthy utility without navigating misleading download sites, bundled offers, or advertising-heavy applications.

## Product Purpose

Adfree helps people find well-known, free Windows utilities by purpose and continue to each publisher's official download page. Success means a visitor can understand why an app is listed, see how recently its source was checked, and reach the official source without mistaking an unverified claim for a completed review.

## Positioning

The catalogue publishes its evidence and verification state. It separates official-source checks from hands-on Windows installer checks instead of presenting every candidate as equally verified.

## Operating Context

- The site is developed and built on macOS.
- Link, redirect, and release-source checks are platform-independent and can run in GitHub Actions.
- Installer advertising and bundled-offer checks require a Windows PC or virtual machine and remain visibly pending until completed.
- The catalogue links to official download pages and does not redistribute installers.

## Capabilities and Constraints

- Version one targets Windows and starts with 10 categories and 30 review candidates.
- Applications and installers must be free of advertising and affiliate bundles. Donation messaging on an official website is allowed.
- Stable releases are shown by default; beta and nightly releases are excluded from the main catalogue.
- Automated checks detect changes and open a review issue. Publication remains a human decision.
- Public records need a canonical official domain, official download page, verification dates, and evidence links.
- Internationalization, mobile-app coverage, user accounts, ratings, comments, and direct binary hosting are out of scope for version one.

## Brand Commitments

- Working name: Adfree.
- Voice: plain Korean, calm, specific, and transparent about uncertainty.
- Avoid security theatre, unsupported rankings, invented popularity metrics, and unqualified “safe” claims.

## Evidence on Hand

- The agreed initial candidate list contains 30 applications across 10 categories.
- Official-source examples identified during planning include 7-Zip, VLC, ShareX, PowerToys, and Duplicati.
- No Windows installer review evidence, user testimonials, traffic metrics, or independent security-audit results are currently available and must not be fabricated.

## Product Principles

1. Link to the publisher, not a mirror.
2. Show the evidence and the date behind every status.
3. Keep automated detection separate from human approval.
4. Prefer a short, well-maintained list over an unverified directory.
5. Make pending and excluded states as understandable as approved states.

## Accessibility & Inclusion

The web catalogue must support keyboard navigation, visible focus, reduced motion, readable Korean typography, semantic landmarks, and responsive layouts down to 320 px.
