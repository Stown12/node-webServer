import http2 from 'http2'
import fs from 'fs'

const server = http2.createSecureServer({
  key: fs.readFileSync('.keys/server.key'),
  cert: fs.readFileSync('.keys/server.crt')
},(req, res) =>{
  

  if(req.url == '/'){
    const htmFile = fs.readFileSync('./public/index.html', 'utf-8');
    const cssFile = fs.readFileSync('./public/css/style.css', 'utf-8');
    const jsFile = fs.readFileSync('./public/js/app.js', 'utf-8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.writeHead(200), {'Content-Type': 'text/css'};
    res.writeHead(200), {'Content-Type': 'aplication/javascript'};
    res.end(htmFile + cssFile + jsFile);
  }else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>404 Page Not Found</h1>');
  }
});

server.listen(3000, () =>{
  console.log('Server is running on port 3000');
})