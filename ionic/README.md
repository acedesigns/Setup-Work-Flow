### Welcome to my Ionic Framework Application
[More info can be found on ](http://ionicframework.com/)

This little README file serves as a documentation of the hick-ups I ran into while I was setting up my Development Invironment for the Ionic Framework.
More importantly the frustrations in deploying for the Android Platform.

#### Steps I followed

1. `npm install -g ionic`
2. `ionic start myApp tabs`
3. `ionic platform add android`

Now becouse I was following totorial that was using Ripple on Chrome I went and did a [`ripple emulate`](https://www.npmjs.com/package/ripple-emulator).
After havung done a `npm install -g ripple-emulator`. This does not work well as it has a tendency of crassing your browser. So a better way is to do a `ionic serve`.

I dont know if its required but I installed the ripple [Chrome extension](https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc?hl=en)

Doing a `ripple emulate` it opens up Chrome and there are a lot of alert pop ups I did a `ok` on all. And finally the App runs, Only to crash after a minute or so.

### Deploying The App to the Play Store

1. Doing a `ionic build android`, will give you an error `[Error: ANDROID_HOME is not set and "android" command not in your PATH. You must fulfill at least one of these conditions.]`
 Open Up `nano ~/.profile` and at the end of the file paste

> ```
> export ANDROID_HOME=/home/usename/android/adt-bundle-linux/sdk
> export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platforms-tools
> ```
2. You will need [Android SDK's](https://developer.android.com/sdk/index.html)
3. To get KVM installed in order to get the emulaor running `sudo apt-get install qemu-kvm libvirt-bin bridge-utils virt-manager`

For my scenario I had to chown my whole home directory, so run `sudo chown -R username:username .`

The error message `
ERROR building one of the platforms: Error: /home/anele/Templates/myApp/platforms/android/cordova/build: Command failed with exit code 8
You may not have the required environment or OS to build this project
Error: /home/anele/Templates/myApp/platforms/android/cordova/build: Command failed with exit code 8`

#### Note
These are not in any order, I just put them as I remembered. There may be things That I have forgotten about, I wi; try and update as I remember.

## The actuall App is comming.

