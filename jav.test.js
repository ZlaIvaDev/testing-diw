const capitalize = require('./jav.js');

test('capitalizes first letter, ex: cao -> Cao ', () =>{
    expect(capitalize('aloha')).toBe('Aloha')
})