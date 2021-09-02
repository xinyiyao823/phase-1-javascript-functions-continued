// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(star = '*') {
    return function compliment(adjective = 'special') {
        return `You are ${star}${adjective}${star}!`
    }
}
console.log(wrapAdjective('*')('a hard worker'));