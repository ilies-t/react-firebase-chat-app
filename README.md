# Twitteure - Firebase Chat App with React
**_Warning : this project use old version of React & Redux_**

#### Go [here](https://twitteure.firebaseapp.com/) for live demo

## Usage
1 - Install dependencies via npm
```shell
npm install
```
2 - Run in dev mode 👌
```shell
npm start
```

## Note
All firebase configuration are in [src/firebase/index.js](src/firebase/index.js#L5)
```js
const firebaseConfig = {
    apiKey: "XXXXX",
    authDomain: "twitteure.firebaseapp.com",
    databaseURL: "https://twitteure.firebaseio.com",
    projectId: "twitteure",
    storageBucket: "twitteure.appspot.com",
	messagingSenderId: "XXXXX",
	appId: "XXXXX",
    measurementId: "XXXXX"
};
```

## License
[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)
