## instaReact
### React app for fetching images from your insta account

![image](https://user-images.githubusercontent.com/19698444/72934891-b6bbb400-3d64-11ea-893e-6b9b4311ccc0.png) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/1a6d87ea69c54d8da23e5bfee0d8bcdd)](https://app.codacy.com/manual/senator.mad/instaReact?utm_source=github.com&utm_medium=referral&utm_content=senatormad/instaReact&utm_campaign=Badge_Grade_Dashboard)

[Technologies](#technologies) | [Prerequisites](#prerequisites) | [How To Use](#how-to-use) | [License](#license)

#### Technologies
___
*   [Node.js](https://nodejs.org/)
*   [Yarn](https://yarnpkg.com/)
*   [React](https://reactjs.org/)
*   [Redux](https://redux.js.org/)
*   [Redux-thunk](https://github.com/reduxjs/redux-thunk)
*   [Redux-logger](https://github.com/LogRocket/redux-logger)
*   [Bootstrap](https://getbootstrap.com/)
*   [Reactstrap](https://reactstrap.github.io/)
*   [Font Awesome](https://fontawesome.com/)

#### Prerequisites
___
To use or/and test this app, you have to install NodeJS and yarn on your machine. How to install Node you can see [here](https://nodejs.org/en/download/package-manager/) and how to install yarn you can see [here](https://yarnpkg.com/en/docs/install)

### How To Use
___

*   Clone this repository:
```shell
$ git clone https://github.com/senatormad/instaReact
```
*   Go into the repository:
```shell
$ cd instaReact/
```
*   Install dependencies:
```shell
$ yarn install
```
*   Next, it's mandatory to set Instagram ACCESS TOKEN in `shared/urlParams.js`. In this file, it's also possible to set fields that are going to be fetched from the Instagram API. Check this [link](https://developers.facebook.com/docs/instagram-api/reference/media/) to see what other fields can be fetched.
*   In `shared/imgParams.js` are values for the number of pictures per row and picture sizes for different screen sizes (bootstrap grid sizes).
*   And now you can start app:
```shell
$ yarn start
```

### License
___
[MIT License](https://github.com/senatormad/imageBoardServer/blob/master/LICENSE)