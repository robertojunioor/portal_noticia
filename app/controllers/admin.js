module.exports.formulario_inclusao_noticia = function (application, req, res){
    res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
};

module.exports.noticias_salvar = function (application, req, res){
    var noticia = req.body;

    //Validando se os campos obrigatórios
    req.assert('titulo', 'Título obrigatório').notEmpty();
    req.assert('resumo', 'Resumo obrigatório').notEmpty();
    req.assert('resumo', 'O resumo deve conter entre 10 e 100 caractéres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatória').notEmpty();
    req.assert('data_noticia', 'Formato da data inválido').notEmpty().isDate({Format: 'YYYY-MM-DD'});
    req.assert('noticia', 'Notícia é obrigatória').notEmpty();

    //validando se tem algum campo que não esteja na validação acima
    var erros = req.validationErrors();

    //Se tiver erro não salva a notícia
    if(erros){
        res.render('admin/form_add_noticia',{validacao : erros, noticia: noticia});
        return;
    }

    //Executando o module dbConnection();
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result){
        //Retornando o resultado da consulta
        res.redirect('/noticias');
    });
};