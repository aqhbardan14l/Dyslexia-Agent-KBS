async function runAgent() {

    let input = document.getElementById("userInput").value;

    if (input.trim() === "") {
        document.getElementById("outputText").innerHTML =
            "Please enter a question.";
        return;
    }

    document.getElementById("outputText").innerHTML =
        "Thinking... ⚡";

    const apiKey = "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";

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey
        },
        body: JSON.stringify({
            model: "llama3-8b-8192",
            messages: [
                {
                    role: "system",
                    content: "You are a Dyslexia Support AI. Use simple short sentences."
                },
                {
                    role: "user",
                    content: input
                }
            ]
        })
    });

    const data = await response.json();

    let output =
        data.choices?.[0]?.message?.content
        || "No response.";

    document.getElementById("outputText").innerHTML = output;
}
