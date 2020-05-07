uptodo()
localStorage.tasks= JSON.stringify([]);
var tasksArr=[];
function addtolist()
{
    var input=document.getElementById("myinput");
    if(input.value != "")
    {
     tasksArr=JSON.parse(localStorage.tasks);
    tasksArr.push(input.value)
    localStorage.tasks=JSON.stringify(tasksArr);
    input.value=""
    input.focus();
    uptodo() 
    }
    else{
        alert("Cannot add empty task")
    } 
}
function uptodo()
{
    var ul1=document.getElementById("tasks");
     tasksArr=JSON.parse(localStorage.tasks);
    var html="";
    for(var i=0;i<tasksArr.length ;i++)
    {
        console.log();
        html+='<li class="mylist" id='+ i +'>'+tasksArr[i]+'<span class="rmvbtn" onclick="myrmv(this)"><img src="t5.png"></span></li>';
    }
    ul1.innerHTML=html;
}
function myrmv(spantag)
    {
        var getid=spantag.parentElement.id;
        tasksArr=JSON.parse(localStorage.tasks);
        tasksArr.splice(getid,1);
        localStorage.tasks=JSON.stringify(tasksArr)
        uptodo()
    }
    
