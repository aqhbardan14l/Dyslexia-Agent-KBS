document.getElementById("submitBtn").addEventListener("click", async function () {

    let input = document.getElementById("userInput").value;

    console.log("INPUT:", input);

    document.getElementById("outputText").innerHTML = "Thinking...";

    const apiKey = "PASTE_KEY_HERE";

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
                    content: "You are a helpful dyslexia assistant."
                },
                {
                    role: "user",
                    content: input
                }
            ]
        })
    });

    const data = await response.json();

    console.log("API RESPONSE:", data);

    let output =
        data?.choices?.[0]?.message?.content;

    if (!output) {
        output = "ERROR: No AI response (check console)";
    }

    document.getElementById("outputText").innerHTML = output;
});
