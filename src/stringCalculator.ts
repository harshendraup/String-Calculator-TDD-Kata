export function add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
  
    if (numbers.startsWith('//')) {
      const delimiter = numbers[2];
      numbers = numbers.slice(4); // Remove the delimiter and newline
      const numberArray = numbers.split(delimiter).map(Number);
      return numberArray.reduce((sum, num) => sum + num, 0);
    }
  
    const numberArray = numbers.split(/[\n,]/).map(Number);
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
  