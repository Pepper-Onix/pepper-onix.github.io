---
layout: single
title: Useful bash commands
excerpt: "Repository of useful commands for the everyday bash usage."
date: 2021-08-18
classes: wide
header:
  teaser: /assets/images/htb-writeup-delivery/delivery_logo.png
  teaser_home_page: true
<!---  icon: /assets/images/hackthebox.webp --->
categories:
  - bash
  - repository
tags:  
  - rm
---

Exclude a file from deletion:

```
rm -rf $(find . -name "*" ! -name "important.txt")

```
