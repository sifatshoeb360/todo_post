let nameArray=[];

let texArray=[];

function addName(name){
    if(name){
        nameArray.push(name);
    }
}

function addText(msg){
    if(msg){
        texArray.push(msg);
    }
}






document.getElementById("submit").addEventListener('click',() => {

    let name=document.getElementById("name").value;

    addName(name);

    let msg=document.getElementById("msg").value;

    addText(msg);

   
    document.getElementById("wraper").innerHTML="";
    
    for(let i=0;i<nameArray.length;i++){

        let mainDiv=document.createElement("div");

        mainDiv.className="col-md-4 col-sm-6 mb-4";

        let div=document.createElement("div");

        div.className="my-border shadow-lg p-3 h-100";

        let h3=document.createElement("h3");

        h3.className="text-success"

        h3.innerText=nameArray[i];

        div.appendChild(h3);

        let p=document.createElement("p");

        p.className="text-white fs-6"

        p.innerText=texArray[i];

        div.appendChild(p);

        mainDiv.appendChild(div);

        document.getElementById("wraper").appendChild(mainDiv);

        
    }
    
    
    
})

