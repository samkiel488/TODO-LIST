let items = [];
const itemsDiv = document.getElementById('items');
const input = document.getElementById("itemInput");
const imageInput = document.getElementById("imageInput");
const alarmInput = document.getElementById("alarmInput");
const storageKey = "Items";

class TodoItem {
    constructor(text, image = null, alarm = null) {
        this.text = text;
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "Inline-block"
        text.style.marginRight = "10px"
        text.style.marginRight = "10px"
        text.style.alignItems = "left"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItems(idx)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}



function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems) 
        renderItems()
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems)
}

function addItem() {
        const value = input.value;
        if (!value) {
            alert("How far why you dey add empty item na \nYou think say na magic we dey do for here?")
            return
        }

        items.push(value)
        renderItems()
        input.value = "";
        saveItems()
}

function removeItems(idx) {
        items.splice(idx, 1)
        renderItems()
        saveItems()
}


document.addEventListener("DOMContentLoaded", loadItems)

console.log("SAMKIEL's TODO List is running just fine..")