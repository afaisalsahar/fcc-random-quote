const getRandNum = (start, end) => {
    return Math.floor(
        Math.random(start) * end
    );
}

export { getRandNum };