function renderCards(category = null) {
    const cardContainer = document.getElementById("a");
    cardContainer.innerHTML = "";

    // Filter to show only the first two categories on initial render if no category is selected
    const filteredServices = category
        ? services.filter((element) => element.category === category)
        : services.slice(0, 2);

    filteredServices.forEach((element) => {
        element.details.forEach((detail) => {
            const card = document.createElement("div");
            card.className = "box";
            card.innerHTML = `
                <img src="${detail.image}" alt="${detail.title}" style="width:100%;height:150px;">
                <h3>${detail.title}</h3>
                <p>${detail.description}</p>`;

            cardContainer.appendChild(card);
        });
    });
}

// Initial render showing only the first two categories
renderCards();

// Add event listeners to filter buttons
document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.set;
        renderCards(category);
    });
});
