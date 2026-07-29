// Grab references to the elements we need to work with.
// We do this once, at the top, so we don't re-query the DOM every time we need them.
const form = document.querySelector("form");
const email = document.querySelector("#email");
const username = document.getElementById("username");
const users = document.querySelector(".users");
const url = document.querySelector("#url");

// This array is our "source of truth" — the single place that holds all app data.
// The DOM is never edited by hand; it always just reflects whatever is in this array.
let usersData = [
    {
        id: 1,
        name: "Emma Johnson",
        email: "emma.johnson@example.com",
        dob: "1998-04-15",
        image: "https://randomuser.me/api/portraits/women/11.jpg"
    },
    {
        id: 2,
        name: "Sophia Williams",
        email: "sophia.williams@example.com",
        dob: "2000-09-28",
        image: "https://randomuser.me/api/portraits/women/22.jpg"
    }
];

// Render function: the ONLY job of this function is
// "look at usersData right now, and rebuild the DOM to match it."
// We never manually add/remove a single card elsewhere — everything goes through here.
function ui() {
    // Wipe out whatever is currently shown...
    users.innerHTML = "";

    // ...then rebuild it fresh from the current state.
    usersData.forEach((elem, index) => {
        users.innerHTML += `
            <div class="user_card">
                <div class="img_box">
                    <img src="${elem.image}" alt="${elem.name}">
                </div>

                <div>
                    <h3>Name: ${elem.name}</h3>
                    <p>Email: ${elem.email}</p>
                </div>

                <div class="actions">
                    <button class="edit">Edit</button>
                    <!-- 
                        We store the index as a data-* attribute instead of calling
                        a function directly in HTML. This keeps HTML free of logic
                        and lets us handle clicks in ONE place (event delegation below).
                    -->
                    <button class="delete" data-index="${index}">Delete</button>
                </div>
            </div>
        `;
    });
}

// Run once on page load, so the default users show up immediately.
ui();

// Handle form submission (adding a new user)
form.addEventListener("submit", (event) => {
    // Forms reload the page by default on submit — we don't want that
    // since we're handling everything with JS, so we stop that default behavior.
    event.preventDefault();

    const name = username.value;
    const emailValue = form.querySelector("#email").value;
    const urlValue = form.querySelector("#url").value;

    // Basic validation: don't allow empty fields through.
    if (
        name.trim() === "" ||
        emailValue.trim() === "" ||
        urlValue.trim() === ""
    ) {
        alert("Please fill all fields");
        return; // stop here, don't add incomplete data
    }

    // Step 1: update the STATE (not the DOM directly).
    usersData.push({
        id: usersData.length + 1,
        name,
        email: emailValue,
        image: urlValue
    });

    // Step 2: re-render, so the DOM reflects the new state.
    ui();

    // Clear the form fields after a successful submit.
    form.reset();
});

// Handle delete clicks using EVENT DELEGATION.
// Instead of attaching a listener to every single delete button (which would
// need to be redone every time ui() rebuilds the DOM), we attach ONE listener
// to the stable parent container (.users), which never gets destroyed.
users.addEventListener("click", (event) => {
    // event.target = the exact element that was actually clicked.
    // We check if that element is a delete button.
    if (event.target.classList.contains("delete")) {
        // Read the index we stored earlier as a data attribute.
        const index = event.target.dataset.index;

        // Step 1: update the STATE by removing that item from the array.
        usersData.splice(index, 1);

        // Step 2: re-render to reflect the new state.
        ui();
    }
});