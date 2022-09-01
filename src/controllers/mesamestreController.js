const mesaMestreController = {
    index: (request, response) => {
        return response.redirect('dadosmesamestre');
    }
    ,
    index: (request, response) => {
        return response. render('dadosmesamestre');
    }

}

module.exports = mesaMestreController;