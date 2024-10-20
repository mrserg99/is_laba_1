function tables_check() {


    var e = document.getElementById("DB");
    var value = e.value;

    setTimeout(tables_check, 100);
    if (e.value === "stud") {
        document.getElementById("table_stud").classList.remove("display_none")
        document.getElementById("table_group").classList.add("display_none")


    }
    if (e.value === "group") {
        document.getElementById("table_group").classList.remove("display_none")
        document.getElementById("table_stud").classList.add("display_none")


    }

    setTimeout(tables_check, 100);
}