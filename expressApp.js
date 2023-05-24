 const http=require('http');

 const Express=require('express');
 const app=Express();
 app.use((req,res,next)=>{
     console.log("middle1");
     next();

 });
 app.use((req,res,next)=>{
    console.log("middle2");
    //...

 });


    

  const server=http.createServer(app);
  server.listen(3000);