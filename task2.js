// write data to file , appending data file and then and reading the file using callback 
fs = require("fs")
fs.writeFile('test1.txt', 'Hii!', function (err) {
    if (err) { console.log("error " + err); }
    else {
        fs.appendFile('test1.txt', '\nabc', function (err) {
            if (err) { console.log("error " + err); }
            else {
                fs.readFile('test1.txt', "utf-8", (Err, data) => {
                    if (Err) console.log("Error : " + Err)
                    console.log(data);
                });
            }
        });
    }
});
