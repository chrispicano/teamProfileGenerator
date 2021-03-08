//linking employee page 
const Employee = require("./Employee");
//class extending from Employee
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getRole() {
        return "Manager";
    };
}
module.exports = Manager;