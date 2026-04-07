const { capitalize, reversed, calculator } = require('./jav');

test('capitalizes first letter, ex: cao -> Cao ', () =>{
    expect(capitalize('aloha')).toBe('Aloha')
})

test('reverses string, ex: aloha -> ahola', () => {
    expect(reversed('winwin')).toBe('niwniw')
})

test('celculator: add(1,1) -> should equal 2, .multiply(2,2) -> should equal 4 etc', () =>{
    expect(calculator.add(1,1)).toBe(2)
    expect(calculator.multiply(2,2)).toBe(4)
    expect(calculator.substract(4,4)).toBe(0)
    expect(calculator.divide(6,2)).toBe(3)
})