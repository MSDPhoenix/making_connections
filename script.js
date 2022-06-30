function changeName() {
    const name_element = document.querySelector("#user_info > h1");
    old_name = name_element.innerText
    const new_name = prompt("Please enter new name",old_name);
    if (new_name != null) {
        name_element.innerHTML = new_name;
    }
}

function accept_reject(id,value) {
    const row = document.getElementById(id);
    number_change(value);
    if (value == 'accept') {
        remove_circles(id);
        move_row(row);
    }
    row.remove();
}

function remove_circles(id) {
    const circle1 = document.querySelector("#"+id+">img[alt='accept']");
    const circle2 = document.querySelector("#"+id+">img[alt='close']");
    circle1.remove();
    circle2.remove();
}

function move_row(row) {
    const connections = document.getElementById("connections");
    connections.innerHTML += row.outerHTML;
}

function number_change(value) {
    const requests = document.getElementById('span1');
    let requests_number = Number(requests.innerText);
    requests_number --;
    requests.innerText = requests_number

    const connections = document.getElementById('span2');
    let connections_number = Number(connections.innerText);
    if (value == 'accept') {
        connections_number ++;
        connections.innerText = connections_number;
    }
}
