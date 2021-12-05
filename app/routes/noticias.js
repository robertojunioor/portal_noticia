module.exports = function(application){ 
    //Criando uma rota /noticias
    application.get('/noticias', function(req, res){
        application.app.controllers.noticias.noticias(application, req, res);       
    });

    //Criando uma rota /noticias
    application.get('/noticia', function(req, res){
        application.app.controllers.noticias.noticia(application, req, res);
    });
};


