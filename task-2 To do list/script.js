const adduserbtn = document.getElementById('adduser');
const btntext =adduserbtn.innerText;
const addname = document.getElementById('username');
const display = document.getElementById('records');
let edit = null;
let userarray  = []; // {name : 'vansh' , name : 'coder'}
let objstr = localStorage.getItem('users');
if(objstr!=null){
    userarray = JSON.parse(objstr); // string to object
}
displayinfo();

//when button click
adduserbtn.onclick=()=>{
    const name = addname.value;
    if(edit!=null){
        userarray.splice(edit ,1, {'name' : name});
        edit = null;

    }
    else{
        userarray.push({'name' : name});
    }   
    saveinfo(userarray);
    addname.value = '';
   
    adduserbtn.innerText = btntext;
}



function saveinfo(userarray){
   let str =  JSON.stringify(userarray); // change in to string
    localStorage.setItem('users', str);
    displayinfo();


}

function displayinfo(){
    let statement ='';
    userarray.forEach((users ,i)=> {
        statement+=` <tr>
        <th scope="row">${i+1}</th>
        <td>${users.name}</td>
        <td><i class=" btn text-white fa fa-edit btn-info mx-2" onclick='Editinfo(${i})'></i> <i class="btn btn-danger text-white fa fa-trash-o" onclick='deleteinfo(${i})'></i></td>
        
      </tr>`;
        
    });
    display.innerHTML = statement;

    
    
}

function Editinfo(id){
    edit = id;
    addname.value = userarray[id].name;
    adduserbtn.innerText ='Savechanges';
    
}

function deleteinfo(id){
    userarray.splice(id ,1);
    saveinfo(userarray);
    
    
}