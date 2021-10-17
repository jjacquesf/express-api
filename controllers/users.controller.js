const fetch = require('node-fetch');
const baseURL = 'https://jsonplaceholder.typicode.com/users';

const controller = { };

controller.getAll = (req, res) => {

    const url = baseURL;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.send(err);
        });
}

controller.getOne = function(req,res) {
    const userID = req.params.id || '';
    const url = `${baseURL}/${userID}`;

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        res.send({ data });
    })
    .catch((err) => {
        res.send(err);
    });
};

controller.create = function(req, res) {
    const url = baseURL;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.json(data[0]);
        })
        .catch((err) => {
            res.send(err);
        });
};

controller.updateOne = function(req, res) {
    res.json({ success: true });
};

controller.delete = function(req, res) {
    res.json({ success: true });
};


module.exports = controller;