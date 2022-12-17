const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Lisa', '1234', 'lisa@company.com');

    expect(employee.name).toBe('Lisa');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('lisa@company.com')     
});

test("makes employee role 'employee'", () => {
    const employee = new Employee('Lisa', '1234', 'lisa@company.com');
    employee.getRole();

    expect(employee.role).toBe('Employee')
})