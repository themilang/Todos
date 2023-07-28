const todoform=document.querySelector("#todo-form")
const todoinput=document.querySelector('#form-input')
const todolist=document.querySelector('#todo-list')


let arr1=[];

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
  li.classList.add('list-group-item');//creating the list group items in nicer way
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
  span.style.textDecoration = data.completed ? 'line-throgh' : 'none';

  
  div.append(checkbox);
  div.append(span);
  li.append(div);
  todolist.append(li);


})
  
}
