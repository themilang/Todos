const todoform=document.querySelector("#todo-form")
const todoinput=document.querySelector('#form-input')
const todolist=document.querySelector('#todo-list')


let arr1=[];
let todoeditdata;

todoform.addEventListener('submit',(event)=>{
  event.preventDefault();
 
  const data={
    id:Date.now(),
    name:todoinput.value,
    completed:false
  }
  arr1.push(data);
  displaylist();
  todoform.reset();
 

})

 function displaylist(){
  todolist.innerHTML='';
  arr1.forEach((data)=>{
  const li=document.createElement('li');
  li.classList.add('list-group-item','d-flex','justify-content-between');//creating the list group items in nicer way
  const div=document.createElement("div");
  const checkbox=document.createElement('input');
  checkbox.type='checkbox';
  checkbox.checked=data.completed; //true
  checkbox.classList.add('form-check-input','me-2');
  checkbox.addEventListener('change',(event)=>{
    event.preventDefault();
    data.completed=event.target.checked;
    displaylist();
  
  
  })


  const span=document.createElement('span');
  span.innerText=data.name;
  span.classList.add('ms-3');
  span.style.textDecoration = data.completed ? 'line-through ' : 'none';

  div.append(checkbox);
  div.append(span);
  li.append(div);




  //create a div for edit and delete button 

  const btndiv=document.createElement('div');




 //edit button
 const editButton=document.createElement('button');
 editButton.classList.add('btn','btn-secondary','btn-sm','me-2');

 editButton.innerText='Edit';
 editButton.setAttribute('data-bs-toggle','modal');
 editButton.setAttribute('data-bs-target','#editmodal');
 editButton.addEventListener('click',(event=>{
  event.preventDefault();
  document.getElementById('form-edit').value=data.name;
  todoeditdata=data.id;


//to acess the id of the data that is to be edit inside the modal it requires a 
// another input where we can get the id keeping the input type hidden
// and acessing by get element by id
 

//we also can use the local storage and session or cookie for this


  localStorage.setItem('dataid',data.id);
  sessionStorage.setItem('dataid',data.id);

 }))




 btndiv.append(editButton);
 //delete button
const deleteButton=document.createElement('button');
deleteButton.classList.add('btn','btn-danger','btn-sm','ms-2');
deleteButton.innerText='Delete';

//usi
deleteButton.addEventListener('click',(event)=>{
  event.preventDefault();

 arr1 = arr1.filter((value)=>{
    return value.id !== data.id;
 })
displaylist();
})










  btndiv.append(deleteButton);
  li.append(btndiv);
  todolist.append(li);


})




  
}
const editHandler=(event)=>{
  event.preventDefault();
  // console.log(document.getElementById('form-edit').value);
  // console.log(todoeditdata)
  arr1=arr1.map((value)=>{
    return value.id===Number(todoeditdata)? {
      id:Number(todoeditdata),
      name:document.getElementById('form-edit').value,
      completed:false
    }:value;
  })
  displaylist();
  document.getElementById('btn-close').click();
}