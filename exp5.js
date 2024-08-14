const express = require('express');
const path = require('path');;
const app = express();
const port = 2200;
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','exp5.html'));
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'views', 'exp5b.html'));
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
});
