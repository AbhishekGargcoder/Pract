let jsonData = '{"fact":"A form of AIDS exists in cats.","length":30}';
let url  = "http://universities.hipolabs.com/search?name=";
// fetch(url)
//  .then((res)=>{
//     console.log(res);
//     return res.json();
//  })
//  .then((data)=>{
//     console.log(data);
//  })
let input = document.querySelector("input");
let p = document.querySelector("p");
let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let ul = document.querySelector("#list");
    ul.innerText = "";
    let res =await axios.get(url+input.value);
    let colArr = res.data;
    for(col of colArr){
        let li = document.createElement("li");
        li.innerText = col.name;
        ul.append(li)   ;
    }
})
let country = "india";
async function getColleges(){
    let res = axios.get(url+country);
    console.log(res);
}
// let p = document.querySelector("p");
// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let res = await fetch(url);
//     let data =await res.json();
//     p.innerText = data.fact;
//     console.log("data :" , data);
// })
// async function getFacts(){
 
// }