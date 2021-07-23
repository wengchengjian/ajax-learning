const express = require('express');

const app = express();

app.get('/home',(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});

app.get('/data',(request,response)=>{
    response.send('用户数据');
})

app.all('/jquery-jsonp-server',(request,response)=>{
    const data = {
        name:'wcj',
        city:['北京','上海','深圳']

    }
    let str = JSON.stringify(data);

    let cb = request.query.callback;

    response.end(`${cb}(${str})`);
})
app.listen(8000,()=>{
    console.log("服务已经启动！");
});