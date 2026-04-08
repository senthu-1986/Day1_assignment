function checkNumberType(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// Example usage
console.log(checkNumberType(10));   // Positive
console.log(checkNumberType(-5));   // Negative
console.log(checkNumberType(0));    // Zero