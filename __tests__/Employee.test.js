const Employee = require("../lib/Employee");
test("Making sure the employee is an object", () => {
    const worker = new Employee("Chris", 2, "sjbjsdj@email.com")

    expect(typeof(worker)).toBe("object");
})

test("getting name", () => {
    const name = new Employee("Peter", 4, "blah@email.com")

    expect(name.getName()).toBe("Peter");
})

