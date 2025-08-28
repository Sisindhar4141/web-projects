document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const username = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();    
    const password = document.getElementById("password").value.trim();
    if(!username || !email || !password){
        alert("Plase fill the form....");
    }else{
        alert("login sucessfully.. " + username);
    }
});
const addbtn = document.getElementById("addbtn");
const textinput = document.getElementById("textinput");
const taskList = document.getElementById("taskList");
function addtask(){
    const tasktext = textinput.value.trim();
    if (tasktext === ""){
        alert("Please enter the task")
        return
    }
    const li = document.createElement("li");
    li.textContent = tasktext;
    const delbtn = document.createElement("button");
    delbtn.textContent = "❌";
    delbtn.style.margin = "10px";
    delbtn.style.cursor = "pointer";
    delbtn.onclick =()=>li.remove()
    li.appendChild(delbtn)
    taskList.appendChild(li)
    textinput.value = "";
}
addbtn.addEventListener('click', addtask);
textinput.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
        addtask()
    }
})
