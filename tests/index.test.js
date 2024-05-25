const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('../src/index')

describe('capitalize', () => {
    test('capitalizes the first character of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
    })
    test('capitalizes a single character', () => {
        expect(capitalize('a')).toBe('A');
    })
    test('works with empty string', () => {
        expect(capitalize('')).toBe('');
    })
    test('does not modify already capitalized strings', () => {
        expect(capitalize('Hello')).toBe('Hello');
    })
});

describe('reverseString', () => {
    test('reverses a common string', () => {
        expect(reverseString('hello')).toBe('olleh');
    })
    test('single character', () => {
        expect(reverseString('a')).toBe('a');
    })
    test('works with empty string', () => {
        expect(reverseString('')).toBe('');
    })
    test('reverses correctly a string with punctuation', () => {
        expect(reverseString('Hello!')).toBe('!olleH');
    })
});

describe('calculator', () => {
    test('adds', () => {
        expect(calculator.add(2,3)).toBe(5);
    })
    test('subtracts', () => {
        expect(calculator.subtract(5,3)).toBe(2);
    })
    test('multiplies', () => {
        expect(calculator.multiply(2,3)).toBe(6);
    })
    test('divides', () => {
        expect(calculator.divide(6,3)).toBe(2);
    })
});

describe('caesarCipher', () => {
    test('shifts each character by the shift factor', () => {
        expect(caesarCipher("hello world", 3)).toBe("khoor zruog");
    });
    test('wraps from z to a', () => {
        expect(caesarCipher("z", 1)).toBe("a");
    });
    test('keeps to the same case', () => {
        expect(caesarCipher("Hello world", 3)).toBe("Khoor zruog");
    });
    test('handles punctuation', () => {
        expect(caesarCipher("Hello world!", 3)).toBe("Khoor zruog!");
    });
});

describe('analyzeArray', () => {
    test('calculates average, min, max, length of array', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });
    test('calculates average, min, max, length of array wityh negative numbers', () => {
        expect(analyzeArray([-1, 0, 1])).toEqual({
            average: 0,
            min: -1,
            max: 1,
            length: 3
        });
    });
    test('returns and empty object for an empty array', () => {
        expect(analyzeArray([])).toEqual({
            average: NaN,
            min: Infinity,
            max: -Infinity,
            length: 0
        });
    });
});