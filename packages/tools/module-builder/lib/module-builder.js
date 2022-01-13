#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');

const strip = require('@rollup/plugin-strip');

const currentWorkingPath = process.cwd();
const { input, name, version, author, dependencies } = require(path.join(
    currentWorkingPath,
    'package.json'
));

const inputPath = path.join(currentWorkingPath, input);

// Little workaround to get package name without scope
const fileName = name.replace('@dashboard-ui/', '');

// Define banner
const banner = `// ${name} v${version} \n// Copyright ${new Date().getFullYear()} ${author}\n`;

// see below for details on the options
const inputOptions = {
    input: inputPath,
    external: Object.keys(dependencies || {}).filter((key) =>
        /(^@dashboard-ui)|(^d3-)/.test(key)
    ),
    plugins: [
        strip({
            include: '**/*.(mjs|js)',
            exlude: 'tests/**/*',
            debugger: true,
            sourceMap: false,
        }),
    ],
};

const outputOptions = [
    {
        format: 'cjs',
        file: `dist/${fileName}.cjs.js`,
        banner,
    },
    {
        format: 'esm',
        file: `dist/${fileName}.esm.js`,
        banner,
    },
];

async function build() {
    // Check type of compile
    // create bundle
    const moduleBundle = await rollup.rollup(inputOptions);
    // loop through the options and write individual bundles
    outputOptions.forEach(async (options) => {
        await moduleBundle.write(options);
    });
}

build();
