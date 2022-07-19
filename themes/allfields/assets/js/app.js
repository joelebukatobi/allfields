// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("btn-link");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks the button, open the modal
function openModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
