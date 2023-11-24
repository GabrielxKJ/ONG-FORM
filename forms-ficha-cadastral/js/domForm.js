document.getElementById("ong-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);
    console.log(formData);
    console.log("cheguei");
})