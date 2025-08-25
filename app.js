const inputMessage = document.querySelector(".search")
const sendButton = document.querySelector(".btn-send")
const chatMessages = document.querySelector(".chat-messages")

sendButton.addEventListener("click", sendMessage)

// declaracion de funcion

function sendMessage() {
  const message = inputMessage.value

  const divMessage = document.createElement("div")
  divMessage.classList.add("message-sent")

  const text = document.createElement("p")
  text.textContent = message

  divMessage.appendChild(text)

  //creando el timestamp
  const timestamp = document.createElement("p")
  timestamp.classList.add("timestamp")
  timestamp.textContent = new Date().toLocaleTimeString()

  chatMessages.appendChild(divMessage)

  inputMessage.value = ""

}