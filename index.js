const receivesAFunction = function (callback) {
      callback()
}

const returnsANamedFunction = function () {
     return function NamedFunction () {

     }
}

const returnsAnAnonymousFunction = function () {
      return function () {

      }
}