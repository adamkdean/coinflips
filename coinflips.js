$(function() {
    var totalIterations = 25000000,
        currentIteration = 0,
        iterationProgress = 1000,
        currentScore = 0,
        highScore = 0,
        roundStr = '',
        face;

    log('Generating ' + totalIterations + ' coinflips...', true);
    log('---------------------------------------------------------------', true);

    for (currentIteration = 0; currentIteration < totalIterations; currentIteration++) {
        roundStr = 'Attempt #' + currentIteration + ': ';
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
            console.log(currentIteration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        ' of ',
                        totalIterations.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
    }

    log('---------------------------------------------------------------', true);
    log('Highest score from ' + totalIterations + ' rounds is ' + highScore, true);
});

function flip() {
    var value = Math.floor((Math.random() * 2) + 1);
    return value == 1 ? 'H' : 'T';
}

function log(string, br) {
    if (br) $('.results').append(string + '<br>');
    else $('.results').append(string);
}
