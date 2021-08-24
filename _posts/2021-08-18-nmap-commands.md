---
layout: single
title: Nmap cheatsheet
excerpt: "nmap -n -Pn -sT -p- --min-rate 3500 IP --open"
date: 2021-08-19
classes: wide
header:
  teaser: /assets/images/htb-writeup-delivery/delivery_logo.png
  teaser_home_page: false
<!---  icon: /assets/images/hackthebox.webp --->
categories: apuntes

tags: nmap, apunts

---

## Scan techniques
```
	-sS	nmap 192.168.1.1 -sS	 	TCP SYN port scan (Default)
-sT 		nmap 192.168.1.1 -sT 		TCP connect port scan (Default without root privilege). 
	-sU	nmap 192.168.1.1 -sU	 	UDP port scan
	-sA 	nmap 192.168.1.1 -sA 		TCP ACK port scan
	-sW 	nmap 192.168.1.1 -sW 		TCP Window port scan
	-sM 	nmap 192.168.1.1 -sM 		TCP Maimon port scan

```
## Host discovery
```
	-sL 	nmap 192.168.1.1-3 -sL 		No Scan. List targets only
	-sn 	nmap 192.168.1.1/24 -sn 	Disable port scanning
-Pn 		nmap 192.168.1.1-5 -Pn 		Disable host discovery. Port scan only
	-PR 	nmap 192.168.1.1-1/24 -PR 	ARP discovery on local network
-n 		nmap 192.168.1.1 -n 		Never do DNS resolution

```

## Service and version detection
```
-sV 					nmap 192.168.1.1 -sV 					Attempts to determine the version of the service running on port
	-sV --version-intensity 	nmap 192.168.1.1 -sV --version-intensity 8 		Intensity level 0 to 9. Higher number increases possibility of correctness
	-sV --version-light 		nmap 192.168.1.1 -sV --version-light 			[Faster] Enable light mode. Lower possibility of correctness.
	-sV --version-all 		nmap 192.168.1.1 -sV --version-all 			[Slower] Enable intensity level 9. Higher possibility of correctness.
-A 					nmap 192.168.1.1 -A 					Enables OS detection, version detection, script scanning, and traceroute
-O					nmap 192.168.1.1 -O					Remote OS detection using TCP/IP stack fingerprinting
	-O --osscan-limit		nmap 192.168.1.1 -O --osscan-limit			[Faster] If at least one open and one closed TCP port are not found it will not try OS detection against host. 
	-O --osscan-guess		nmap 192.168.1.1 -O --osscan-guess			[Slower] Makes Nmap guess more aggressively

```


