const cadastroController = {
    create: (request, response) => {
        return response.redirect('create');
    }
    ,
    home: (request, response) => {
        return response. render('index');
    }
    ,
    salva: (request, response) => {
        console.log('executando cadastro...')
    }
}

module.exports = cadastroController;