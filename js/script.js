const services = [
    {
        category: "Personal",
        details: [
            {
                title: "Compassionate Care Services",
                description:
                    "Providing in-home assistance for daily living activities with care and compassion.",
                image: "./image/pic-01.jpeg",
                services: {
                    title: "Personal Care",
                    description:
                        "Providing in-home assistance for daily living activities with care and compassion.",
                    image: "./image/pic-01.jpeg",
                },
            },
            {
                title: "Personal Hygiene Assistance",
                description:
                    "Helping clients with bathing, grooming, and maintaining personal hygiene.",
                image: "./image/pic-02.jpeg",
            },
            {
                title: "Mobility Assistance",
                description:
                    "Ensuring safe and supportive mobility for daily activities and exercise.",
                image: "./image/pic-03.jpeg",
            },
            {
                title: "Dressing Assistance",
                description:
                    "Helping with selecting and wearing appropriate attire for all occasions.",
                image: "./image/pic-04.jpeg",
            },
        ],
    },
    {
        category: "Companion",
        details: [
            {
                title: "Elderly Companion Services",
                description:
                    "Offering companionship and emotional support for seniors.",
                image: "./image/pic-01.jpeg",
            },
            {
                title: "Activity Planning",
                description:
                    "Engaging clients in meaningful activities to stimulate their minds and bodies.",
                image: "./image/pic-02.jpeg",
            },
            {
                title: "Errand Assistance",
                description:
                    "Helping with grocery shopping, picking up prescriptions, and other errands.",
                image: "./image/pic-03.jpeg",
            },
            {
                title: "Meal Companionship",
                description:
                    "Providing companionship during meals to make dining a more enjoyable experience.",
                image: "./image/pic-04.jpeg",
            },
        ],
    },
    {
        category: "Housekeeping",
        details: [
            {
                title: "Light Cleaning Services",
                description:
                    "Keeping the living space clean and tidy, including dusting and vacuuming.",
                image: "./image/pic-01.jpeg",
            },
            {
                title: "Laundry Assistance",
                description:
                    "Helping with washing, folding, and organizing laundry.",
                image: "./image/pic-02.jpeg",
            },
            {
                title: "Organizing Assistance",
                description:
                    "Helping clients organize their personal belongings and living spaces.",
                image: "./image/pic-03.jpeg",
            },
            {
                title: "Trash Removal",
                description:
                    "Managing and disposing of household waste responsibly.",
                image: "./image/pic-04.jpeg",
            },
        ],
    },
    {
        category: "Medical",
        details: [
            {
                title: "Medication Reminders",
                description:
                    "Ensuring timely reminders for prescribed medications.",
                image: "./image/pic-01.jpeg",
            },
            {
                title: "Health Monitoring",
                description:
                    "Monitoring vital signs and general health conditions regularly.",
                image: "./image/pic-02.jpeg",
            },
            {
                title: "Medical Appointment Assistance",
                description:
                    "Helping clients attend medical appointments with ease.",
                image: "./image/pic-03.jpeg",
            },
            {
                title: "Specialized Medical Care",
                description:
                    "Providing support for specific medical needs under professional guidance.",
                image: "./image/pic-04.jpeg",
            },
        ],
    },
    {
        category: "Meal",
        details: [
            {
                title: "Meal Preparation",
                description:
                    "Preparing nutritious meals tailored to clients' dietary needs.",
                image: "./image/pic-01.jpeg",
            },
            {
                title: "Grocery Shopping",
                description:
                    "Assisting with purchasing fresh and healthy groceries.",
                image: "./image/pic-02.jpeg",
            },
            {
                title: "Meal Planning",
                description:
                    "Creating weekly meal plans to ensure a balanced diet.",
                image: "./image/pic-03.jpeg",
            },
            {
                title: "Special Diet Support",
                description:
                    "Providing meals for specific dietary restrictions and preferences.",
                image: "./image/pic-04.jpeg",
            },
        ],
    },
    {
        category: "Therapy",
        details: [
            {
                title: "Physical Therapy Assistance",
                description:
                    "Helping clients with exercises recommended by physical therapists.",
                image: "./image/pic-01.jpeg",
            },
            {
                title: "Emotional Support",
                description:
                    "Offering a listening ear and emotional encouragement.",
                image: "./image/pic-02.jpeg",
            },
            {
                title: "Stress Management",
                description: "Guiding relaxation techniques to reduce stress.",
                image: "./image/pic-03.jpeg",
            },
            {
                title: "Rehabilitation Support",
                description:
                    "Supporting clients recovering from surgeries or injuries.",
                image: "./image/pic-04.jpeg",
            },
        ],
    },
    {
        category: "Fitness",
        details: [
            {
                title: "Daily Exercise Guidance",
                description:
                    "Helping clients maintain an active lifestyle with regular exercises.",
                image: "./image/pic-01.jpeg",
            },
            {
                title: "Yoga Sessions",
                description:
                    "Guided yoga exercises for relaxation and flexibility.",
                image: "./image/pic-02.jpeg",
            },
            {
                title: "Walking Assistance",
                description:
                    "Providing support for daily walks in safe environments.",
                image: "./image/pic-03.jpeg",
            },
            {
                title: "Personal Fitness Plans",
                description:
                    "Developing fitness plans tailored to individual abilities.",
                image: "./image/pic-04.jpeg",
            },
        ],
    },
    {
        category: "Memory",
        details: [
            {
                title: "Memory Games",
                description:
                    "Engaging clients in games that stimulate memory and cognitive function.",
                image: "./image/pic-01.jpeg",
            },
            {
                title: "Reminiscence Therapy",
                description:
                    "Encouraging conversations about past experiences to improve memory.",
                image: "./image/pic-02.jpeg",
            },
            {
                title: "Routine Management",
                description:
                    "Helping clients stick to a structured daily routine.",
                image: "./image/pic-03.jpeg",
            },
            {
                title: "Cognitive Training",
                description:
                    "Guided exercises to improve mental focus and cognitive abilities.",
                image: "./image/pic-04.jpeg",
            },
        ],
    },
];

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
                        <a href="/html/services.html?title=${detail.title}">Contact</a>
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
