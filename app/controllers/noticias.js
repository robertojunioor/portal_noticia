module.exports.noticias = function(application, req, res){
     //Executando o module dbConnection();
     var connection    = application.config.dbConnection();
     var noticiasModel = new application.app.models.NoticiasDAO(connection);

     noticiasModel.getNoticias(function(error, result){
         //Retornando o resultado da consulta
         res.render('noticias/noticias', {noticias: result});
     });
};

module.exports.noticia = function(application, req, res){
    //Executando o module dbConnection();
    var connection   = application.config.dbConnection();
    var noticiaModel = new application.app.models.NoticiasDAO(connection);
    
    //Recuperando parametro passado pela URL
    var id_noticia   = req.query;
    
    noticiaModel.getNoticia(id_noticia, function(error, result){
        //Retornando o resultado da consulta
        res.render('noticias/noticia', {noticia: result});
    });      
};