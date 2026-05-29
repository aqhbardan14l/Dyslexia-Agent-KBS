function runAgent() {

    let input = document.getElementById("userInput").value;

    let response = generateResponse(input);

    document.getElementById("outputText").innerHTML = response;
}
