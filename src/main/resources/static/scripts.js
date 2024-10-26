function clear_login(){
        document.getElementById("login_txt").value = "";
}
function clear_password(){
    document.getElementById("password_txt").value = "";
}

function create_obj(){
    document.getElementById("dark_overlay").classList.remove("display_none")

    var e = document.getElementById("DB");
    var value = e.value;

    if (e.value === "stud"){
        document.getElementById("popup_create_stud").classList.remove("display_none")
    }
    if (e.value === "group"){
        document.getElementById("popup_create_group").classList.remove("display_none")
    }
}

function close_popup(){

    var e = document.getElementById("DB");
    var value = e.value;

    if (e.value === "stud"){
        document.getElementById("popup_create_stud").classList.add("display_none")
    }
    if (e.value === "group"){
        document.getElementById("popup_create_group").classList.add("display_none")
    }
    document.getElementById("dark_overlay").classList.add("display_none")

}

function clear_name(){
    document.getElementById("name_txt").value = "";
}
function clear_soname(){
    document.getElementById("soname_txt").value = "";
}
function clear_mail(){
    document.getElementById("mail_txt").value = "";
}
function checkbox_click(){
    if(document.getElementById("admin").checked){
        document.getElementById("registrationFill").classList.remove("display_none")
    }else{
        document.getElementById("registrationFill").classList.add("display_none")
    }

}