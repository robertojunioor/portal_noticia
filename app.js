//Fazendo o require da configuração do nosso servidor
var app = require('./config/server');

//Servidor "ouvindo" a porta 3000
app.listen(3000, function(){
    console.log('Servidor ON');
});
