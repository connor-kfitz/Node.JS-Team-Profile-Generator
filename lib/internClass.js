const Employee = require('./employeeClass');

class Intern extends Employee {
    constructor(employeeName, employeeID, employeeEmail, school){
      super(employeeName, employeeID, employeeEmail);
      this.school = school;
    }
    getSchool(){
      return this.school
    }
    getRole(){
      return 'Intern';
    }
  }

  module.exports = Intern