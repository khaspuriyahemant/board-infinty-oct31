
//attach event listner submit



//capture the user's input


//append the text and teh buttonin the list item


//append a list into the unordered list


//varibles
const form = document.getElementById('addForm')
const todoList = document.getElementById('items')
const filter = document.getElementById('filter')


//event listner
   form.addEventListener('submit',addTodo)
   todoList.addEventListener('click', removeItem)
   filter.addEventListener('keyup', filterTodos)


// functiom

function addTodo(e) {
  e.preventDefault()

  //get the input value from the user
  const newTodo = document.getElementById('item').value

  console.log(newTodo)

const li = document.createElement('li')

//add all the classes to the neww todo

li.className = "list-group-item"

//create new delete button
 
const deleteBtn = document.createElement('button')


//add classes to the buttons

deleteBtn.className = "btn btn-danger btn-sm float-end delete"


//add text to delete button

deleteBtn.textContent = 'Delete'


//add the new todo to li element

li.textContent = newTodo

//append the delete button to li

li.append(deleteBtn)


//append li to todolist


todoList.append(li)


document.getElementById('item').value = ''


}



function removeItem(e) {

  if (e.target.classList.contains('Delete')) {
      if (confirm('Are you sure, you want to delete this todo?')) {
          let li = e.target.parentElement

          todoList.removeChild(li)

      }
  }

}

function filterTodos(e) {

  let searchedText = e.target.value.toLowerCase()

  let todos = todoList.getElementsByTagName('li')

  // console.log(todos)
  //covert html collection into array

  Array.from(todos).forEach(function (todo, index) {
      // console.log(todo.firstChild.textContent)

      let todoText = todo.firstChild.textContent

      if (todoText.toLowerCase().indexOf(searchedText) != -1) {
          todo.style.display = 'block'
      } else {
          todo.style.display = 'none'
      }
  })
}


