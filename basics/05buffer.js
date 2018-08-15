/**
 * 在node和es6出现钱,前段工程是只需要进行一些简
 * 单的字符串或DOM操作就可以满足业务需求,所以对二
 * 进制比较陌生;
 * 
 * 但node出现后,前端工程师的技术场景发生了变化,
 * 可以深入网络传输,文件操作,图片处理等领域,而这
 * 些操作与二进制金币相关;
 * 
 * Node中的buffer,是一个二进制数据容器,数据结构
 * 类似于数组,专门用于node中数据的存放;
 */

 /**
  * 00-ff
  * 0-255
  * 00000000-11111111
  * 0或1代表1位(bit)
  * 8bit = 1B;
  * 1KB = 1024B;
  * 1MB = 1024KB;
  * 1GB = 1024MB;
  * 1TB = 1024GB;
  */

// let buf = new Buffer(10);//已经舍弃
// console.log(buf);//<Buffer 00 00 00 00 00 00 00 00 00 00>



// let buf = Buffer.from("asdf");
// console.log(buf);
// console.log(buf.toString());

// let str = "呵呵"
// let buf = Buffer.from(str);
// console.log(str.length);//2---中文咋用3个字节;
// console.log(buf.length);//6

let buf = Buffer.alloc(10);
buf[0] = 10;
buf[1] = 12;
buf[2] = 0xfc;//16进制前缀0x
buf[10] = 12;//溢出不会报错;
console.log(buf);
buf.forEach((item,index) => {
    console.log( index+ ":" + item);
    
});
