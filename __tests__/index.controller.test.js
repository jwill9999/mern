const controller = require('../controllers/index.controller').index;


describe('Index Controller', () => {

    test('should call res.sendFile() with HTML document', () => {

        const sendFile = jest.fn();
        const res = {
            sendFile,
        };
        controller({}, res);
        expect(sendFile.mock.calls).toHaveLength(1);

        const path = "../client/public/index.html";
        expect(sendFile.mock.calls[0][0]).toBe(path);

    });

})
