import ReactDOM from 'react'
let app1 =
    import ('app1/App')

var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…


    resolve(app1);

});

promise.then(res => {
    document.getElementById('root').append(res.default.prototype.constructor)
    console.log(res)
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );
    root.render(res);
})

console.log(promise)