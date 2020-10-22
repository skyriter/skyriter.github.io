// localStorage.setItem(" " {});
// let value = localStorage.getItem("");

function getDataForForm(current,destination) {
    window.addEventListener("DOMContentLoaded", function() {
        const orderButton = document.querySelector("button.order-link[data-order]");
        orderButton.addEventListener("click", function(e) {
            const button = e.currentTarget;
            const container = button.parentNode;

            const order = {
                id: button.getAttribute("data-order"),
                title: container.querySelector("h1").innerText,
                date: container.querySelector("h2").innerText,
                speaker: container.querySelector("h3").innerText
            };
            localStorage.setItem("order", JSON.stringify(order));

            
            const url = window.location.href.replace(current, destination);
            window.location.href = url;
        });
    });
}