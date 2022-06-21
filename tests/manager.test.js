const Manager = require('../lib/manager');

test('Can get office number', () => {
    const test = 12;
    const e = new Manager('Trex', 1, 'Fred@me.com', test);
    expect(e.office).toBe(test);
});

test('getRole should return \'Manager\'', () => {
    const test = 'Manager';
    const e = new Manager('Trex', 1, 'Fred@me.com', 12);
    expect(e.getRole()).toBe(test);
});
