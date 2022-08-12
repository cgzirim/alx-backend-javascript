const Utils = {
    calculateNumber(type, a, b) {
        const first_num = Math.round(a);
        const second_num = Math.round(b);
    
        if (type === 'SUM') {
            return first_num + second_num
        }
        if (type === 'SUBTRACT') {
            return first_num - second_num
        }
        if (type === 'DIVIDE') {
            if (second_num === 0) return 'Error';
            return first_num / second_num
        }
    }
};

module.exports = Utils;
