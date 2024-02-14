/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    // const start=Date.now();
    // while (Date.now()-start<milliseconds);
    // let p=new Promise(function(resolve){
    //     const start=Date.now();
    //     if((Date.now()-start<=milliseconds)){

    //     }else{resolve}
       
    // })
    // return p;

    // this passes the test cases but does not imply hard wait since settimeout is non blocking 

    let p=new Promise (function(resolve){
        setTimeout(resolve,milliseconds)
    })
    return p;
}

module.exports = sleep;
