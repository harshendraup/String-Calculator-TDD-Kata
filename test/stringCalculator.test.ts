import { add } from '../src/stringCalculator';

describe('String Calculator', () => {
    test('returns 0 for empty string', () => {
      expect(add('')).toBe(0);
    });
  
    test('returns the number itself when input is a single number', () => {
      expect(add('1')).toBe(1);
    });
  
    test('returns the sum of multiple numbers separated by commas', () => {
      expect(add('1,2,3')).toBe(6);
    });
  
    test('returns the sum of numbers separated by newlines and commas', () => {
      expect(add('1\n2,3')).toBe(6);
    });
  
    test('returns the sum of numbers with a custom delimiter', () => {
      expect(add('//;\n1;2')).toBe(3);
    });
  });
