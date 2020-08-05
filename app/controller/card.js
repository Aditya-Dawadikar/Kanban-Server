exports.addNewCard = (req, res) => {
    res.send("creating new card");
}

exports.getAllCards = (req, res) => {
    res.send("sending all cards");
}

exports.updateById = (req, res) => {
    res.send("updating card by id:" + req.params.id);
}

exports.deleteById = (req, res) => {
    res.send("deleting card by id:" + req.params.id);
}