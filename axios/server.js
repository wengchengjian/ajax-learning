const express = require('express');

const app = express();

app.get('/server', (request, response) => {
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        name: 'wcj'
    };
    let str = JSON.stringify(data);
    console.log(str);
    response.send(str);
});

app.get('/ie', (request, response) => {
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        name: 'wcjs'
    };
    let str = JSON.stringify(data);
    console.log(str);
    setTimeout(function () {
        response.send(str);
    }, 3000);

});

app.all('/jqueryServer',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {
        name : "wcj"
    }
    response.send(JSON.stringify(data));
});
app.all('/axios-server', (request, response) => {
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'wcj'
    };
    let str = JSON.stringify(data);

    response.send(str);
});



app.all('/server', (request, response) => {
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'wcj'
    };
    let str = JSON.stringify(data);
    console.log(str);
    response.send(str);
});

app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中。。。');
});