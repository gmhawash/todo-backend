'require strict';

const fs = require('fs');
const os = require('os');
const path = require('path');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const DB_NAME = "test.db";
const DB_FILE = path.resolve(os.tmpdir(), DB_NAME);
const CONF = {
    filename: DB_FILE
};

const DAO_PACKAGE = '../src/dao/dao.js';
var dao = null;

function cleanup() {
    if(fs.existsSync(DB_FILE)) {
        fs.unlinkSync(DB_FILE);
    }
    delete require.cache[require.resolve(DAO_PACKAGE)];
}
cleanup();

function makeSuite(name, tests) {
    describe(name, function () {
        before(function () {
            dao = require(DAO_PACKAGE);
        });
        tests();
        after(function () {
            cleanup();
        });
    });
}

describe('sanity check', function() {
    it('should be 1', function() {
        var one = '1';
        expect(one).to.be.a('string');
        expect(one).to.equal('1');
    });
    it('resolves as promised', function() {
        return expect(Promise.resolve('abc')).to.eventually.equal('abc');
    });
    
    it('rejects as promised', function() {
        return expect(Promise.reject('xyz')).to.be.rejectedWith('xyz');
    });
});


makeSuite('DAO Initialization tests', function() {
    it('reject if no conf', function() {
        return expect(dao.initialize(null)).to.be.rejectedWith(Error);
    });
    it('reject if no filename', function() {
        return expect(dao.initialize({})).to.be.rejectedWith(Error);
    });
    it('should initialize', function() {
        return expect(dao.initialize(CONF)).to.eventually.equal(true);
    });
    it('db file should exist', function() {
        expect(fs.existsSync(DB_FILE)).to.be.true;
    })
    it('reject when re-initializing', function() {
        return expect(dao.initialize(CONF)).to.be.rejectedWith(Error);
    });
});

makeSuite('DAO insert', function() {
    before(function() {
        return dao.initialize(CONF);
    });
    var task = {
        priority: "Medium",
        status: "New",
        category: "Home",
        title: "some title",
        description: "some description" };
        
    it('should return task when inserted', function() {
        return expect(dao.insertTask(task)).to.eventually.include(task)
            .to.include.all.keys('id', 'created', 'lastUpdated');
    });
});

makeSuite('DAO Update', function() {
    it("should be implemented", function()
    {
        expect.fail();
    });
});

makeSuite('DAO Delete', function() {
    it("should be implemented", function()
    {
        expect.fail();
    });
});

makeSuite('DAO Query', function() {
    it("should be implemented", function()
    {
        expect.fail();
    });
});

