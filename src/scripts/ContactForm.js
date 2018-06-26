// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.

const submitForm = () => {
    let num = 0
    const article = document.createElement("article")
    const nameP = document.createElement("p")
    const numberP = document.createElement("p")
    const addressP = document.createElement("p")
    const numP = document.createElement("p")
    nameP.textContent = nameInput.value
    numberP.textContent = numberInput.value
    addressP.textContent= addressInput.value
    numP.textContent = num++
    output.appendChild(article)
    article.appendChild(nameP)
    article.appendChild(numberP)
    article.appendChild(addressP)
    article.appendChild(numP)
}

const output = document.querySelector("#output")

const container = document.querySelector("#container");

const nameInput = document.createElement("input");
nameInput.setAttribute("id", "name-input")
nameInput.placeholder = "Name"
container.appendChild(nameInput)

const numberInput = document.createElement("input");
numberInput.setAttribute("id", "number-input")
numberInput.placeholder = "Phone Number"
container.appendChild(numberInput)

const addressInput = document.createElement("input");
addressInput.setAttribute("id", "address-input")
addressInput.placeholder = "Address"
container.appendChild(addressInput)

const submitButton = document.createElement("button")
submitButton.textContent = "submit"
container.appendChild(submitButton)

submitButton.addEventListener("click", submitForm)
