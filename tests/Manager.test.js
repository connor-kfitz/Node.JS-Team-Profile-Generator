const Manager = require('../lib/managerClass');

describe('Manager', () => {
    describe('getName', () => {
        it('Should return the name of the manager', () => {
            const expected = 'Connor'

            const testEmployee = new Manager('Connor', 111111, 'connorkfitzsimmons@gmail.com', 123);
            const result = testEmployee.getName();

            expect(result).toBe(expected);
        });
    });
    describe('getID', () => {
        it('Should return the ID of the manager', () => {
            const expected = 111111

            const testEmployee = new Manager('Connor', 111111, 'connorkfitzsimmons@gmail.com', 123);
            const result = testEmployee.getID();

            expect(result).toBe(expected);
        });
    });
    describe('getEmail', () => {
        it('Should return the email of the manager', () => {
            const expected = 'connorkfitzsimmons@gmail.com'

            const testEmployee = new Manager('Connor', 111111, 'connorkfitzsimmons@gmail.com', 123);
            const result = testEmployee.getEmail();

            expect(result).toBe(expected);
        });
    });
    describe('getOfficeNumber', () => {
        it('Should return the role of the manager', () => {
            const expected = 123
            const testEmployee = new Manager('Connor', 111111, 'connorkfitzsimmons@gmail.com', 123);
            const result = testEmployee.getOfficeNumber();

            expect(result).toBe(expected);
        });
    });
    describe('getRole', () => {
        it('Should return the role of the manager', () => {
            const expected = 'Manager'
            const testEmployee = new Manager('Connor', 111111, 'connorkfitzsimmons@gmail.com', 123);
            const result = testEmployee.getRole();

            expect(result).toBe(expected);
        });
    });
});