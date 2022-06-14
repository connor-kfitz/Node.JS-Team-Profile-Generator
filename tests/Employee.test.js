const Employee = require('../lib/employeeClass');

describe('Employee', () => {
    describe('getName', () => {
        it('Should return the name of the employee', () => {
            const expected = 'Connor'

            const testEmployee = new Employee('Connor', 111111, 'connorkfitzsimmons@gmail.com');
            const result = testEmployee.getName();

            expect(result).toBe(expected);
        });
    });
    describe('getID', () => {
        it('Should return the ID of the employee', () => {
            const expected = 111111

            const testEmployee = new Employee('Connor', 111111, 'connorkfitzsimmons@gmail.com');
            const result = testEmployee.getID();

            expect(result).toBe(expected);
        });
    });
    describe('getEmail', () => {
        it('Should return the email of the employee', () => {
            const expected = 'connorkfitzsimmons@gmail.com'

            const testEmployee = new Employee('Connor', 111111, 'connorkfitzsimmons@gmail.com');
            const result = testEmployee.getEmail();

            expect(result).toBe(expected);
        });
    });
    describe('getRole', () => {
        it('Should return the role of the employee', () => {
            const expected = 'Employee'
            const testEmployee = new Employee('Connor', 111111, 'connorkfitzsimmons@gmail.com');
            const result = testEmployee.getRole();

            expect(result).toBe(expected);
        });
    });
});