exports.addNewColumn = (req, res) => {
    res.send('creating new columns');
}

exports.getAllColumns = (req, res) => {
    res.send("sending all columns");
}

exports.updateById = (req, res) => {
    res.send("updating column by id:" + req.params.id);
}

exports.deleteById = (req, res) => {
    res.send("deleting column by id:" + req.params.id);
}