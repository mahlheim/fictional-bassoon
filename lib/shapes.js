// parent class for all shapes
class Shape {
    constructor() {
        this.color = ''
    }
    colorChoice(color) {
        this.color = (color);
    }
}

// circle class, child of shape class
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill='${this.color}'/>`
    }
}

// triangle class, child of shape class
class Triangle extends Shape {
    render() {
        return `<polygon points="0, 200 300, 200 150, 0" height="100%" width="100%" fill='${this.color}'/>`
    }
}

// square class, child of shape class
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill='${this.color}'/>`
    }
}

module.exports = {Circle, Triangle, Square};