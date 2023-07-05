import './connect4.css'
import { createBoard } from "./connect4.js";

window.addEventListener("DOMContentLoaded", () => {
    // Initialize the UI.
    createBoard();

    // Open the WebSocket connection and register event handlers.
    const websocket = new WebSocket("ws://192.168.0.34:8001/");

    receiveUserInputs("left", websocket);
    receiveUserInputs("right", websocket);
    receiveUserInputs("up", websocket);
    receiveUserInputs("down", websocket);
    receiveUserInputs("jump", websocket);
});

function receiveUserInputs(buttonName, websocket) {
    document.getElementById(buttonName).addEventListener("click", function () {
        sendDataToServer(websocket, buttonName);
    });
}

function sendDataToServer(websocket, keypress) {
    const event = {
        type: "play",
        keypress: keypress,
    };
    websocket.send(JSON.stringify(event));
}
