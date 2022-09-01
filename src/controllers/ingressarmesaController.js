const ingressarMesaController = {
    index: (request, response) => {
        return response.redirect('ingressarmesa');
    }
    ,
    index: (request, response) => {
        return response. render('ingressarmesa');
    }

}

module.exports = ingressarMesaController;