import services from "./services.js";
function renderCards(category = null) {
    const cardContainer = document.getElementById("contain");
    cardContainer.innerHTML = "";

    // Filter to show only the first two categories on initial render if no category is selected
    const filteredServices = category
        ? services.filter((element) => element.category === category)
        : services.slice(0, 2);

    console.log("this is filtered Services", filteredServices);

    filteredServices.forEach((element) => {
        element.details.forEach((detail) => {
            const card = document.createElement("div");
            card.className = "box";
            card.innerHTML = `
                <img src="${detail.image}" alt="${detail.title}" style="width:100%;height:150px;">
                <div class="pad">
                    <h3>${detail.title}</h3>
                    <p>${detail.description}</p>
                    <div class="button">
                        <a href="/html/contact.html?title=${detail.title}">Contact Us</a>
                    </div>
                </div>`;

            cardContainer.appendChild(card);
        });
    });
}

// Initial render showing only the first two categories
renderCards();
console.log("HIHI its from script");

// Add event listeners to filter buttons
document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.set;
        renderCards(category);
    });
});
