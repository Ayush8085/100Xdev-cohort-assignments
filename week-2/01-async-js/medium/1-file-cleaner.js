const fs = require('fs');

const filePath = '/media/ayush/New Volume/My Programs/Cohort 100xDev/assignments/week-2/01-async-js/medium/test.txt';

fs.readFile(filePath, 'utf-8', (err, data) => {
    console.log("BEFORE: ", data);
    const content = data.replace(/\s+/g, ' ').trim();
    console.log("CONTENT: ", content);
    fs.writeFile(filePath, content, 'utf-8', (err) => {
        console.log("Successfully written!!");
    });
});