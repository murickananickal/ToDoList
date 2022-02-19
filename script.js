var email = document.getElementById('typeEmailX')    //line 1
var password = document.getElementById('typePasswordX')
function validate(){
    if(document.email.value =="admin" && document.password.value=="12345") {
        window.open('todolist.html')
        
    }

}
document.getElementById("myButton").onclick = function () {
    location.href = "todolist.html";
};