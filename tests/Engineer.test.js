const Engineer = require('../lib/engineerClass');

describe('Engineer', () => {
    describe('getName', () => {
        it('Should return the name of the engineer', () => {
            const expected = 'Connor'

            const testEmployee = new Engineer('Connor', 111111, 'connorkfitzsimmons@gmail.com', 'github.com/connorkfitz/');
            const result = testEmployee.getName();

            expect(result).toBe(expected);
        });
    });
    describe('getID', () => {
        it('Should return the ID of the engineer', () => {
            const expected = 111111

            const testEmployee = new Engineer('Connor', 111111, 'connorkfitzsimmons@gmail.com', 'github.com/connorkfitz/');
            const result = testEmployee.getID();

            expect(result).toBe(expected);
        });
    });
    describe('getEmail', () => {
        it('Should return the email of the engineer', () => {
            const expected = 'connorkfitzsimmons@gmail.com'

            const testEmployee = new Engineer('Connor', 111111, 'connorkfitzsimmons@gmail.com', 'github.com/connorkfitz/');
            const result = testEmployee.getEmail();

            expect(result).toBe(expected);
        });
    });
    describe('getOfficeNumber', () => {
        it('Should return the github of the engineer', () => {
            const expected = 'github.com/connorkfitz/'
            const testEmployee = new Engineer('Connor', 111111, 'connorkfitzsimmons@gmail.com', 'github.com/connorkfitz/');
            const result = testEmployee.getGithub();

            expect(result).toBe(expected);
        });
    });
    describe('getRole', () => {
        it('Should return the role of the engineer', () => {
            const expected = 'Engineer'
            const testEmployee = new Engineer('Connor', 111111, 'connorkfitzsimmons@gmail.com', 'github.com/connorkfitz/');
            const result = testEmployee.getRole();

            expect(result).toBe(expected);
        });
    });
});