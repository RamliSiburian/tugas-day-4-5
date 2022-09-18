let dataProject = [];

function addProject(event) {

    event.preventDefault();

    let projectName = document.getElementById("projectName").value
    let startDate = document.getElementById("startDate").value
    let endDate = document.getElementById("endDate").value
    let description = document.getElementById("description").value
    let nodeJS = document.getElementById("nodeJS").checked
    let nextJS = document.getElementById("nextJS").checked
    let reactJS = document.getElementById("reactJS").checked
    let vueJS = document.getElementById("vueJS").checked
    let image = document.getElementById("image").files
    let postAt = new Date();


    if (nodeJS) {
        nodeJS = document.getElementById("nodeJS").value;
    } else {
        nodeJS = "";
    }
    if (nextJS) {
        nextJS = document.getElementById("nextJS").value;
    } else {
        nextJS = "";
    }
    if (reactJS) {
        reactJS = document.getElementById("reactJS").value;
    } else {
        reactJS = "";
    }
    if (vueJS) {
        vueJS = document.getElementById("vueJS").value;
    } else {
        vueJS = "";
    }

    if (projectName == "" || startDate == "" || endDate == "" || description == "") {
        return alert("Field bertanda * harus di isi");
    }
    if (image.length != 0) {
        image = URL.createObjectURL(image[0])
    } else {
        return alert("image harus di isi");
    }

    let project = {
        projectName,
        startDate,
        endDate,
        description,
        image,
        postAt,
        nodeJS,
        nextJS,
        reactJS,
        vueJS
    }

    dataProject.push(project);

    renderProject()

}

function renderProject() {

    document.getElementById("projects").innerHTML = ""

    for (let index = 0; index < dataProject.length; index++) {


        document.getElementById("projects").innerHTML += `
            <div class="card">
                            <img src="${dataProject[index].image}" alt="project">
                            <div class="title">${dataProject[index].projectName} - ${getFullTime(dataProject[index].postAt)}</div>
                            <span>durasi : ${getDistanceTime(dataProject[index].startDate , dataProject[index].endDate)}</span>
                            <div class="detail">
                                ${dataProject[index].description}
                            </div>
                            <div class="technologi">
                                ${dataProject[index].nodeJS}
                                ${dataProject[index].nextJS}
                                ${dataProject[index].reactJS}
                                ${dataProject[index].vueJS}
                            </div>
                            <div class="action">
                                <a href="detailproject.html" class="edit">detail</a>
                                <a href="" class="delete">delete</a>
                            </div>
                        </div>
                    </div>
            `
    }
}

function getFullTime(time) {

    let months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];


    let day = time.getDate();
    let month = time.getMonth();
    let years = time.getFullYear();
    let minutes = time.getMinutes();
    let hours = time.getHours();

    if (hours < 10) {
        hours = `0${hours}`;
    } else if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${months[month]} ${years} ${hours}:${minutes} WIB`;


}

function getDistanceTime(start, end) {

    let startDates = new Date(start);
    let endDates = new Date(end);

    let distance = endDates - startDates;

    let milliSecond = 1000;
    let seconInHours = 3600;
    let hourInDay = 24;

    let distanceDay = Math.floor(distance / (milliSecond * seconInHours * hourInDay));
    let distanceHours = Math.floor(distance / (milliSecond * 3600 * 60));
    let distanceMinutes = Math.floor(distance / (milliSecond * 3600));
    let distanceSecond = Math.floor(distance / (milliSecond * 60));

    // return `${distanceDay} day ${distanceHours} hours ${distanceMinutes} Minutes ${distanceSecond} Seccond Left`;
    if (distanceDay > 0) {
        return `${distanceDay} Day Left`
    } else if (distanceHours > 0) {
        return `${distanceHours} Hours Left`
    } else if (distanceMinutes > 0) {
        return `${distanceMinutes} Minutes Left`
    } else {
        return `${distanceSecond} Second Left`
    }


}