##My set up for Ubuntu 14.04##

This serves as a ducumentation oon how I was able to set up my Ubuntu 14.04.1 LTS.

I was able to find that info using '`lsb_release -a`' via the terminal.

## Setting Up Git ##
- sudo apt-get install git 
- git config --global user.name "Your Name"
- git config --global user.email "youremail@domain.com"
- [Set Up SSH Keys!](https://help.github.com/articles/generating-ssh-keys/#platform-linux)


## Server Communication ##
Lately I have learned that it is safer to communicate with the server using SSH over other convensional methods.
I think this method is slightly different from the SSH descibed above, becouse I was able to SSh into my **http://localhost**. I presume that I would do the same to a remote server.

- sudo apt-get install openssh-server

So next I wil try to SSH to a remote server and push my web project.
Documantation will be continued ...... But The idea is to Dev on my local machine, push to github, Connect to a remote server with SSH and then Pull from github. Thus illiminating the use of the FTP process.


### Some usefull Terminal Commands ###

- sudo chown -R username:group directory :: *for changing ownership to a folder*
- sudo -i :: *for doing stuff as root*
- mkdir -pv /foo/bar :: *Make parent directories as needed and the -v which makes mkdir tell us what it is doing*
- cp source destination :: *Copying files*
- mv source destination :: *Moving file*
- ./scriptname.sh  :: *Running a shell script in the Current Folder [Repos](https://gist.github.com/robwierzbowski/5430952)*
- ifconfig eth0 | grep inet | awk '{ print $2 }' :: *Find your Server’s IP address*