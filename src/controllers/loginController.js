const loginController = {
    index: (request, response) => {
        return response.redirect('cadastro');
    }
    ,
    home: (request, response) => {
        return response. render('cadastro');
    }

}

module.exports = loginController;