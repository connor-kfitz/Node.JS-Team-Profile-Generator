const Employee = require('./employeeClass');

class Manager extends Employee {
    constructor(employeeName, employeeID, employeeEmail, officeNumber){
      super(employeeName, employeeID, employeeEmail);
      this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
      return this.officeNumber;
    }
    getRole(){
      return 'Manager';
    }
  }

  module.exports = Manager;