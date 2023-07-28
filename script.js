const todoform=document.querySelector("#todo-form");
const todoinput=document.querySelector("#form-input");
const todolist=document.querySelector("#todo-list");


const todoarr=[];

todoform.addEventListener('submit',(event)=>{
    event.preventDefault();
    const tododata={
     id:Date.now(),
     name:todoinput.value,
     completed:false

    }

  todoarr.push(tododata);
  console.log(todoarr);
  dispalylist();
  todoform.reset();

})
const dispalylist=()=>{
    todoarr.forEach((tododata)=>{
        const li=document.createElement('li')
     li.classlist.add('list-group-item');
     const div=document.createElement('div');
     const span=document.createElement('span');
     span.innerText=tododata.name;
     span.classlist.add('ms-2');
     div.append(span)
     li.append(div);


    })
}