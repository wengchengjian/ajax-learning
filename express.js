const express = require('express');

const app  = express();

app.get('/', (request, response) => {
    response.send('Hello,Express!');
});

app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中。。。');
});