const minimumWaitingTime = queries => {
    let waitingTime = 0
    const query = queries.sort((a, b) => a - b)
    for (let i = 1; i < query.length; i++) {
        waitingTime += query[i - 1];
        query[i - 1] = waitingTime;
    }
    return query.reduce((prevVal, currVal) => prevVal + currVal) - query[query.length - 1]
}

console.log(minimumWaitingTime([7, 9, 2, 3]))