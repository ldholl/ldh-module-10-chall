const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Jenny', '1234', 'jenny@company.com');

    expect(intern.name).toBe('Jenny');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('jenny@company.com');
});

test("assign intern the 'intern' role", () => {
    const intern = new Intern('Jenny', '1234', 'jenny@company.com');
    intern.getRole();

    expect(intern.role).toBe('Intern');
});

test("add intern's school to object", () => {
    const intern = new Intern('Jenny', '1234', 'jenny@company.com');
    intern.getSchool('Wake Forest');

    expect(intern.school).toBe('Wake Forest');
})