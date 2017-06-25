import test from 'ava'
import gwt from './index'

test('`give` is a function', t => {
    t.is(typeof gwt.given, 'function');
});

let acc = 0;

function asyncFunctionGenerator(x) {
    return function() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, 100);
        });        
    }
};

const async1 = asyncFunctionGenerator(1);
const async2 = asyncFunctionGenerator(2);
const async3 = asyncFunctionGenerator(3);
const async4 = asyncFunctionGenerator(4);

test('`given` executes functions that return promises in order', async t => {
    const promiseFn = function() {
        return gwt.given(
                async1,
                async2
            )
            .when(
                async3,
                async4
            )
    }
    const val = await promiseFn();
    t.deepEqual(val, [3, 4]);
});

test('`given` returns promises in order', async t => {
    const promiseFn = function() {
        return gwt.given(
                async1(),
                async2()
            )
            .when(
                async3(),
                async4()
            )
    }
    const val = await promiseFn();
    t.deepEqual(val, [3, 4]);
});
