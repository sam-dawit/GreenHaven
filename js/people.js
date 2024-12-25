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

// Add CSS for the layout
const style = document.createElement("style");
style.textContent = `
    .team-list {
        display: flex;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
        gap: 25px;
        margin:10px 0;
        padding: 10px 10px;
        background-color: grey;
    }
    .team-member {
        text-align: center;
        width: 150px;
    }
    .team-member img {
        width: 128px;
        height: 128px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 8px;
        background-color:white;
    }
    .team-member h2 {
        font-size: 1rem;
        margin: 8px 4px;
    }
    .team-member p {
        font-size: 1rem;
        
    }
`;
document.head.appendChild(style);

// Render team members
renderPeople();
