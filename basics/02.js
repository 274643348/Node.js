
/*export和require怎么来的?
全局变量----错误;
1:window不是node中的全局便比昂;
2:node中的全局变量是global,和window类似;

函数参数----正确;
1:argument函数的标示;获取函数所有参数;
2:argument.callee获取函数自身;返回函数本身;(通过log可以数出来)*/

// console.log(global);
// console.log(global.exports); //undefined
// console.log(global.require);//undefined
// console.log(arguments);

// console.log(arguments.callee);//Function
console.log(arguments.callee +"");

// function (exports, require, module, __filename, __dirname) { // console.log(global);
//     // console.log(global.exports); //undefined
//     // console.log(global.require);//undefined
//     // console.log(arguments);
    
//     // console.log(arguments.callee);//Function
//     console.log(arguments.callee +"");
//     }