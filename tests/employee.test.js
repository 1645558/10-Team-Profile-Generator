const Employee = require('../lib/employee')

describe('Employee', () => {

    it('Can create an emploee object', () => {
        const e = new Employee();
        expect(typeof (e)).toBe('object');
    });

    it('Can set a name', () => {
        const name = 'Fred'
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it('can set an id', () => {
        const test = 12;
        const e = new Employee('Trex', test);
        expect(e.id).toBe(test);
    });

    it('Can set an email', () => {
        const test = 'Fred@me.com';
        const e = new Employee('Trex', 1, test);
        expect(e.email).toBe(test);
    });

    describe('getName', () => {
        it('Gets name via getName()', () => {
            const test = 'Fred';
            const e = new Employee(test);
            expect(e.getName()).toBe(test);
        });
    });

    describe('getId', () => {
        it('Gets id via getId()', () => {
            const test = 12;
            const e = new Employee('Trex', test);
            expect(e.getId()).toBe(test);
        });
    });

    describe('getEmail', () => {
        it('Gets email via getEmail()', () => {
            const test = 'Fred@me.com';
            const e = new Employee('Trex', 1, test);
            expect(e.getEmail()).toBe(test);
        });
    });

    describe('getRole', () => {
        it('Gets role via getRole()', () => {
            const test = 'Employee';
            const e = new Employee('Fred', 1, 'Fred@me.com');
            expect(e.getRole()).toBe(test);
        });
    });
});