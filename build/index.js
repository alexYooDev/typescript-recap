var hello = function () { return 'Hi!'; };
var Block = /** @class */ (function () {
    function Block(data) {
        this.data = data;
        this.data = 'Initial Data';
    }
    Block.prototype.printData = function () {
        return this.data;
    };
    return Block;
}());
