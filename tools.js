function runAgent() {

    let input = document.getElementById("userInput").value.toLowerCase();

    let response = "";

    if (input.includes("dyslexia")) {

        response = `
        Dyslexia affects reading.<br>
        Use short sentences.<br>
        Break information into parts.
        `;

    } else if (input.includes("study")) {

        response = `
        Study one topic at a time.<br>
        Use bullet points.<br>
        Take short breaks.
        `;

    } else if (input.includes("stress")) {

        response = `
        Take deep breaths.<br>
        Stay calm.<br>
        Do one task at a time.
        `;

    } else {

        response = `
        Please use keywords:<br>
        - dyslexia<br>
        - study<br>
        - stress
        `;
    }

    document.getElementById("outputText").innerHTML = response;
}
