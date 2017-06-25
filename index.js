function result(val) {
    if (typeof val === 'function') {
        return val();
    } else {
        return val;
    }
}

gwt = {
    given: function(...givens) {
        return {
            when: function(...whens) {
                // execute if it is a function and then store promise
                givens = givens.map(result);
                return Promise.all(givens)
                    .then(() => {
                        whens = whens.map(result)
                        return Promise.all(whens);
                    })
            }
        }
    }
}

module.exports = gwt;
