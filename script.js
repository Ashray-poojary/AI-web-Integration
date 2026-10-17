async function sendMessage() {
  const messageInput = document.getElementById("input");
  const responseOutput = document.getElementById("output");
  const message = messageInput.value.trim();

  if (!message) {
    responseOutput.textContent = "Please enter a message.";
    return;
  }

  responseOutput.textContent = "Thinking...";

  try {
    const response = await fetch("http://localhost:8080/v1/chat/completions", { //using https cant fetch
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "default", //model name can be given
        messages: [
          { role: "user", content: message }
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || data.error || "The request failed.");
    }
    // console.log(data.choices?.[0]?.message?.content); for checking output in console
    responseOutput.textContent = data.choices?.[0]?.message?.content || data.text || "No content returned";
  } catch (error) {
    responseOutput.textContent = `Error: ${error.message}`;
  }
}