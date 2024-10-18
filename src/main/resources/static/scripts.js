
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

function change(p){
    if (p===1) {
        var a = document.getElementById("1_std_id").value;
    }
    if(p===2){
        var a = document.getElementById("2_std_id").value;
    }
    var valueA = a;

    document.getElementById("dark_overlay").classList.remove("display_none")

    var e = document.getElementById("DB");
    var value = e.value;

    if (e.value === "stud"){
        document.getElementById("popup_create_stud").classList.remove("display_none")
        document.getElementById("popup_stud_title").innerHTML=valueA;
    }
    if (e.value === "group"){
        document.getElementById("popup_create_group").classList.remove("display_none")
        document.getElementById("popup_group_title").innerHTML=valueA;
    }


}