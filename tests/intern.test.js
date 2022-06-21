const Intern = require('../lib/intern');

test('Can set school', () => {
    const test = 'UNCC';
    const e = new Intern('Trex', 1, 'Fred@me.com', test);
    expect(e.school).toBe(test);
});

test('getRole() should return \Intern\'', () => {
    const test = 'Intern';
    const e = new Intern('Trex', 1, 'Fred@me.com', 'UNCC');
    expect(e.getRole()).toBe(test);
});

test('get school via getSchool()', () => {
    const test = 'UNCC';
    const e = new Intern('Trex', 1, 'Fred@me.com', test);
    expect(e.getSchool()).toBe(test);
});