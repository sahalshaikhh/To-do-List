var itemList = document.querySelector(".input-field");
var dataShows = document.querySelector(".input-data");
var addItem = document.querySelector(".add-icon");



// Adding Typed item into a List on the click of the button

addItem.addEventListener("click", (e) => {

    // Storing the Typed value :
    var item = itemList.value

    // Clearing the Input feild :
    itemList.value = " ";

    // Checking if User clickes on the Add button when the feild is empty then show 
    // them an Message

    if (item === "" || item === " ") {
        var warningMessage = document.createElement("div");
        warningMessage.innerHTML = "Notes Can't be empty";
        warningMessage.classList.add("warning");
        dataShows.appendChild(warningMessage);

        // The message Went away after 2sec because of setTimeout
        setTimeout(() => {
            warningMessage.innerHTML = " ";
        }, 2000);

    } else {

        // Storing Data into List and printing it on the Screen in the form of Lists :

        // Adding Remove Button :
        var deleteItem = document.createElement("img");
        deleteItem.classList.add("remove")
        deleteItem.setAttribute("src", "./assets/Remove.png");
        deleteItem.setAttribute("alt", "Flower");

        // Remove the item when it's get clicked on the remove button :
        deleteItem.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        })

        // Adding Value of input field on the screen :
        var newNote = document.createElement("li");
        newNote.innerHTML = item;
        newNote.appendChild(deleteItem);
        dataShows.appendChild(newNote);
        newNote.classList.add("list-item");

    }
})