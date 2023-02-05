import * as fs from 'fs';

console.log("File Operation Initiated....");

var data_insert="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in, eaque cumque magni optio voluptatem nisi beatae veritatis similique? Optio inventore repellendus quis excepturi dolore ex dignissimos quos sed quo harum eum, consectetur aliquid nam provident itaque quisquam soluta dolorem vitae similique suscipit nihil accusantium? Quas mollitia vitae ab eum!";

// fs.writeFile("dataWrite.txt", data_insert, ()=>{
// console.log("File Data Insertion Succeed....");
// })

fs.writeFileSync("dataWriteSync.txt", data_insert);
console.log("File Data Insertion Succeed....");

console.log("File Operation Terminated....");