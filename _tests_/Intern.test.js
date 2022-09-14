const Intern = require('../public/scripts/Intern');
const employee = new Intern("Alex","1234","alexmore050@gmail.com", "school")

test("This should return the values of the Employee Constructor", () => {
    expect(employee.name).toEqual("Alex");
    expect(employee.id).toEqual("1234");
    expect(employee.email).toEqual("alexmore050@gmail.com");
})

test("Getting name from getName() Method", () => {
    expect(employee.getName()).toEqual('Alex');
})

test("Getting ID from getID() method", () => {
    expect(employee.getID()).toEqual("1234");
})

test("Getting email from getEmail() method", () => {
    expect(employee.getEmail()).toEqual("alexmore050@gmail.com");
})

test("Getting Role from getRole() method", () => {
    expect(employee.getRole()).toEqual("Intern");
})

test("Getting Role from getSchool() method", () => {
    expect(employee.getSchool()).toEqual("school");
})
