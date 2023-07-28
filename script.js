const todoform=document.querySelector("#todo-form")
const todoinput=document.querySelector('#form-input')
const todolist=document.querySelector('#todo-list')


let arr1=[];

todoform.addEventListener('submit',(event)=>{
  event.preventDefault();
 
  const datas={
    id:Date.now(),
    name:todoinput.value,
    completed:false
  }
  arr1.push(datas);
  displaylist();
 

})

 function displaylist(){
  arr1.forEach((datas)=>{
  const li=document.createElement('li');
  li.classList.add('list-group-item');//creating the list group items in nicer way
  const div=document.createElement("div");
  const checkbox=document.createElement('input');
  checkbox.type='checkbox';
  checkbox.checked=datas.completed;
  checkbox.classList.add('form-check-input','me-2');

  const span=document.createElement('span');
  span.innerText=datas.name;
  span.classList.add('ms-3');

  
  div.append(checkbox);
  div.append(span);
  li.append(div);
  todolist.append(li);


})
  
}
