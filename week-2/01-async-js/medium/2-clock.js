

setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am_pm;
    if (h >= 12) {
        am_pm = 'PM';
        h -= 12;
    }
    else {
        am_pm = 'AM';
    }
    console.log(h + ':' + m + ':' + s + " " + am_pm);
}, 1000);
