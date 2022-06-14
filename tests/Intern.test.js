const Intern = require('../lib/internClass');

describe('Intern', () => {
    describe('getName', () => {
        it('Should return the name of the intern', () => {
            const expected = 'Connor'

            const testEmployee = new Intern('Connor', 111111, 'connorkfitzsimmons@gmail.com', 'UofToronto');
            const result = testEmployee.getName();

            expect(result).toBe(expected);
        });
    });
    describe('getID', () => {
        it('Should return the ID of the intern', () => {
            const expected = 111111

            const testEmployee = new Intern('Connor', 111111, 'connorkfitzsimmons@gmail.com', 'UofToronto');
            const result = testEmployee.getID();

            expect(result).toBe(expected);
        });
    });
    describe('getEmail', () => {
        it('Should return the email of the intern', () => {
            const expected = 'connorkfitzsimmons@gmail.com'

            const testEmployee = new Intern('Connor', 111111, 'connorkfitzsimmons@gmail.com', 'UofToronto');
            const result = testEmployee.getEmail();

            expect(result).toBe(expected);
        });
    });
    describe('getSchool', () => {
        it('Should return the school of the intern', () => {
            const expected = 'UofToronto'
            const testEmployee = new Intern('Connor', 111111, 'connorkfitzsimmons@gmail.com', 'UofToronto');
            const result = testEmployee.getSchool();

            expect(result).toBe(expected);
        });
    });
    describe('getRole', () => {
        it('Should return the role of the intern', () => {
            const expected = 'Intern'
            const testEmployee = new Intern('Connor', 111111, 'connorkfitzsimmons@gmail.com', 'UofToronto');
            const result = testEmployee.getRole();

            expect(result).toBe(expected);
        });
    });
});