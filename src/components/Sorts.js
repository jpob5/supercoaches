function sortSimulation(a, b) {
    if (a[1] === b[1]) {
        return (a[2] > b[2]) ? -1 : 1;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}

function sortLadder(a, b) {
    if (a[1].points === b[1].points) {
        return (a[1].pointsFor - a[1].pointsAgainst > b[1].pointsFor - b[1].pointsAgainst) ? -1 : 1;
    }
    else {
        return (a[1].points > b[1].points) ? -1 : 1;
    }
}

export {
    sortSimulation,
    sortLadder
}