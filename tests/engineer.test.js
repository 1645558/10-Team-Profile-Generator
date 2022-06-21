const Engineer = require('../lib/engineer');

test('Can set github account', () => {
    const test = 'GitHubUser';
    const e = new Engineer('Trex', 1, 'Fred@me.com', test);
    expect(e.github).toBe(test);
});

test('getRole() should return \'Engineer\'', () => {
    const test = 'Engineer';
    const e = new Engineer('Trex', 1, 'Fred@me.com', 'GitHubUser');
    expect(e.getRole()).toBe(test);
});

test('Can get github username via getGithub()', () => {
    const test = 'GitHubUser';
    const e = new Engineer('Trex', 1, 'Fred@me.com', test);
    expect(e.getGithub()).toBe(test);
});