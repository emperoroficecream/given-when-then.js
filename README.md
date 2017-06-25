# given-when-then.js


## Usage
Pass functions or invoke them and then pass them to `given` and `when`. `when` returns a thenable so `then` is the Promise's native then.
```javascript
const gwt = require('gwt');
gwt.given(
        setupThatreturnsPromise,
        returnsAnotherPromise()
    )
    .when(
        doSomething(),
        doSomethingElse,
    )
    .then(
        checkResults()
    )
```

## Test
```bash
$ npm test
```
