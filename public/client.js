'use strict'

window.onload = function() {
  // Get a reference to the div on the page that will display the
  // message text.

  /////////////////////parte del receiver///////////////////////////
  var messageEle = document.getElementById('message');

  // A function to process messages received by the window.
  function receiveMessage(e) {
    // Check to make sure that this message came from the correct domain.
    if (e.origin !== "http://localhost")
      return;

    // Update the div element to display the message.
    messageEle.innerHTML = "Message Received: " + e.data;
  }

  // Setup an event listener that calls receiveMessage() when the window
  // receives a new MessageEvent.
  window.addEventListener('message', receiveMessage);
  ////////////////////////////////////////////////////////////////////
  /////////////////////parte del sender////////////////////////////////

  //var receiver = document.getElementById('sender-button').contentWindow;

  // Get a reference to the 'Send Message' button.
  const btn = document.getElementById('sender-button');

  // A function to handle sending messages.
  function sendMessage(e) {
    const datos = {
      name: 'javier',
      surname: 'aldana',
      age: 30
    };
    // Prevent any default browser behaviour.
    e.preventDefault();
    parent.postMessage(datos,'http://localhost');  //  `*` on any domain
  }

  // Add an event listener that will execute the sendMessage() function
  // when the send button is clicked.
  btn.addEventListener('click', sendMessage);
  /////////////////////////////////////////////////////////////////////
}
