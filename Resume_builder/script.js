
function addNewWe() {

    let newNode = document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("weField");
        newNode.classList.add("mt-2");
        newNode.setAttribute("rows",3);

    let weOb = document.querySelector("#we");
    let weAddbtn =document.querySelector("#weAddButton");

    weOb.insertBefore(newNode, weAddbtn);
}

function addNewED() {
  
    let newNode = document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("EdField");
        newNode.classList.add("mt-2");
        newNode.setAttribute("rows",3);

    let EdOb = document.querySelector("#education");
    let EdAddbtn =document.querySelector("#Edbtn");

   EdOb.insertBefore(newNode, Edbtn);
}


function addNewSkill() {
  
    let newNode = document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("skField");
        newNode.classList.add("mt-2");
        newNode.setAttribute("rows",3);

    let sOb = document.querySelector("#skill");
    let skillAddbtn =document.querySelector("#skillAddButton");

   sOb.insertBefore(newNode, skillAddbtn);
}


function generateCV() {

   
    let nameField = document.getElementById("nameField").value;

    let nameG = document.getElementById("nameG");

    nameG.innerHTML = nameField;
    //name

    document.getElementById("nameG2").innerHTML = nameField;

    //contact
    document.getElementById("contactG").innerHTML = document.getElementById("contactField").value;

    //address
    document.getElementById("addressG").innerHTML = document.getElementById("AddressField").value;

    //email
    document.getElementById("emailG").innerHTML = document.getElementById("Email").value;

    //social links
    document.getElementById("GitG").innerHTML = document.getElementById("GitField").value;

    document.getElementById("instaG").innerHTML = document.getElementById("InstaField").value;

    document.getElementById("linkedG").innerHTML = document.getElementById("linkedField").value;


    //objective

    document.getElementById("objectiveG").innerHTML = document.getElementById("objectiveField").value;


    //work experiences
    let wes =  document.getElementsByClassName("weField");
    
    let str = ' ';

    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;

    }

    document.getElementById("weG").innerHTML = str;


    //education

    let ed = document.getElementsByClassName("EdField");

    let str0 = ' ';

    for (let e of ed)
    {
       str0 = str0 + `<li> ${e.value} </li>`;
    }

    document.getElementById("eG").innerHTML = str0;

    // skill 

     let sik = document.getElementsByClassName("skField");

    let strp = '';

    for (let e of sik){
      strp  = strp + `<li> ${e.value}</li>`;
    }

    document.getElementById("skillG").innerHTML = strp;


    // image 
    let file =document.getElementById("imgField").files[0];
    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);
    console.log(reader.result);


    reader.onloadend =function (){
    document.getElementById("imgG").src = reader.result;
    }
    document.getElementById("cv-form").style.display ='none';
    document.getElementById("cv-template").style.display = "block";
  
}


    //printcv
     function printCV() {
        window.print();
     }
    
    
