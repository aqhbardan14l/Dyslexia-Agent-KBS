document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("submitBtn");

    button.addEventListener("click", async function () {

        let input = document.getElementById("userInput").value;

        if (!input) {
            document.getElementById("outputText").innerHTML =
                "Please enter text first.";
            return;
        }

        document.getElementById("outputText").innerHTML =
            "Processing... 🤖";

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
                        content: "You are a dyslexia support assistant. Use simple sentences."
                    },
                    {
                        role: "user",
                        content: input
                    }
                ]
            })
        });

        const data = await response.json();

        document.getElementById("outputText").innerHTML =
            data.choices?.[0]?.message?.content || "No response.";
    });

});
