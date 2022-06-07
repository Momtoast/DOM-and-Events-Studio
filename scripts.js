
window.addEventListener("load", function() {

    let takeoff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let abort = document.getElementById("missionAbort");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let rocket = document.getElementById("rocket");
    let height = parseInt(spaceShuttleHeight.innerHTML);
    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "160px";

    takeoff.addEventListener("click", function() {
        let shuttleReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (shuttleReady === true) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.background = "blue";
            spaceShuttleHeight.innerHTML = "10,000";
            movement = parseInt(rocket.style.bottom) + 10 + "px";
            rocket.style.bottom = movement;
        }
    });

    landing.addEventListener("click", function() {
        let shuttleReady = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (shuttleReady === true) {
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.background = "green";
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.bottom = "0px";
            rocket.style.left = "160px";
        }
    });

    abort.addEventListener("click", function() {
        let shuttleReady = window.confirm("Confirm that you want to abort the mission.");
        if (shuttleReady === true) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.background = "green";
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.bottom = "0px";
            rocket.style.left = "160px";
        }
    });

    

    up.addEventListener("click", function() {
        movement = parseInt(rocket.style.bottom) + 10 + "px";
        rocket.style.bottom = movement;
        height = height + 10000;
        spaceShuttleHeight.innerHTML = height;
    });

    down.addEventListener("click", function() {
        movement = parseInt(rocket.style.bottom) - 10 + "px";
        rocket.style.bottom = movement;
        height = height - 10000;
        spaceShuttleHeight.innerHTML = height;
    });

    right.addEventListener("click", function() {
        movement = parseInt(rocket.style.left) + 10 + "px";
        rocket.style.left = movement;
    });

    left.addEventListener("click", function() {
        movement = parseInt(rocket.style.left) - 10 + "px";
        rocket.style.left = movement;
    });

});