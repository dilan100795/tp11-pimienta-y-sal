let menu = require('../data/menu.json')

module.exports = {
    home: (req, res) => res.render('index',{
        menu
    }),
    menu: (req, res) => res.render('detalleMenu'),
    detalle: (req, res) => {
        let id = +req.params.id
        let plato = menu.find(plato => plato.id == id) 
        
        return res.render('detalleMenu', {plato})
    } 
}