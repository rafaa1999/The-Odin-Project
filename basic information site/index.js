const http = require('http');
const fs = require('fs');

// landing page
const landingPage = (req, res) =>{
  fs.readFile('index.html',function(err,data){
    if(err) throw err;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end;
  })
}

// about
const about = (req, res) =>{
  fs.readFile('about.html',function(err,data){
    if(err) throw err;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end;
  })
}

// contact-me
const contactMe = (req, res) =>{
  fs.readFile('contact-me.html',function(err,data){
    if(err) throw err;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end;
  })
}

// 404
const error = (req, res) =>{
  fs.readFile('404.html',function(err,data){
    if(err) throw err;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end;
  })
}

// run the app
http.createServer((req,res)=>{
  if(req.url==='/'){
      landingPage(req, res);
  }else if(req.url === '/about'){
    about(req,res)
  }else if(req.url === '/contact-me'){
    contactMe(req,res)
  }else{
    error(req,res)
  }
}).listen(8080);