const username_value = "admin";
const password_value = 1234;
function login_fun(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var menus1 = document.querySelector('.hidden1');
    var menus2 = document.querySelector('.hidden2');
    var menus3 = document.querySelector('.hidden3');
    var menus4 = document.querySelector('.hidden4');
    var search_bar = document.querySelector(".search1");
    var logout_btn = document.querySelector(".btn");
    var login_disappear = document.querySelector(".right");


    if(username == username_value && password == password_value){
        menus1.classList.toggle('visible');
        menus2.classList.toggle('visible');
        menus3.classList.toggle('visible');
        menus4.classList.toggle('visible');
        
        search_bar.classList.toggle('hide_search');

        logout_btn.classList.toggle('btn_active');

        login_disappear.classList.toggle('login_disappear');

		document.getElementById("username").value = "";
		document.getElementById("password").value = "";
        alert("Login Successful!");
    }else{
        alert("Wrong username or password!");
    }
}

function logout_fun(){
    var menus1 = document.querySelector('.hidden1');
    var menus2 = document.querySelector('.hidden2');
    var menus3 = document.querySelector('.hidden3');
    var menus4 = document.querySelector('.hidden4');
    var search_bar = document.querySelector(".search1");
    var logout_btn = document.querySelector(".btn");
    var login_disappear = document.querySelector(".right");

    alert("Are you sure you want to logout!");
    menus1.classList.remove('visible');
    menus2.classList.remove('visible');
    menus3.classList.remove('visible');
    menus4.classList.remove('visible');  
    search_bar.classList.remove('hide_search');
    logout_btn.classList.remove('btn_active');
    login_disappear.classList.remove('login_disappear');
}