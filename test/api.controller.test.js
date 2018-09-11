var expect = require('chai').expect;
var sinon = require('sinon');
const Item = require('../model');
var controller = require('../controllers/api.controller');


describe('API', () => {
    describe('Index Route', () => {

        it('Should call "index" function ', () => {
            let indexspy = sinon.spy(controller, 'index');

            controller.index()

            sinon.assert.calledOnce(indexspy);;
        });

        it('Should call "Database getAllUsers" ', () => {

            let ItemSpy = sinon.spy(Item, 'getAllUsers');

            controller.index()

            sinon.assert.calledOnce(ItemSpy);
        });

        it('Should return all users');

        it('Should throw an "error" if database failure');
    })

    describe('Post Route', () => {

        it('Should call "POST" function');
        it('Should call Database addUser');        
        it('Should return saved user');        
        it('Should throw an "ERROR" if no name provided');
    })
})

describe('Non API Routes', () => {
    describe('Index Route', () => {

        it('Should return "HTML" document');

    })

    describe('Unknown routes', () => {
        it('Should return "HTML" document');
    })


})
