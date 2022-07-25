const cadastroController = {
    index: (request, response) => {
        return response.redirect('index');
    }
    ,
    home: (request, response) => {
        return response. render('index');
    }

}

module.exports = cadastroController;