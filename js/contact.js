function getTitle() {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title") || "";
    console.log(title);
    const contact = document.getElementById("title");
    console.log(contact);
    contact.value = `${title}`;
}
getTitle();
