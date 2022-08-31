const loginController = {
    index: (request, response) => {
        return response.redirect('cadastro');
    }
    ,
    cadastro: (request, response) => {
        return response. render('cadastro');
    }

}

module.exports = loginController;