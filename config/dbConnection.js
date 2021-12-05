//Importando o require do mysql
var mysql = require('mysql');

var connMySQL = function(){
    //Criando a conexão com o banco de dados
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    return connMySQL;
};
