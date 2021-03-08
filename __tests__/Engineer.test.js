const Engineer = require("../lib/Engineer");
test("Making sure the employee is an object", () => {
    const worker = new Engineer("Chris", 2, "sjbjsdj@email.com")

    expect(typeof(worker)).toBe("object");
})

