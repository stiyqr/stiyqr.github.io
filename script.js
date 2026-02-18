function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function copyEmail() {
    const email = "lukitaveronica@gmail.com";
    const tooltip = document.querySelector(".tooltip");
    
    navigator.clipboard.writeText(email).then(() => {
        const tooltiptext = document.querySelector(".tooltiptext");
        tooltiptext.textContent = "Copied!";

        tooltip.addEventListener("mouseleave", function reset() {
            tooltiptext.textContent = "Copy email";
            tooltip.removeEventListener("mouseleave", reset);
        });

    }).catch((err) => {
        console.error("Failed to copy email: ", err);
    });


    // setTimeout(() => {
    //     tooltiptext.textContent = "Copy email";
    // }, 2000);
}