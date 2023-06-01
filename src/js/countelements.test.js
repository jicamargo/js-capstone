import countElements from './countelements.js';

describe('countElements', () => {
  test('should return the correct count of elements in the array', () => {
    // Arrange
    const array = [1, 2, 3];

    // Act
    const result = countElements(array);

    // Assert
    expect(result).toBe(3);
  });

  test('should return 0 when the array is empty', () => {
    // Arrange
    const array = [];

    // Act
    const result = countElements(array);

    // Assert
    expect(result).toBe(0);
  });

  test('should return the correct count of elements, when the array has duplicate values', () => {
    // Arrange
    const array = [1, 2, 2, 3, 3, 3];

    // Act
    const result = countElements(array);

    // Assert
    expect(result).toBe(6);
  });
});
