const people = [
    {
        image: "https://cdn-icons-png.flaticon.com/512/2815/2815428.png",
        person: "Sarah Johnson",
        Role: "Director of Operations",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/512/2815/2815428.png",
        person: "Michael Brown",
        Role: "Chief Care Officer",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/512/2815/2815428.png",
        person: "Emily Clark",
        Role: "Senior Care Coordinator",
    },
];

// Function to dynamically render people to the webpage
function renderPeople() {
    const container = document.querySelector(".people");
    const teamList = document.createElement("div");
    teamList.classList.add("team-list");

    people.forEach((member) => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("team-member");

        memberDiv.innerHTML = `
            <img src="${member.image}" alt="${member.person}" />
            <h2>${member.person}</h2>
            <p>${member.Role}</p>
        `;

        teamList.appendChild(memberDiv);
    });

    container.appendChild(teamList);
}

renderPeople();
