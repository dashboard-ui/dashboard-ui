# `@dashboard-ui/d3element`

[![Tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
![npm version](https://img.shields.io/github/package-json/v/dashboard-ui/dashboard-ui?filename=packages%2Fmodules%2Fd3element%2Fpackage.json)

Create D3 object wrapper inside html element

## Installation

```
npm install --save @dashboard-ui/d3element
```

## Usage ES6 Modules

```
import { D3Element } from '@dashboard-ui/d3Element';

const d3GraphComponent = D3Element(htmlElement);
```


## Documentation

### Constructor

Properties  | Type        | Required        | Description
------------|-------------|-----------------|------------------------------------------------------
Node        | HTML Element| Yes             | HTML element where the graph must be draw
Margins     | Object      | No              | Internal margins.
"top"       | number      |                 | Top margin: Default: 20      
"bottom"    | number      |                 | Bottom margin: Default: 20      
"left"      | number      |                 | Left margin: Default: 20      
"right"     | number      |                 | Right margin: Default: 20      

### Properties

Properties  | Description
------------|--------------------------------------------------------------------------------------
id          | Return the unique id of the d3 element
height      | Return the height of the d3 element
width       | Return the width of the d3 element
margins     | Return the margins of the d3 element
d3Node      | Return HTMLElement


