const chai = require("chai")
    expect = chai.expect;

const sinon = require("sinon")
     sinonTest = require("sinon-test")
     sandbox = sinon.createSandbox
    getAdPage = require("../controllers/appAdController.js")
    getAdEvent = require("../controllers/appEventController.js");



    describe("getAdPage", function(){
        afterEach(() => sandbox.reset())

        after(() => sandbox.restore())

        it("should send ad.html when sdk request for an Ad", function(){
            let params = {
                getAdPage: function(){}
            }
            const stub = sandbox.stub(params,"getAdPage").returns(true);

            let req = {
                params: params
            }

            let res = {
                send: function(){}
            }

            const mock = sandbox.mock(res);

            mock.expect("send").once().withExactArgs("ads");

            getAdPage.getAdPage(req,res);
            expect(stub.calledOnce).to.be.true;

        });




    });







