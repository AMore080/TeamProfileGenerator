const Engineer = require('../public/scripts/Engineer');
const engineer = new Engineer("Alex","1234","alexmore050@gmail.com",'Engineer')

test("This should return the values of the Employee Constructor", () => {
    expect(engineer.name).toEqual("Alex");
    expect(engineer.id).toEqual("1234");
    expect(engineer.email).toEqual("alexmore050@gmail.com");
})

test("Getting name from getName() Method", () => {
    expect(engineer.getName()).toEqual('Alex');
})

test("Getting ID from getID() method", () => {
    expect(engineer.getID()).toEqual("1234");
})

test("Getting email from getEmail() method", () => {
    expect(engineer.getEmail()).toEqual("alexmore050@gmail.com");
})

test("Getting Role from getRole() method", () => {
    expect(engineer.getRole()).toEqual("Engineer");
})
