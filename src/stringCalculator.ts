export function add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
  
    if (numbers.startsWith('//')) {
      const delimiter = numbers[2];
      numbers = numbers.slice(4);
      const numberArray = numbers.split(delimiter).map(Number);
      
      const negativeNumbers = numberArray.filter(n => n < 0);
      if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers are not allowed: ${negativeNumbers.join(', ')}`);
      }
  
      return numberArray.reduce((sum, num) => sum + num, 0);
    }
  
    const numberArray = numbers.split(/[\n,]/).map(Number);
    
    const negativeNumbers = numberArray.filter(n => n < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers are not allowed: ${negativeNumbers.join(', ')}`);
    }
  
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
  