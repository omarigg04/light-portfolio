---
title: "Fixing Issues Using npm & pnpm in an Astro Project"
description: "This post provides a solution for resolving conflicts when using both npm and pnpm in an Astro project."
publishDate: "18 Jul 2024"
tags: ["fix", "version", "versionIssue", "astro", "npm", "pnpm", "versionManager"]
---

## Introduction

Using both npm and pnpm in a single project can lead to various issues, especially when managing dependencies in an Astro project. This tutorial outlines the problems you might encounter and provides a step-by-step solution to resolve them.

## Common Issues When Using npm and pnpm Together

1. **Conflicting Lock Files:** 
   - Both npm and pnpm create their own lock files (`package-lock.json` for npm and `pnpm-lock.yaml` for pnpm). This can cause conflicts and inconsistencies in your project's dependencies.
   
2. **Duplicate Dependencies:**
   - Using both package managers can lead to duplicate installations of dependencies, increasing the size of your `node_modules` folder and potentially causing version mismatches.

3. **Node Modules Resolution:**
   - pnpm uses a different strategy for storing node modules, which can result in issues when npm expects them to be in a standard layout.

## Simple Solution to Avoid Issues

To avoid these issues, you can follow these steps:

### Step 1: Move the Astro Node Folder

Move the Astro node folder into a subfolder within `node_modules` named `.ignored`. This helps to segregate the dependencies and avoid conflicts.

```bash
mv node_modules/astro node_modules/.ignored/astro 
```


### Step 2: Run pnpm Install
Next, install the dependencies using pnpm to ensure consistency in the dependency management.

```bash
pnpm install
```