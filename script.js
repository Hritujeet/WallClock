const timeBlock = document.getElementById("timeBlock");

function updateTime() {
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    timeBlock.innerHTML = ` <div class="container-fluid py-5">
    <h1 class="display-5">Hey there!<br> Time | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</h1>
    <hr>
    <h1 class="col-md-8 fs-4 fw-light"><strong>On</strong> <br> ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}</h1>
    <br>
    <h4>UTC ${date.getTimezoneOffset()}</h4>
  </div>`
}
