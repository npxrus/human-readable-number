module.exports = function toReadable(number) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "zero",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number == 0) return "zero";

    const getTens = (num) => {
        if (num < 10) {
            return `${ones[num]}`;
        } else if (num < 100 && num > 19) {
            return `${tens[Math.floor(num / 10)]} ${ones[num % 10]}`;
        }
        return `${teens[num - 10]}`;
    };

    const getHundreds = (num) => {
        if (num > 99) {
            return `${ones[Math.floor(num / 100)]} hundred ${getTens(
                Math.floor(num % 100)
            )}`;
        }
        return `${getTens(num)}`;
    };

    return getHundreds(number).trim();
};
