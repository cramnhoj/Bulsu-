let announcements = [];

function validator() {
    console.log("Validator function called");
    const title = document.getElementById("Title").value;
    const content = document.getElementById("Paragraph").value;

    if (!title|| !content) {
        alert("Please fill in all fields.");
        return;
    } else {
        updateAnnouncement(title, content);
    }
}

function updateAnnouncement(title, content) {
    const newPost = {
        title: title,
        content: content
    };
    announcements.push(newPost);
    render(announcements);
}

function render(announcements) {
    const container = document.getElementById("announcement-container");
    container.innerHTML = '';
    announcements.forEach(post => {
        container.innerHTML += `
                <div class="announcement-container">
                <h1>${post.title}</h1>
                <p>${post.content}</p>
            </div>
        `;
    });
    console.log("Render function called");
    console.log(announcements);

}