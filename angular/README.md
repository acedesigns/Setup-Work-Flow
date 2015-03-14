If and when you run into a `Error: listen EADDRINUSE` run `killall -9 node`


## Instructions ##

Removing Un-wanted or Un-used files / folders

`git rm -rf folder/file`

If you ever need to remove Deleted files  and you dont wanna do  `git rm -rf folder/file` on every file

`git rm $(git ls-files --deleted)`

Git Instructions

Test your code & ask if you are not sure.

cd to your working folder

`git status`

`git pull`

`git add [*,filename]` Prefferably use `git add .`

`git commit -m "commit message"`

`git push.`


##Conflict resolution##
[Install Meld](http://meldmerge.org/)

`sudo apt-get install meld`

`git pull`

`git stash [filename]`

`git stash list`

`git stash apply`

`git mergetool -t meld`

`git commit -m "commit message"`

`git push`