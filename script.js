function typeText(element, text, delay = 50) {
    let index = 0;
    function typeChar() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeChar, delay);
        }
    }
    typeChar();
}

// Function to display chatbot messages
function displayMessage(message) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('chat-message');  // Add your message styling class here
    document.getElementById('chat-window').appendChild(messageContainer);

    // Use the typeText function to progressively display the message
    typeText(messageContainer, message);
}

// Mockup function to simulate receiving a chatbot message
function simulateBotResponse() {
    const messages = [
        "Hello! How can I assist you today?",
        "I'm here to help you with any questions you have.",
        "Let me know if you need more information on our services."
    ];

    // Simulate receiving multiple messages over time
    let i = 0;
    function sendNextMessage() {
        if (i < messages.length) {
            displayMessage(messages[i]);
            i++;
            setTimeout(sendNextMessage, 3000);  // 3-second delay between messages
        }
    }
    sendNextMessage();
}

// Call this function to start showing messages progressively
simulateBotResponse();
