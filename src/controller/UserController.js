module.exports = {
    find(req, res){
        return res.send({name: 'User Name', age: 'User Age'})
    }
}