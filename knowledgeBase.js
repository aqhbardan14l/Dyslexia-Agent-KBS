
function generateResponse(input) {

    input = input.toLowerCase();

    if(input.includes("dyslexia")) {

        return `
        • Dyslexia affects reading and spelling.<br>
        • Long text may feel difficult.<br>
        • Short sentences are easier to read.<br>
        • Chunking helps reduce confusion.<br><br>

        💡 Tip:
        Read one section at a time.
        `;
    }

    else if(input.includes("study")) {

        return `
        • Study one topic at a time.<br>
        • Use bullet points for notes.<br>
        • Take short breaks.<br><br>

        📚 Tip:
        25-minute study sessions work well.
        `;
    }

    else if(input.includes("stress")) {

        return `
        • Take deep breaths.<br>
        • Focus on one task only.<br>
        • Read slowly and calmly.<br><br>

        🌿 Small steps are okay.
        `;
    }

    else {

        return `
        • Your text was simplified.<br>
        • Short sentences improve readability.<br>
        • Simple words reduce confusion.<br><br>

        ✨ AI support completed.
        `;
    }
}

