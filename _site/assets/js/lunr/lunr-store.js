var store = [{
        "title": "Ready - Hack The Box",
        "excerpt":"Ready was a pretty straighforward box to get an initial shell on: We identify that’s it running a vulnerable instance of Gitlab and we use an exploit against version 11.4.7 to land a shell. Once inside, we quickly figure out we’re in a container and by looking at the docker...","categories": ["hackthebox","infosec"],
        "tags": ["linux","gitlab","cve","docker","privileged container"],
        "url": "http://localhost:4000/htb-writeup-ready/",
        "teaser":"http://localhost:4000/assets/images/htb-writeup-ready/ready_logo.png"},{
        "title": "Delivery - Hack The Box",
        "excerpt":"Delivery is a quick and fun easy box where we have to create a MatterMost account and validate it by using automatic email accounts created by the OsTicket application. The admins on this platform have very poor security practices and put plaintext credentials in MatterMost. Once we get the initial...","categories": ["hackthebox","infosec"],
        "tags": ["osticket","mysql","mattermost","hashcat","rules"],
        "url": "http://localhost:4000/htb-writeup-delivery/",
        "teaser":"http://localhost:4000/assets/images/htb-writeup-delivery/delivery_logo.png"},{
        "title": "Useful bash comands",
        "excerpt":"Exclude a file from deletion   rm -rf $(find . -name \"*\" ! -name \"important.txt\")  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/useful-bash-commands/",
        "teaser":"http://localhost:4000/assets/images/htb-writeup-delivery/delivery_logo.png"},{
        "title": "Nmap cheatsheet",
        "excerpt":"Scan techniques -sS nmap 192.168.1.1 -sS TCP SYN port scan (Default) -sT nmap 192.168.1.1 -sT TCP connect port scan (Default without root privilege). -sU nmap 192.168.1.1 -sU UDP port scan -sA nmap 192.168.1.1 -sA TCP ACK port scan -sW nmap 192.168.1.1 -sW TCP Window port scan -sM nmap 192.168.1.1 -sM...","categories": ["apuntes"],
        "tags": ["nmap,","apunts"],
        "url": "http://localhost:4000/nmap-commands/",
        "teaser":"http://localhost:4000/assets/images/htb-writeup-delivery/delivery_logo.png"},{
        "title": "Bandit from level 0 to level 3",
        "excerpt":"Level 0 to Level 1 THE LEVEL’S STATEMENT The password for the next level is stored in a file called readme located in the home directory. Use this password to log into bandit1 using SSH. Whenever you find a password for a level, use SSH (on port 2220) to log...","categories": ["OverTheWire"],
        "tags": ["bandit"],
        "url": "http://localhost:4000/bandit-0-to-3/",
        "teaser":"http://localhost:4000/assets/images/htb-writeup-delivery/delivery_logo.png"},{
        "title": "Bandit from level 3 to level 6",
        "excerpt":"Level 3 to Level 4 THE LEVEL’S STATEMENT The password for the next level is stored in a hidden file in the inhere directory. COMMANDS ls - list directory contents. cd - change working directory. cat - concatenate files and print on the standard output. file - determine file type....","categories": ["OverTheWire"],
        "tags": ["bandit"],
        "url": "http://localhost:4000/bandit-3-to-6/",
        "teaser":"http://localhost:4000/assets/images/htb-writeup-delivery/delivery_logo.png"},{
        "title": "Bandit from level 6 to level 9",
        "excerpt":"Level 6 to Level 7 THE LEVEL’S STATEMENT The password for the next level is stored somewhere on the server and has all of the following properties: - owned by user bandit7 - owned by group bandit6 - 33 bytes in size COMMANDS ls - list directory contents. cd -...","categories": ["OverTheWire"],
        "tags": ["bandit"],
        "url": "http://localhost:4000/bandit-6-to-9/",
        "teaser":"http://localhost:4000/assets/images/htb-writeup-delivery/delivery_logo.png"}]
