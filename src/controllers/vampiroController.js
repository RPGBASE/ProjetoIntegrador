const vampiroController = {
    index: (request, response) => {
        return response.redirect('vampiro');
    }
    ,
    index: (request, response) => {
        return response. render('vampiro');
    }

}

module.exports = vampiroController;