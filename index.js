const questionAnswer = () => {
    const questions = [
        {
            name: "NAME",
            type: "input",
            message: "What is your Name?"
        },
        {
            name: "DOB",
            type: "input",
            message: "What is your Date of Birth in (dd/mm/yyyy) format?"
        },
    ];
    return inquirer.prompt(questions);
}

questionAnswer().then(answers => {
    // Calculate Zodiac Sun-Sign
    console.log(
        chalk.yellow(
            `Calculating ${answers.NAME}'s age the following date of birth ${answers.DOB}....`
        )
    );
    const age = function(answers.DOB){

    }
    const sunSign = new SunSign().getSunSign(answers.DOB);
    console.log(
        chalk.yellow(
            `Calculated Zodiac Sign of ${answers.NAME} is, [${sunSign}]`
        )
    );

    const dataToProcess = {};
    dataToProcess['name'] = answers.NAME;
    dataToProcess['dob'] = answers.DOB;
    dataToProcess['report'] = answers.REPORT_TYPES;
    dataToProcess['sunsign'] = sunSign;
    dataToProcess['duration'] = answers.DURATION;

    // console.log(dataToProcess);
    // Call API to get the Horoscope based on the sunSign
    // horoscope.getHoroscope(dataToProcess);
});