const criacaoMesaController = {
    index: (request, response) => {
        return response.redirect('criacaomesa');
    }
    ,
    index: (request, response) => {
        return response. render('criacaomesa');
    }

}

module.exports = criacaoMesaController;