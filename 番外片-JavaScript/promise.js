// const promise = new Promise(function(resolve,reject){
//     console.log("promise");
    
//     if(1)
//     {
//         resolve("aaa");
//     }else{
//         reject("aaa");
//     }
// });

// promise.then(post=>console.log(post));
// console.log("end");

/////////////////////////////////////////
////////promise

//promise的含义;
//0:首先他是一个对象-----🦅
//1:对象的状态不受外界影响,只有异步操作(resolve,reject)的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态(pending,fulfilled,rejected);!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//2:传统事件,一旦错过,就不见;----而promise,你随时来随时见;!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/**
 * let promiseMs = 1000;
 * let secondThen = 100;
 * log如下:
 * -------promise
 * -------代码 1
 * -------代码 end
 * -------timeout 代码 start
 * -------timeout 代码 end
 * -------resolve done
 * -------resolve done
 */



 {
// let promiseMs = 100;
// let secondThen = 1000;
// /**
//  * log如下:
//  * -------promise
//  * -------代码 1
//  * -------代码 end
//  * -------resolve done
//  * -------timeout 代码 start
//  * -------timeout 代码 end
//  * -------resolve done
//  */

// const promise = new Promise(function(resolve,reject){
//     console.log("promise");
//     setTimeout(resolve, promiseMs, 'resolve done');
// });

// promise.then(post=>console.log(post));//---------------------Promise一旦状态改变，就不会再变，任何时候都可以得到这个结果,在这里添加一个监听;
//                                       //---------------------传统事件的特点是，如果你错过了它，再去监听，是得不到结果的
// console.log("代码 1");


// setTimeout(() => {
//     console.log("timeout 代码 start");
//     promise.then(post=>console.log(post));//---------------------Promise一旦状态改变，就不会再变，任何时候都可以得到这个结果,在这里再次添加一个监听;
//                                           //---------------------传统事件的特点是，如果你错过了它，再去监听，是得不到结果的
//     console.log("timeout 代码 end");
// }, secondThen);

// console.log("代码 end");

}

/////////////////////////////////////////
////////then


//关于then的解释,为什么第二个then在“timeout 代码 end”之前,但输出却在之后?
/**
 * 1:then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法;
 * 
 * 2:连续两个then,第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数;
 *  
 * 3:前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用;
 */


//2:例子
// const promise = new Promise(function(resolve,reject){
//     console.log("promise");
//     setTimeout(resolve, 10, 'resolve done');
// });

// promise.then(function(post){
//     console.log("then 1");
//     console.log(post);
//     return post;
// }).then(
//     function(post){
//         console.log("then 2");
//         console.log(post);
//     }
// )
// console.log("代码 end");

//3:例子
// const promise = new Promise(function(resolve,reject){
//     console.log("promise");
//     setTimeout(resolve, 10, 'resolve done');
// });

// promise.then(function(post){
//     console.log("then 1");
//     console.log(post);
//     return new Promise(function(resolve,reject){
//         console.log("promise 2");
//         setTimeout(resolve, 1000, 'resolve done 2');
//     });
// }).then(
//     function(post){
//         console.log("then 2");
//         console.log(post);
//     }
// )
// console.log("代码 end");


/////////////////////////////////////////
////////catch

/**
 * Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数;!!!!
 * 
 * 异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。
 * 另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获;
 * 
 * 
 * 1:如果 Promise 状态已经变成resolved，再抛出错误是无效的
 * 
 * 
 * 2:Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获;
 * 
 * 2:一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法
 */



 //1&2:例子;
const promise = new Promise(function(resolve,reject){

    //resolve("success");//---------------1:例子


    //throw new Error("error");
    // reject(new Error('test'));
    try {
        throw new Error('test');
      } catch(e) {
        reject("test2");
      }
});

// // bad
promise.then(function (data) {
       console.log(data);
    }, function (err) {
        // error
       console.log(err.toString());
    });


// good
promise.then(function (data) { //cb
       console.log(data);
       // success
    }).catch(function (err) {
       console.log(err + "");
       // error
    });