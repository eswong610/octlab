const fs = require('fs');

let tips = ["work in teams", "get enough sleep", "be on time", "drink water", "drink juice", "eat apple", "eat pears", "eat carrots", "eat celery", "eat tomato", "drink coffee", "eat radishes", "eat lettuce", "eat chicken", "eat beef", "eat pork", "eat jelly", "eat yoghurt", "drink tea"];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

let today = new Date();
var day = days[ today.getDay() ];
var month = months[ today.getMonth() ];

let date = day + ", " + month + " " + today.getDate() + ", " + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


//create file
fs.writeFile('tips1.txt', 'Tips\n', (err)=>{
    if(err) throw err;
})

fs.writeFile('tips1.txt', tips.join("\n"), {flag:'a'}, (err)=>{
                 if(err) throw reject(); 
});
                       

//function writeTips(tips) {
//    let promises = [];
    // for (i=0; i< tips.length; i++) {
    //     promises.push(new Promise((resolve, reject) => {
    //         fs.writeFile('tips1.txt', tips[i] + "\n", {flag:'a'}, (err)=>{
    //             if(err) throw reject();       
    //             resolve()
    //         })}));
    //}
//     return promises
// }


//Promise.all(writeTips(tips)).then(() => {
    fs.writeFile('tips1.txt', "\n" + date, {flag:'a'}, (err)=>{
        if(err) throw err;
    });
//})





//fs.writeFileSync(path, data, {flag:'a'}); append to existing file 


const textFile = fs.readFile("tips1.txt", "utf8", (err, data)=>{
    if (err) throw (err);
    console.log(data);
});

