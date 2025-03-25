function getTitle() {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title") || "";
    console.log(title);
    const contact = document.getElementById("title");
    console.log(contact);
    contact.value = `${title}`;
}
getTitle();

// Add form submission handling
const form = document.getElementById("contactForm");
const loadingSpinner = document.getElementById("loadingSpinner");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Show loading spinner
    loadingSpinner.classList.remove("hidden");
    statusMessage.textContent = "";

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            statusMessage.textContent = "Message sent successfully!";
            statusMessage.style.color = "green";
            form.reset();
            getTitle(); // Restore service from URL if present
        } else {
            throw new Error(result.message || "Failed to send message");
        }
    } catch (error) {
        statusMessage.textContent = "Failed to send message. Please try again.";
        statusMessage.style.color = "red";
    } finally {
        loadingSpinner.classList.add("hidden");
    }
});
