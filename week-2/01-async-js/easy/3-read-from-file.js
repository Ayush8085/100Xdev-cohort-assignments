const fs = require('fs');

const path = '/media/ayush/New Volume/My Programs/Cohort 100xDev/assignments/week-2/01-async-js/easy/test.txt'

fs.readFile(path, 'utf-8', (err, data)=> {
    console.log(data);
})

let count = 0;
for (let index = 0; index < 1000000; index++) {
    console.log(count);
    count++;
}

