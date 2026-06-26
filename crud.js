const fs = require('fs');
    //crete a file
fs.writeFileSync("files/apple.txt","this is a fruit");

fs.writeFileSync("files/banana.txt","this is a fruit");

    //delete a file
    fs.unlinkSync("files/banana.txt");

    //read data from a file
    const data = fs.readFileSync("files/apple.txt","utf-8");
    console.log(data);

    // updata data from file
    fs.appendFileSync("files/apple.txt"," this is good for health");
    