
let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click", async function collegeList(){
    let countryName=document.querySelector("#countryName").value;
   let collArr= await getCollege(countryName);
   show(collArr);

 


})

function show(collArr){
    let ul=document.querySelector("#list");
    ul.innerText="";
    
    if(collArr.length === 0)
    {
        let p=document.createElement("p");
        p.innerText="No colleges for such place";
        p.style.color="red";
        ul.appendChild(p);

    }
    else{
        for(let col of collArr){
            let li=document.createElement("li");
            li.innerText=col.name;
            ul.appendChild(li);
        }

    }
   
   

}


async function getCollege(country)
{
    try{
        let res= await axios.get(url+country);
         return res.data;

    }
    catch(err){
        return [];
    }
   
}

