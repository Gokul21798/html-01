function validate_doc(){
let fname = document.forms["myform"]["fname"].value;
let lname = document.forms["myform"]["lname"].value;
let rno = document.forms["myform"]["rno"].value;
let num = document.forms["myform"]["num"].value;
if(fname=='' || lname=='' || rno==''){
    alert("Mandatory fields should not be blank");
    return false;
}
else if(fname.length>20 || lname.length>20){
    alert("Name should not exceed 20 characters");
    return false;
}
else if(num.length<10 || num.length>10){
    alert("Number should have 10 digits");
    return false;
}
}

function validate_dept(){
    let dname = document.forms["myform"]["dname"].value;
    let desc = document.forms["myform"]["desc"].value;
    if(dname.length>30){
        alert("Name should not exceed 30 characters");
        return false;
    }
    else if(desc.length>50){
        alert("Description should not exceed 50 characters");
        return false;
    }
}

function validate_pat(){
    let pname = document.forms["myform"]["pname"].value;
    let fname = document.forms["myform"]["fname"].value;
    let num = document.forms["myform"]["num"].value;
    if(pname.length>30 || fname.length>30){
        alert("Name should not exceed 30 characters");
        return false;
    }
    else if(num.length<10 || num.length>10){
        alert("Number should have 10 digits");
        return false;
    }
}