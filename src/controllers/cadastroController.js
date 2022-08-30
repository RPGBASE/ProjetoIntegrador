const cadastroController = {
    show: (request, response) => {
        return response.redirect('show');
    }
    ,
    home: (request, response) => {
        return response. render('index');
    }

}

module.exports = cadastroController;