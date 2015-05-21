### Welcome to my Ionic Framework Application

[More info can be found on ](http://ionicframework.com/)

#### Steps I followed

1. `npm install -g ionic`
2. `ionic start myApp tabs`
3. `ionic platform add android`

Now becouse I was following totorial that was using Ripple on Chrome I went and did a [`ripple emulate`](https://www.npmjs.com/package/ripple-emulator).
After havung done a `npm install -g ripple-emulator`

I dont know if its required but I installed the ripple [Chrome extension](https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc?hl=en)

Doing a `ripple emulate` it opens up Chrome and there are a lot of alert pop ups I did a `ok` on all. And finally the App runs.

### Deploying The App to the PLay Store

1. Doing a `ionic build android`, will give you an error
`[Error: ANDROID_HOME is not set and "android" command not in your PATH. You must fulfill at least one of these conditions.]
`
2. You will need [Android SDK's](https://developer.android.com/sdk/index.html)
