$(function() {
    var totalIterations = 100000000, // 100M
        currentIteration = 0,
        iterationProgress = 1000000,
        currentScore = 0,
        highScore = 0,
        roundStr = '',
        face;

    log('Generating ' + format(totalIterations) + ' coinflips...', true);
    log('---------------------------------------------------------------', true);

    for (currentIteration = 0; currentIteration < totalIterations; currentIteration++) {
        roundStr = 'Attempt #' + format(currentIteration) + ': ';
        currentScore = 0;
        do {
            face = flip();
            roundStr += face;
            if (face == 'H') {
                currentScore++;
            }
        }
        while (face !== 'T');

        roundStr += ' (' + currentScore + ')';
        if (currentScore > highScore) {
            highScore = currentScore;
            log(roundStr, true);
        }

        if (currentIteration % iterationProgress == 0) {
            console.log(format(currentIteration), ' of ', format(totalIterations));
        }
    }

    log('---------------------------------------------------------------', true);
    log('Highest score from ' + format(totalIterations) + ' rounds is ' + highScore, true);
});

function format(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function flip() {
    var value = Math.floor((Math.random() * 2) + 1);
    return value == 1 ? 'H' : 'T';
}

function log(string, br) {
    if (br) $('.results').append(string + '<br>');
    else $('.results').append(string);
}
