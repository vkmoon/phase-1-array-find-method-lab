function superbowlWin(record){
    const wins = record.find(object => object.result === "W")
    if (wins === undefined) {
        return wins
    }
    return wins.year
}

