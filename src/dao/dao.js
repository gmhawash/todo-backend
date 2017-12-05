'use strict';
const fs = require('fs');
const path = require('path');

const SQL_INIT_FILENAME = 'task.sql';
const TABLE = 'task';
const COLUMNS = ['priority', 'status', 'category', 'title', 'description'];

var knex;

function loadInitSql() {
    var filename = path.resolve(__dirname, SQL_INIT_FILENAME);
    if(! fs.existsSync(filename)) {
        throw new Error('Missing SQL file');
    }
    return fs.readFileSync(filename, 'utf8');
}

function initialize(conf) {
    if(knex) {
        return Promise.reject(new Error('Already Initialized'));
    }
    return new Promise((resolve, reject) => {
        try {
            if(!conf || !conf.filename) {
                throw new Error('Missing conf filename');
            }
            var sql = loadInitSql();
            knex = require('knex')({
                client: 'sqlite3',
                connection: {
                  filename: conf.filename
                },
                useNullAsDefault: true
            });
            knex.raw(sql)
                .then(() => {
                    resolve(true);
                })
                .catch((err) => {
                    reject(err);
                });
        } catch(err) {
            reject(err);
        }
    });
}

function filter(task, properties) {
    if(! task) {
        return {};
    }
    var data = {};
    properties.forEach((name) => {
        if (typeof task[name] !== 'undefined') {
            data[name] = task[name];
        }
    });
    return data;
}

function getTask(id) {
    return new Promise((resolve, reject) => {
        knex(TABLE).where('id', id)
        .then((data) => {
            if(data.length == 0) {
                resolve(null);
            } else {
                resolve(data[0]);
            }
        })
        .catch((err) => {
            reject(err);
        });
    });
}

function insertTask(task) {
    const data = filter(task, COLUMNS);
    const now = Date.now();
    data.created = now;
    data.lastUpdated = now;

    return knex(TABLE).insert(data)
        .then((results) => {
            return getTask(results[0]);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
}

function updateTask(id, task) {
    return Promise.reject("Not Implemented");
}

function deleteTask(id) {
    return Promise.reject("Not Implemented");
}

function queryTask(criteria) {
    return Promise.reject("Not Implemented");
}

module.exports = {
    initialize: initialize,
    getTask: getTask,
    insertTask: insertTask,
    updateTask: updateTask,
    deleteTask: deleteTask,
    queryTask: queryTask
};