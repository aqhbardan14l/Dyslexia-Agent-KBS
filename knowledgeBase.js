
function generateResponse() {

    let input = document.getElementById("userInput").value;

    let response = "";

    if(input.toLowerCase().includes("dyslexia")) {

        response = `
        • Dyslexia affects reading and spelling.<br>
        • Short sentences are easier to read.<br>
        • Chunking helps reduce confusion.<br><br>

        💡 Tip:
        Read one section at a time.
        `;

    }

    else if(input.toLowerCase().includes("stress")) {

        response = `
        • Take deep breaths.<br>
        • Focus on one task only.<br>
        • Read slowly and calmly.<br><br>

        🌿 Small steps are okay.
        `;

    }

    else {

        response = `
        • Your text was processed successfully.<br>
        • Simplified support is ready.<br>
        • Use short sentences for easier reading.<br><br>

        ✨ AI support completed.
        `;
    }

    document.getElementById("outputText").innerHTML = response;
}
```

