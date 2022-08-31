const mesaJogadorController = {
    index: (request, response) => {
        return response.redirect('dadosmesajogador');
    }
    ,
    index: (request, response) => {
        return response. render('dadosmesajogador');
    }

}

module.exports = mesaJogadorController;