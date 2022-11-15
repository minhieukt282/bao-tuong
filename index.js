function saveComment() {
    let listComment = JSON.parse(localStorage.getItem("listComment")) ?? [];
    let userName = document.getElementById("username").value;
    let comment = document.getElementById("comment").value;
    let newComment = {
        username: userName, comment: comment
    }
    if (userName && comment) {
        listComment.push(newComment)
        localStorage.setItem("listComment", JSON.stringify(listComment));
    }
    printComment()
}

function printComment() {
    let listComment = JSON.parse(localStorage.getItem("listComment")) ?? [];
    let screen = ''
    listComment.forEach(item => {
        screen += `<ul class="media-list">
                <li class="media">
                    <div class="media-body">
                        <div class="well well-lg" style="padding: 10px 15px">`
        screen += ` <h3 class="media-heading text-uppercase reviews">${item.username}: </h3>`
        screen += `<h4 class="media-comment" style="font-size: 135%; font-weight: bold">
                                "${item.comment}"
                            </h4>
                        </div>
                    </div>
                </li>
            </ul>`
    })
    document.getElementById("result").innerHTML = screen
}