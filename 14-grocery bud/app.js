const log = console.log;
// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");log(alert);
const form = document.querySelector(".grocery-form");log(form);
const grocery = document.getElementById("grocery");log(grocery);
const submitBtn = document.querySelector(".submit-btn");log(submitBtn);
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
//clear items
clearBtn.addEventListener('click', clearItems);
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
              <button type="button" class="edit-btn"> 
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`
            const editBtn = element.querySelector('.edit-btn');//Ajout dynamique à
            const deleteBtn = element.querySelector('.delete-btn');//l'élément créé
            editBtn.addEventListener('click', editItem);
            deleteBtn.addEventListener('click', deleteItem);
            
            //append child
            list.appendChild(element);
            //display alert
            displayAlert("Element was added to the list", "success");
            //show container
            container.classList.add("show-container");
            //add to local storage
            addToLocalStorage(id, value);
            //set back to default
            setBackToDefault()
         
//II VALUE + EDIT FLAG    
}else if(value !== "" && editFlag == true){         /* editFlag == true OU editFlag */
    editElement.innerHTML = value;
    displayAlert('value changed', 'success')
    //edit local storAge
    editLocalStorage(editId, value);
    setBackToDefault();

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

//remove items
function clearItems (){
  const items = document.querySelectorAll('.grocery-item');
  if(items.length >0){
    items.forEach(function(item){   
      list.removeChild(item);
    })
  }
  container.classList.remove('show-container');
  displayAlert("List is empty", "success");
  setBackToDefault();
  //remove data from local storage
}

//delete item
function deleteItem (evt){
  const element = evt.currentTarget.parentElement.parentElement;
  const id = element.dataset.id; //on récupère l'id de l'élément 
  list.removeChild(element);     //list is parent element
  if(list.children.length === 0){
    container.classList.remove('show-container');
  }
  displayAlert('Item removed', "danger");
  setBackToDefault();
}

//edit item
function editItem (evt){
  //accéder à l'article depuis le bouton edit
  const element = evt.currentTarget.parentElement.parentElement;
  log(element);
  //get the element value (sugar, milk...)
  const editElement = evt.currentTarget.parentElement.previousElementSibling;
  log(editElement);
  //set form value
  grocery.value = editElement.innerHTML; //Place la valeur sucre, milk...dans
                                         //la zone de saisie input
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = "Edit";                                     
}

//set back to default
function setBackToDefault(){
  grocery.value = "";         //Nettoie l'attribut value de l'élmt INPUT
  let editFlag = false;
  let editId = "";
//  submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
    localStorage.setItem('bread', ['item7', 'item8']);
    localStorage.removeItem('friends')
}
function removeFromLocalStorage(id){};
function editLocalStorage(id, value){};
// ****** SETUP ITEMS **********
