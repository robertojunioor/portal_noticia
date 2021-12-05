function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback){
    this._connection.query('SELECT id_noticia, titulo, autor, resumo, date_format(str_to_date(data_noticia, "%Y-%m-%d"), "%d/%m/%Y") AS data_noticia FROM noticias ORDER BY dt_inc DESC', callback);
};

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('SELECT id_noticia, titulo, autor, resumo, date_format(str_to_date(data_noticia, "%Y-%m-%d"), "%d/%m/%Y") AS data_noticia FROM noticias WHERE id_noticia = '+id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

NoticiasDAO.prototype.UltimasCincoNoticias = function(callback){
   this._connection.query('SELECT id_noticia, titulo, autor, resumo, date_format(str_to_date(data_noticia, "%Y-%m-%d"), "%d/%m/%Y") AS data_noticia FROM noticias ORDER BY dt_inc DESC LIMIT 5', callback);
}
module.exports = function(){

    return NoticiasDAO;
}