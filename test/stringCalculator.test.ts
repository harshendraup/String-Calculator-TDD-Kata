import { add } from '../src/stringCalculator';

describe('String Calculator', () => {
    test('returns 0 for empty string', () => {
      expect(add('')).toBe(0);
    });
  
    test('returns the number itself when input is a single number', () => {
      expect(add('1')).toBe(1);
    });
  });
  
