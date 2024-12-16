const modal = document.getElementById("modal");
const burgers = document.querySelectorAll(".burger"); 
const closeButton = document.getElementById("close-button");

let isModalOpen = false; 

function openModal() {
    modal.style.display = "block";
    modal.style.opacity = "1"; 
    burgers.forEach(burger => burger.classList.add("open")); 
    isModalOpen = true; 
}

function closeModal() {
    modal.style.opacity = "0"; 
    burgers.forEach(burger => burger.classList.remove("open")); 
    setTimeout(() => {
        modal.style.display = "none"; 
    }, 500); 
    isModalOpen = false; 
}


burgers.forEach(burger => {
    burger.addEventListener("click", () => {
        if (isModalOpen) {
            closeModal(); 
        } else {
            openModal(); 
        }
    });
});

closeButton.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

