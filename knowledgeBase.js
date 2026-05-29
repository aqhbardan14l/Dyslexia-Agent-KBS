function generateResponse(input) {

    input = input.toLowerCase();

    if (input.includes("dyslexia")) {
        return `
        • Dyslexia affects reading and spelling.<br>
        • Short sentences are easier to understand.<br>
        • Reading in small sections can help.<br><br>
        💡 Tip: Read one paragraph at a time.
        `;
    }

    else if (input.includes("study")) {
        return `
        • Study one topic at a time.<br>
        • Use short notes and bullet points.<br>
        • Take regular breaks.<br><br>
        📚 Tip: Try the 25-minute study method.
        `;
    }

    else if (input.includes("stress")) {
        return `
        • Take deep breaths.<br>
        • Focus on one task at a time.<br>
        • Stay calm and take breaks.<br><br>
        🌿 Small steps are okay.
        `;
    }

    else {
        return `
        • I could not find a specific answer.<br>
        • Try using keywords such as:<br>
        - dyslexia<br>
        - study<br>
        - stress
        `;
    }
}
