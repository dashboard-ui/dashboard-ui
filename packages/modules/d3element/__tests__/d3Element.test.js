/**
 * @jest-environment jsdom
 */

import { D3Element } from '../src/d3element';

describe('D3Element', () => {
    test('D3Element exists', () => {
        expect(D3Element).toBeDefined();
    });

    test('D3 Properties', () => {
        const nodeElement = document.createElement('div');
        const d3Element = new D3Element(nodeElement);
        const actualMargins = {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
        };

        expect(d3Element.id).toEqual(expect.stringContaining('__dashboardUI__'));
        expect(d3Element.node).toEqual(undefined);
        expect(d3Element.height).toEqual(expect.any(Number));
        expect(d3Element.width).toEqual(expect.any(Number));
        expect(d3Element.margins).toMatchObject(actualMargins);
        expect(d3Element.d3Node).toBeTruthy();
        });
});
