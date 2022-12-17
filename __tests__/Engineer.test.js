const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Mike', '1234', 'mike@company.com');
    
    expect(engineer.name).toBe('Mike');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('mike@company.com');
});

test("assign engineer the 'engineer' role", () => {
    const engineer = new Engineer('Mike', '1234', 'mike@company.com');
    engineer.getRole();

    expect(engineer.role).toBe('Engineer');
});

test("add engineer's github to object", () => {
    const engineer = new Engineer('Mike', '1234', 'mike@company.com');

    
    engineer.getGitHub('mikegithub');

    expect(engineer.github).toBe('mikegithub');
})