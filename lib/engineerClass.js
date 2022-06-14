const Employee = require('./employeeClass');

class Engineer extends Employee {
    constructor(employeeName, employeeID, employeeEmail, github){
      super(employeeName, employeeID, employeeEmail);
      this.github = github;
    }
    getGithub(){
      return this.github
    }
    getRole(){
      return 'Engineer';
    }
  }

  module.exports = Engineer;