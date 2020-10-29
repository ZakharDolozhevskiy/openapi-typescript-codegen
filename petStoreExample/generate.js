const OpenAPI = require('../dist');

// openapi --input ./pets.json --output ./dist --useOptions true --useUnionTypes true --exportCore false

OpenAPI.generate({
    input: require('./pets.json'),
    output: './dist',
    useOptions: true,
    useUnionTypes: true,
    exportCore: false
});
