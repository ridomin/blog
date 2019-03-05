---
title: The making of
date: "2019-03-03T23:46:37.121Z"
---

I love static site generators, after trying Jekyll I was looking for something
more recent with better markdown support. 

After browsing popular templates for netlify I decided to try Gatsby, and get familiar
with the `reac syntax`.

## My development environment

Believe it or not, I don't use Node/Npm in my daily development workflow, and I don't 
want install and mantain node on all the machines I use (more than 4!!). 
An online IDE editor would be ideal. I need to a linux terminal where I can download and install
gatsby, access the terminal and preview the live changes, all from a browser.
One of those IDEs is Cloud9.

Cloud9 allows to redirect the IP/PORT to a known URL you can use to preview 
your webiste. I run 

```
npm run dev -- --port $PORT --host $IP
```

And then I can access the running server from a known c9 url:
