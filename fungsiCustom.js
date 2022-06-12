// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const bacaData = (fnCallBack)  => {
  const fs = require('fs');
  let arrayData= [];
  fs.readFile(file1,"utf8",(err, data)=>{
    modifyFile1(JSON.parse(data));
    file1 = file1.message.split(' ').slice(1);
    arrayData.push(file1);
  })
  fs.readFile(file2,"utf8",(err, data)=>{
    modifyFile2(JSON.parse(data));
    file2 = file2[0].message.split(' ').slice(1);
    arrayData.push(file2);
  })
  fs.readFile(file3,"utf8",(err, data)=>{
    modifyFile3(JSON.parse(data));
    file3 = file3[0].data.message.split(' ').slice(1);
    arrayData.push(file3);
    setTimeout(()=> fnCallBack(null,arrayData,10));
    
  })
   
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
