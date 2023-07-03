// imports shape classes created in shapes.js
const {Circle, Triangle, Square} = require("./shapes.js")

// circle
describe('Circle', () => {
    it('should render correctly', () => {
        const shape = new Circle();
        const color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="100" height="100%" width="100%" fill='${this.shapeColor}' />`);
    });
});

// triangle
describe('Triangle', () => {
    it('should render correctly', () => {
        const shape = new Triangle();
        const color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="0, 200 300, 200 150, 0" height="100%" width="100%" fill='${this.shapeColor}' />`);
    });
});

// square
describe('Square', () => {
    it('should render correctly', () => {
        const shape = new Square();
        const color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill='${this.shapeColor}' />`);
    });
});