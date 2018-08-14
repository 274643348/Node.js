/**
 * node文件组成:
 * 每个node.js文件都是一个模块;
 * 每个函数内部都是一个匿名自调函数;
 * 函数中有五个参数exports, require, module, __filename, __dirname
 * */


/**
 * 1:node在执行模块中代码时,它会首先在代码的头部添加function (exports, require, module, __filename, __dirname) {
 * 2:在代码的底部添加};
 * 3:所以模块中的代码都包装在一个函数中执行的,并且在函数执行的同时传递五个参数;
 */

// exports:该对象用来将函数局部变量或局部函数暴露到外部;
// require:用来引入外部模块;
// module:当前模块(module.exports和exports是一回事,exports也是当前模块的一部分)
// __filename:文件绝对路径;
// __dirname:文件所在目录的绝对路径;


// console.log(module);
// console.log(module.exports);
// console.log(exports);
// console.log(exports === module.exports); //true

// exports.str= "哈哈哈哈";
// module.exports.str = "aaaaaa";


console.log(__filename);
console.log(__dirname);

