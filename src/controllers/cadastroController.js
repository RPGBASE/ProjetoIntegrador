const cadastroController = {
    create: (request, response) => {
        return response.redirect('create');
    }
    ,
    home: (request, response) => {
        return response. render('index');
    }

}

module.exports = cadastroController;