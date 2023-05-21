const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    
    const url=req.url;
    const Method=req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>node js response</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"name="myMessage"><button type="submit">Send</button></form></body>');

        res.write('</html>');
        return res.end();
    } if(url === '/message' && Method === 'POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
           const parsebody= Buffer.concat(body).toString();
           console.log(parsebody);
           const message=parsebody.split('=')[1];
           fs.writeFileSync('myFile.txt',message);
        })
        
        res.statusCode=302;
        res.setHeader('Loacation','/');
        return res.end();

    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>node js</title></head>');
    res.write('<body><h1> my node js heading</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(2000);