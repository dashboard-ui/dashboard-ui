import { select } from 'd3-selection';

/**
 * Create random hexadecimal number.
 * @param {number} size number of digits
 * @return {string} Randamo hexadecimal number
 */
const genRandomHex = (size) =>
    [...Array(size)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join('');

class D3Element {
    _id = null;
    _node = null;
    _height = 0;
    _width = 0;
    _margins = {};

    /**
     * Create d3 element inside html element.
     * @param {object} node. Html element
     * @param {object} margins. Margins of the graph
     * @param {margins} top. Top margin.
     * @param {margins} bottom. Bottom margin.
     * @param {margins} right. Right margin.
     * @param {margins} left. Left margin.
     */

    constructor(node, margins) {
        if (!node) throw new Error('Must pass node param to create D3 element');

        this._id = `__dashboardUI__${genRandomHex(8)}`;

        this._node = select(node)
            .append('svg')
            .attr('id', this._id)
            .attr('height', node.offsetHeight)
            .attr('width', node.offsetWidth);

        const {
            top: top = 20,
            bottom: bottom = 20,
            left: left = 20,
            right: right = 20,
        } = { ...margins };

        this._height = node.offsetHeight - top - bottom;
        this._width = node.offsetWidth - left - right;
        this._margins = {
            top,
            bottom,
            left,
            right,
        };
    }

    get id() {
        return this._id;
    }

    get height() {
        return this._height;
    }

    get width() {
        return this._width;
    }

    get d3Node() {
        return this._node;
    }

    get margins() {
        return this._margins;
    }
}

export { D3Element };