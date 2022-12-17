const Manager = require('../lib/Manager');


test('creates an intern object', () => {
    const manager = new Manager('Elle', '1234', 'elle@company.com');

    expect(manager.name).toBe('Elle');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('elle@company.com');
});

test("assign manager the 'manager' role", () => {
    const manager = new Manager('Elle', '1234', 'elle@company.com');
    manager.getRole();

    expect(manager.role).toBe('Manager');
});

