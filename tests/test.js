import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

test('should properly get the rectangle perimeter', () => {
    const perimeter = getRectanglePerimeter(5, 5);
    expect(perimeter).toBe(20);
});

test('should properly get the rectangle area', () => {
    const area = getRectangleArea(5, 5);
    expect(area).toBe(25);
});

test('should properly get the rectangle info', () => {
    let length = 5;
    let width = 5;
    const info = getRectangleInfo(length, width);
    expect(info).toBe("The perimeter of a rectangle is 20 and the area is 25");
});