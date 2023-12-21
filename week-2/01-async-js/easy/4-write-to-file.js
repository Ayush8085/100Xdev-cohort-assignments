const fs = require('fs');

const path = '/media/ayush/New Volume/My Programs/Cohort 100xDev/assignments/week-2/01-async-js/easy/test.txt'


fs.writeFile(path, 'this is new content', 'utf-8', (err) => {
    console.log("Successfully written!!");
})