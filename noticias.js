var http = require('http');

//Criando um servidor JS
var server = http.createServer(function(req, res){
    var categoria = req.url;

    //Retornando do servidor um HTML
    if (categoria == '/tecnologia')
        res.end("<html><body>Portal de tecnologia</body></html>"); 
    else if (categoria == '/moda')
        res.end("<html><body>Portal de moda</body></html>"); 
    else if (categoria == '/beleza')
        res.end("<html><body>Portal de beleza</body></html>"); 
    else
        res.end("<html><body>Portal de noticias</body></html>");    
});

//Servidor "ouvindo" a porta 3000
server.listen(3000);