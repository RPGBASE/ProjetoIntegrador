const gerenciarController = {
    index: (request, response) => {
        return response.redirect('gerenciar');
    }
    ,
    index: (request, response) => {
        return response. render('gerenciar');
    }

}

module.exports = gerenciarController;