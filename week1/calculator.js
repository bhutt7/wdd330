let calculator = {
    read() {
        this.b = parseInt(prompt('b?', 0));
        this.a = parseInt(prompt('a?', 0));
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());