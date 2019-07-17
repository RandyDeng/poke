# Poke
React Native app that lets users poke each other.

## Progress Update 7/18/19
In summary, I have accomplished the following:

- Installed React Native, Expo, and AWS Amplify properly on my development environment
- Completed a basic React Native tutorial and read through a lot of documentation
- Created a sign in and sign up form using AWS Amplify
- Save user data and authentication-related items using AWS
- Allow users to sign out

## Current Goals
I had several setbacks stemming from my lack of JavaScript and React Native knowledge, but I have learned a lot along the way.

My current goals are:

- Create a main home page to allow people to begin poking
- Record button presses on the screen for a set period of time
- Send the button presses over the network to a particular user

## Installation
Installation will take a while, especially if done incorrectly, so be prepared to debug if you plan on running this locally. This should be done on either Linux or Mac.

- Install [Node and npm](https://www.npmjs.com/get-npm). Node is a JavaScript runtime build on Chrome's JavaScript engine and npm is a JavaScript package manager
- Install expo by running `npm install -g expo-cli`. You may need root permissions to install this globally on your machine
- Copy and paste my project into some folder of your choice
- Go to the root directory of poke and run `npm install`. This will install all the dependencies my project depends on. You can see the list in `package.json`. Ignore any warnings you get.
- Run `expo start` to start the app. To view the app on your phone, you will need to install the `Expo` app and scan the QR code that pops up. You will also need to be on a WLAN of some sort (eduroam works fine) on both devices (laptop and phone).
- If you wish to not install anything on your phone, run `expo start --android` or `expo start --ios`, but you will need to install the emulator software into your development environment. I recommend just installing the app, but feel free to follow the instructions on [Expo Documentation](https://docs.expo.io/versions/latest/introduction/installation/) to install the emulators.
- You should see a sign in page now!
