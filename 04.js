/**
 * exports和module.exports的区别:
 * exports只能通过.语法来向外暴露内部变量;exprots.xxx = xxx;
 * module.exports既可以通过.语法,也可以通过赋值对象 module.exports = {xxx:xxx}
 */


// exports.str = "aaaa";
// exports.fuc = function a(){
//     console.log("hhhhh");
// }

// exports = {
//     str:"aaa",
//     fuc:function a(){
//         console.log("hhhhh");
//     }
// }

module.exports = {
    str:"aaa",
    fuc:function a(){
        console.log("hhhhh");
    }
}