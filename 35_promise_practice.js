let notesPrepared = false;

let promise = new Promise(function(resolve ,reject) {
    if(notesPrepared) {
        resolve("Please take this notes");
    }
    else{
        reject("Notes are not prepared");
    }
});
promise.then(function resolve(resolveMsg) {
    console.log(resolveMsg);
}).catch(function reject(rejectMsg) {
    console.log(rejectMsg);
}).finally(function() {
    console.log("I have notes");
})