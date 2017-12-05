var express = require('express');
var router = express.Router();
var dao = require('../dao/dao');

router.get('/', (req, res, next) => {
    dao.queryTask(req.query)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id', (req, res, next) => {
    dao.getTask(req.params.id)
        .then((data) => {
            if(data) {
                res.json(data);
            } else {
                res.sendStatus(404).end();
            }
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/', (req, res, next) => {
    dao.insertTask(req.body)
        .then((data) => {
            if(data) {
                res.json(data);
            } else {
                res.sendStatus(404).end();
            }
        })
        .catch((err) => {
            next(err);
        });
});

router.put('/:id', (req, res, next) => {
    dao.updateTask(req.params.id, req.body)
        .then((data) => {
            if(data) {
                res.json(data);
            } else {
                res.sendStatus(404).end();
            }
        })
        .catch((err) => {
            next(err);
        });
});

router.delete('/:id', (req, res, next) => {
    dao.deleteTask(req.params.id)
        .then((data) => {
            if(data) {
                res.sendStatus(200).end();
            } else {
                res.sendStatus(404).end();
            }
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;
