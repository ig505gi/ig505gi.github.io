"use strict";
setTimeout(function () {
    var ele = document.createElement('a');
    ele.href = 'https://www.baidu.com';
    ele.innerText = 'baidu';
    document.body.appendChild(ele);
}, 2000);
