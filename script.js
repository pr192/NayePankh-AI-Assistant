const chatBox = document.getElementById("chat-box");

/* ---------- Add Message ---------- */

function addMessage(text, className) {

    const div = document.createElement("div");

    div.className = className;

    div.innerHTML = text;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
}

/* ---------- Chatbot Responses ---------- */

function getBotReply(message) {

    message = message.toLowerCase();

    if (message.includes("internship"))
        return "NayePankh Foundation offers internship opportunities in multiple domains. Please visit the Internship section to learn more.";

    if (message.includes("volunteer"))
        return "You can participate in educational, awareness and community service initiatives through volunteering.";

    if (message.includes("donation"))
        return "Donations support social welfare and educational activities organized by NayePankh Foundation.";

    if (message.includes("certificate"))
        return "Certificates are generally provided after successful completion of internship or volunteering activities.";

    if (message.includes("event"))
        return "NayePankh regularly conducts awareness drives and social impact programs.";

    if (message.includes("apply"))
        return "You can apply through the registration forms available on the official website.";

    if (message.includes("skill"))
        return "Internships help students develop technical, communication and leadership skills.";

    if (message.includes("education"))
        return "Education is one of the important focus areas of NayePankh Foundation.";

    if (message.includes("about"))
        return "NayePankh Foundation works towards education, youth empowerment and community development.";

    if (message.includes("hello") || message.includes("hi"))
        return "Hello! Welcome to NayePankh AI Assistant. How can I help you today?";

    return "Sorry, I can currently answer questions about internships, volunteering, certificates, donations and NayePankh Foundation.";
}

/* ---------- Send Message ---------- */

function sendMessage() {

    const input = document.getElementById("userInput");

    const text = input.value.trim();

    if (text === "")
        return;

    addMessage(text, "user");

    input.value = "";

    const typingDiv = document.createElement("div");

    typingDiv.className = "bot";

    typingDiv.id = "typing";

    typingDiv.innerHTML = "AI is typing...";

    chatBox.appendChild(typingDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {

        const typing = document.getElementById("typing");

        if (typing)
            typing.remove();

        const reply = getBotReply(text);

        addMessage(reply, "bot");

    }, 1000);
}

/* ---------- Quick Buttons ---------- */

function quickReply(topic) {

    addMessage(topic, "user");

    const typingDiv = document.createElement("div");

    typingDiv.className = "bot";

    typingDiv.id = "typing";

    typingDiv.innerHTML = "AI is typing...";

    chatBox.appendChild(typingDiv);

    setTimeout(() => {

        const typing = document.getElementById("typing");

        if (typing)
            typing.remove();

        const reply = getBotReply(topic);

        addMessage(reply, "bot");

    }, 1000);
}

/* ---------- Enter Key ---------- */

document.getElementById("userInput")
    .addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
            sendMessage();
        }

    });

/* ---------- Dark Mode ---------- */

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            darkBtn.innerHTML = "☀️";
            darkBtn.title = "Light Mode";

        } else {

            darkBtn.innerHTML = "🌙";
            darkBtn.title = "Dark Mode";
        }

    });

}