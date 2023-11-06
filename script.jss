const inputbox=document.getElementById("input-box");
const listcontanier=document.getElementById("list-comtanier");
function addTask(){
    if(inputBox.value===''){
        alert("you must write something");
    }
    else{
        let li-document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontanier.appendchild(li);
        let span-document.createElement("span");
        span.innerHTML="\u00d/";
        li.appendchild(span)

    }
    inputBox.value=" ";
    saveData();

}

listcontanier.addEventListener("click,function(e){
    if(e.target.tagName==="li"){
        e.target.classList.toggle("ckecked");
        saveData();
    }
    else if(e.target.parentElement.remove());
    saveData();
    }
}.false);
function saveData(){
    localstorage.setItem("data",listcontanier,innerHTML);

}
function showTask(){
    listcontanier.innerHTML.localstorage.getItem("data");
}
showTask();


