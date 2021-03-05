//linking employee page 
const Employee = require("./Employee");
//class extending from Employee
class Engineer extends Employee {
    
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = this.github;
    }

    getGithub() {
        return this.github;
    };

    getRole() {
        return "Engineer";
    };
}
module.exports = Engineer;