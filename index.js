var http = require('http');
//coletando código externo


//criando uma função de requirimento chute
http.createServer( function  (req,res)  {

    //escreve na cabeça o tipo de código que é texto em html
res.writeHead(200, {'content-type': 'text/html'});
res.write( "<h1>Nodemon</h1> + <br> + <h2>Produtividade</h2> teste agora 123") ;
res.end();
//é a porta sendo listada
}).listen(20000);