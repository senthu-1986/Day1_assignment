function intersection(...arrays) {
    return arrays.reduce((acc, curr) => 
        acc.filter(value => curr.includes(value))
    );
}

console.log(intersection([1,2,3], [2,3,4], [3,4,5]));