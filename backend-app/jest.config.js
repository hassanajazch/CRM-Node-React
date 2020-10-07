module.exports = {
    collectCoverageFrom: ['src/**/*.{js}'],
    testRegex: './src/.*.test.js',
    testEnvironment: 'node',
    testURL: 'http://localhost',
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js)$'],
};
