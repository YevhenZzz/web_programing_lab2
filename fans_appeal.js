document.getElementById('addComment').onclick = function () {
    let comment = $.trim($("#commentBody").val());
    let author = currentName();
    let time = currentTime();
    let date = currentDate();

    if (comment !== "" && author !== "") {
        const div = document.createElement('div');
        div.innerHTML = `
                    <br>
                    <div class="row justify-content-center">
            <div class="border border-dark rounded text-light bg-dark" style="margin: 0 7% 4% 0; height: 5%; background-color: black">
                            <p> `+ author +`  <br>`  + time +  `<br>` + date + `</p>
                            <p></p>
                            <p></p>
                        </div>
                       <div class="border border-dark rounded col-xs-12 col-sm-12 col-md-8 col-lg-8 text-light bg-dark" style="margin: 0 1% 0 1%; background-color: black">
                 <p>` + comment + `</p>
                        </div>
                    </div>
                    <br>
                    <hr>
                  `;
        document.getElementById('container').append(div);
        comment = "";
        comment.author = "";
    } else {
        alert("Напишіть комментар!");
    }
};

function currentName() {
    let name = prompt("Введіть своє ім'я:");
    if (name === "") {
        return currentName();
    } else return name.trim();
}

function currentTime() {
    let now = new Date();
    return now.getHours() + ":" + now.getMinutes();
}

function currentDate() {
    let now = new Date();
    return now.getDate() + "." + (now.getMonth() + 1) + "." + now.getFullYear();
}