module.exports = function(application){
    //Criando a rota home
    application.get('/', function(req,res){
        application.app.controllers.home.index(application, req, res);
    });
};

