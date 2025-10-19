const log = console.log;
// ****** SELECT ITEMS **********


const alert = document.querySelector(".alert");log(alert);
const form = document.querySelector(".grocery-form");log(form);
const grocery = document.getElementById("grocery");log(grocery);
const submitBtn = document.querySelector(".grocery-btn");log(submitBtn);
const container = document.querySelector(".grocery-container");log(container);
const list = document.querySelector(".grocery-list");log(list);
const clearBtn = document.querySelector(".clear-btn");log(clearBtn);




// edit option
let editElement;
let editFlag = false;  //ATTENTION FALSE: Scenario I, TRUE:Scenario II
let editId = "";
// ****** EVENT LISTENERS **********
//submit form
form.addEventListener("submit", addItem);
// ****** FUNCTIONS **********
function addItem(evt){                              /* evt, l'objet événement */ 
evt.preventDefault();
const value = grocery.value; log(value);            /* value: une VALEUR SAISIE */
const id = new Date().getTime().toString(); log(id);/* id: une clé générée par la date */

//I VALUE + NO EDIT FLAG => ITEM CREATION
if(value !== "" && editFlag == false){              /* editFlag == false OU !editFlag */
   const element = document.createElement('article');
   element.classList.add('grocery-item');
   //add attribute data-id
   const attr = document.createAttribute('data-id');
   attr.value = id;
   element.setAttributeNode(attr); 
   //add element to HTML
   element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edt-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`
            //append child
            list.appendChild(element);
            //display alert
            displayAlert("Element was added to the list", "success");
            //show container
            container.classList.add("show-container");
            //add to local storage
            addToLocalStorage(id, value);
            //set back to default
            setBackToDefault();

//II VALUE + EDIT FLAG    
}else if(value !== "" && editFlag == true){         /* editFlag == true OU editFlag */
    log("editing")

//III display alert
}else displayAlert('Please enter a value', "danger");
}

function displayAlert(text, color){
    alert.textContent = text;
    alert.classList.add(`alert-${color}`)
//remove alert
    setTimeout(function(){
    alert.textContent = "";
    alert.classList.remove(`alert-${color}`)
}, 1000);
}


//set back to default
function setBackToDefault(){
    log("Set back to default");
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
    log('Added to local storage');
}
// ****** SETUP ITEMS **********
