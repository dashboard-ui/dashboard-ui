# `@dashboard-ui/d3element`

[![Tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
![npm version](https://img.shields.io/github/package-json/v/dashboard-ui/dashboard-ui?filename=packages%2Fmodules%2Fd3element%2Fpackage.json)

Create D3 object wrapper. 

## Installation

```
npm install --save @dashboard-ui/d3element
```

## Usage ES6 Modules

```
import { D3Element } from '@dashboard-ui/d3Element';

const d3GraphComponent = D3Element(htmlElement);
```


## API Reference


### D3Element(htmlElement [, margins] )

### Options

#### htmlElement
- Type: `HTML Element`

HTML element where the graph must be drawn.

#### margins
- Type: `Object`
- Default: { "top": 20, "bottom": 20, "left":20, "right": 20}

Internal margins


### Properties

#### id
- Type: `String`

Return the unique id of the d3 element

#### height
- Type: `number`

Return the height of container element

#### width
- Type: `number`

Return the width of container element
#### margins
- Type: `object`

Return internal margins of the container element

#### d3Node
- Type: `HTMLElement`

Return HTMLElement




