import { D3Element } from '../src/d3element';

describe('D3 Element', () => {
    test('Must pass node param', () => {
        expect(() => {
            const d3Element = new D3Element();
        }).toThrow('Must pass node param to create D3 element');
    });
});
