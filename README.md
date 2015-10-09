##My set up for Ubuntu 14.04##

So I am moving away from using [MS Windows](http://windows.microsoft.com) and I want to truly embrace Open Source. So this is just to document my experience in getting myself ready for pure #joy.

And this serves as a documentation on how I was able to set up my Ubuntu 14.04.1 LTS. I was able to find that info using '`lsb_release -a`' via the terminal. But I am also familiar with Fedora. :).

## Setting Up the LAMMP Stack ##
- `sudo apt-get install apache2`
- `sudo apt-get install mysql-server libapache2-mod-auth-mysql php5-mysql`
- `sudo mysql_install_db`
- `sudo /usr/bin/mysql_secure_installation`
- `sudo apt-get install php5 libapache2-mod-php5 php5-mcrypt`
- `sudo service apache2 restart` and `sudo service mysqld restart`

The long explanation can be found at [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu)

## My Editor of Choice ##
```
` sudo add-apt-repository ppa:webupd8team/sublime-text-3`
` sudo apt-get update`
` sudo apt-get install sublime-text-installer`
```

## Setting Up Git ##
- `sudo apt-get install git` 
- `git config --global user.name "Your Name"`
- `git config --global user.email "youremail@domain.com"`
- [Set Up SSH Keys!](https://help.github.com/articles/generating-ssh-keys/#platform-linux)
- [Basic Git Commands](http://rogerdudler.github.io/git-guide/)


## Running into Git ##
This is not an any particular order.

- `sudo apt-get install meld`
- `git mergetool -t meld`
- `git stash` or `git stash list`
- `git pull`
- `git stash show`
- `git rm $(git ls-files --deleted)`
- There is a difference between `git add .` and to `git add *` I still have to fig it out.
- `git clean -f -d` :: Clean untracked files:

There are instances where you would like to just `"Unstash"` just a single file/s.
- `git checkout stash@{0} -- <filename>` the `stash@{0}` is sort of  like an array where the `0` represents the first stash from the list
- `git diff stash@{0}^! -- <filename>` a Command to see the changes you made on that file before you stashed it. Use the above commant to bring them back 

## Some usefull npm commands ##
- `npm list -g --depth=0` chechk what modules have been installed globally
- `npm uninstall -g package` Uninstall global package. 

## Server Communication ##
Lately I have learned that it is safer to communicate with the server using SSH over other conventional methods.
I think this method is slightly different from the SSH described above, because I was able to SSh into my **http://localhost**. I presume that I would do the same to a remote server.

- `sudo apt-get install openssh-server`
- You can use secure copy (scp) with the recursive option `scp -r /path/to/local/dir user@remotehost:/path/to/remote/dir`
- Alternatively, use rsync because you can resume transfers if the connection breaks, and it intelligently transfers only the differences between files: `rsync -avz -e 'ssh' /path/to/local/dir user@remotehost:/path/to/remote/dir`

So next I will try to SSH to a remote server and push my web project.

Documentation will be continued ...... But The idea is to Dev on my local machine, push to github, Connect to a remote server with SSH and then Pull from github. Thus illuminating the use of the FTP process.


### Some useful Terminal Commands ###
- `sudo chown -R username:group directory` :: **for changing ownership to a folder**
- `sudo -i` :: **for doing stuff as root**
- `mkdir -pv /foo/bar` :: **sMake parent directories as neseded and the -v which makes mkdir tell us what it is doing**
- `cp or mv source destination` :: **Copying Moving files**
- `./scriptname.sh`  ::  **Runsning a shell script in the Current Folder [Repos](https://gist.github.com/robwierzbowski/5430952)
- `ifconfig eth0 | grep inet | awk '{ print $2 }'` :: **Find your Servers IP address**
- `sudo !! `:: **Run Last Command as Sudo**
- `touch index.html `:: **Create a file**
- `grep -r pattern dir`:: **Search recursively for pattern in dir**
- `mkdir folder && cd folder && npm install grunt-cli` :: **Run multiple linux commands in one line**
