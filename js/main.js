

$(".icon-bar").click(function(){
   
    let left =$(".setting").css("left")
    if(left=="0px"){ 
        console.log("sdfvsadv");
         let widths=$(".part1").outerWidth(true)
          
    $(".setting").animate({left:`-${ widths}`},1000)
    $(".icon-bar i").removeClass("fa-x");
    $(".icon-bar i").addClass("fa-align-justify");

    }else{
        $(".setting").animate({left:"0px"},1000)
        $(".icon-bar i").removeClass("fa-align-justify");
    $(".icon-bar i").addClass("fa-x");
    }
   
})
let widths=$(".part1").outerWidth(true)
          
$(".setting").animate({left:`-${ widths}`},1000)

function close(){
     
    let widths=$(".part1").outerWidth(true)
          
    $(".setting").animate({left:`-${ widths}`},1000)
    $(".icon-bar i").removeClass("fa-x");
    $(".icon-bar i").addClass("fa-align-justify");


}

// document.querySelector(".details").classList.add("d-none");
// document.querySelector(".details").classList.remove("d-none");


/********************************************************** */

let gameList=[]
async function getDataGames(r) {
    document.querySelector(".search1").classList.add("d-none"); 
    let api = await fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${r}`)
    let response =await api.json()
    gameList= response.meals
    // console.log(gameList );
    diplayGmaes(gameList)
}

getDataGames("")


function diplayGmaes(m){
    console.log("done2");
 let temp=""
 m.forEach((el)=>{
    temp+=` <div reid=${el.idMeal} class=" col-lg-3 col-md-6 col-sm-12 photo">
    <div class="rounded-2 position-relative cont overflow-hidden">
    <img src=${el.strMealThumb} class="w-100" alt="">
     <div class="layer   position-absolute ">
        <h4>${el.strMeal}</h4>
     </div>
    </div>
</div> `

 })
 document.getElementById("mymeals").innerHTML=temp
//  console.log(gameList[0].id);
get()
}

function get(){
let items= document.querySelectorAll(".photo")
for(let i=0;i<items.length;i++){
    items[i].addEventListener("click",function(){
             
        let xd=this.getAttribute("reid")
        console.log(xd);
        document.querySelector(".meals").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
        getdetails( xd)
    })
}
}







/********************************** */

var closeEl =document.querySelector("#close")

closeEl.addEventListener("click",closeFun)
function closeFun(){
    document.querySelector(".meals").classList.remove("d-none");
    document.querySelector(".details").classList.add("d-none");
}









// getdetails()



/********************************************* */
let detailData=[]
async function getdetails(r) {
     
    let det = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${r}`)
    let response =await det.json()
    detailData = response.meals[0]
    console.log("1234")
    console.log(detailData );
    displaydetails(detailData)
    
}
function displaydetails(h){
    document.querySelector(".search1").classList.add("d-none");

    document.querySelector(".details").classList.remove("d-none");
    document.querySelector(".meals").classList.add("d-none");
    document.querySelector(".areameals").classList.add("d-none");
    document.querySelector(".intmeals").classList.add("d-none");
    document.querySelector(".search1").classList.add("d-none");
    document.querySelector(".catmeals").classList.add("d-none");

    console.log("jhg");
    console.log(detailData.strMeal);
    let m=''
    for(let i=1;i<20;i++)
    {      
        m+=`<li class="alert alert-info m-2 p-1 "  id="plus">${h[`strMeasure${i}`]} ${h[`strIngredient${i}`]}</li>`
    }




    let temp =""
    // detailData.forEach((el)=>{
        temp +=` 
        <div class="col-md-4">
        <img src=${detailData.strMealThumb} class="w-100 rounded-2" alt="">
        <h2>${detailData.strMeal}</h2>
     </div>
     <div class="col-md-8">
        <h2>Instructions</h2>
        <p>${detailData.strInstructions}</p>
        <h3>Area : ${detailData.strArea}</h3>
        <h3>Category : ${detailData.strCategory} </h3>
        <h3>Recipes :</h3>
        <ul class="list-unstyled de-list d-flex flex-wrap">
           ${m} 
        </ul>
        <h3>Tags :</h3>
       <ul class="list-unstyled de-list d-flex flex-wrap">
        <li class="alert alert-danger m-2 p-1">${detailData.strTags}</li>
    </ul>

    <a target="_blank" href=${detailData.strSource} class="btn btn-success">Source</a>
    <a  target="_blank" href=${detailData.strYoutube} class="btn btn-danger">Youtube</a>
     </div>
    `
    
    // })
    // console.log(detailData);
    document.getElementById("detailsss").innerHTML=temp
}
 
 
 


 /**********************************************************category */

 let catList=[]
async function category() {
    close()
    
    document.querySelector(".meals").classList.add("d-none");
    document.querySelector(".areameals").classList.add("d-none");
    document.querySelector(".intmeals").classList.add("d-none");
    document.querySelector(".search1").classList.add("d-none");
    document.querySelector(".catmeals").classList.remove("d-none");
    document.querySelector(".details").classList.add("d-none");

    let api2 = await fetch( `https://www.themealdb.com/api/json/v1/1/categories.php`)
    let response2 =await api2.json()
    catList= response2.categories 
    // console.log(catList );
    // diplaycategory()

    diplaycategory()
     
}

 

function diplaycategory(){

    // console.log("354");
    let temp=""
    catList.forEach((el)=>{
       temp+=` <div reig=${el.strCategory}   class=" col-lg-3 col-md-6 col-sm-12 photo1">
       <div class="rounded-2 position-relative cont overflow-hidden">
       <img src=${el.strCategoryThumb} class="w-100" alt="">
        <div class="layer1   position-absolute text-center text-black p-2">
         
           <h4 >${el.strCategory}</h4> 
           
            <p>${el.strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
        </div>
       </div>
   </div> `
    
    })
    document.getElementById("mycategory").innerHTML=temp
   //  console.log(gameList[0].id);
   
     get1()
   }
   function get1(){
    let items1= document.querySelectorAll(".photo1")
    for(let i=0;i<items1.length;i++){
        items1[i].addEventListener("click",function(){
                 
            let xd1=this.getAttribute("reig")
            console.log(xd1);
             document.querySelector(".catmeals").classList.add("d-none");
            // document.querySelector(".details").classList.remove("d-none");
            document.querySelector(".meals").classList.remove("d-none");
        // document.querySelector(".details").classList.remove("d-none");
              getDataGames(xd1)
        })
    }
    }



    /**********************************************area */
    let areaList=[]
async function area() {
    close()
    document.querySelector(".meals").classList.add("d-none");
    document.querySelector(".catmeals").classList.add("d-none");
    document.querySelector(".intmeals").classList.add("d-none");
    document.querySelector(".areameals").classList.remove("d-none");
    document.querySelector(".details").classList.add("d-none");
    let api3 = await fetch( `https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let response3 =await api3.json()
    areaList= response3.meals 
    // console.log(catList );
    // diplaycategory()
    diplayarea()
}

 

function diplayarea(){

    // console.log("354");
    let temp=""
    areaList.forEach((el)=>{
       temp+=`  <div re=${el.strArea} class="col-md-3 photo2">
       <div class="rounded-2 text-center cursor-pointer text-light">
               <i class="fa-solid fa-house-laptop fa-4x"></i>
               <h3>${el.strArea}</h3>
       </div>
</div> `
    
    })
    document.getElementById("myarea").innerHTML=temp
   //  console.log(gameList[0].id);
   
      get2()
   }
   function get2(){
    let items1= document.querySelectorAll(".photo2")
    for(let i=0;i<items1.length;i++){
        items1[i].addEventListener("click",function(){
                 
            let xd1=this.getAttribute("re")
            console.log(xd1);
             document.querySelector(".areameals").classList.add("d-none");
            // document.querySelector(".details").classList.remove("d-none");
            document.querySelector(".meals").classList.remove("d-none");
        // document.querySelector(".details").classList.remove("d-none");
        getData(xd1)
        })
    }
    }
    let areaList1=[]
async function getData(r) {
     
    let api = await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?a=${r}`)
    let response =await api.json()
    areaList1= response.meals
    // console.log(gameList );
    diplayGmaes(areaList1)
}
/*******************************************************integ */
let intList=[]
async function ingrediants() {
    close()
    document.querySelector(".meals").classList.add("d-none");
    document.querySelector(".areameals").classList.add("d-none");
    document.querySelector(".search1").classList.add("d-none");
    document.querySelector(".details").classList.add("d-none");
    document.querySelector(".catmeals").classList.add("d-none");
    document.querySelector(".intmeals").classList.remove("d-none");
    let api4 = await fetch( `https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let response4 =await api4.json()
    intList= response4.meals.slice(0,20) 
    // console.log(catList );
    // diplaycategory()
    diplayint()
}

 

function diplayint(){

    // console.log("354");
    let temp=""

    intList.forEach((el)=>{
       temp+=`  <div rei=${el.strIngredient} class="col-md-3 photo3">
       <div   class="rounded-2 text-center cursor-pointer text-light ">
               <i class="fa-solid fa-drumstick-bite fa-4x"></i>
               <h3>${el.strIngredient}</h3>
               <p>${el.strDescription.split(" ").slice(0,20).join(" ")}</p>
       </div>
</div> `
    console.log(el.strDescription);
    })
    document.getElementById("myingrediants").innerHTML=temp
   //  console.log(gameList[0].id);
   
        get3()
   }
   function get3(){
    let items1= document.querySelectorAll(".photo3")
    for(let i=0;i<items1.length;i++){
        items1[i].addEventListener("click",function(){
                 
            let xd1=this.getAttribute("rei")
            console.log(xd1);
             document.querySelector(".intmeals").classList.add("d-none");
            // document.querySelector(".details").classList.remove("d-none");
            document.querySelector(".meals").classList.remove("d-none");
        // document.querySelector(".details").classList.remove("d-none");
        getData(xd1)
        })
    }
    }
    let areaList2=[]
async function getData(r) {
     
    let api = await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?i=${r}`)
    let response =await api.json()
    areaList2= response.meals
    // console.log(gameList );
    diplayGmaes(areaList2)
}
/*************************************************search */

 function search(){
    close()
    document.querySelector(".search1").classList.remove("d-none");
    document.querySelector(".meals").classList.add("d-none");
    document.querySelector(".areameals").classList.add("d-none");
    document.querySelector(".intmeals").classList.add("d-none");
    document.querySelector(".catmeals").classList.add("d-none");
    document.querySelector(".details").classList.add("d-none");
 
 }

let namelist=[]
async function searchName(x){ 
     console.log("done")
    let api5 = await fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
    let response5 =await api5.json()
    namelist= response5.meals
   
    // namelist ? diplayGmaes(namelist) : diplayGmaes([])
    diplaysearch(namelist)

    // diplayGmaes(namelist)
    // console.log(namelist)
}

let litterlist=[]
async function searchLetter(l){ 
    console.log("done")
   let api6 = await fetch( `https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`)
   let response6 =await api6.json()
   litterlist= response6.meals
   diplaysearch(litterlist)
 
}

function diplaysearch(m){
    console.log("done2");
 let temp=""
 m.forEach((el)=>{
    temp+=` <div reid=${el.idMeal} class=" col-lg-3 col-md-6 col-sm-12 photo">
    <div class="rounded-2 position-relative cont overflow-hidden">
    <img src=${el.strMealThumb} class="w-100" alt="">
     <div class="layer   position-absolute ">
        <h4>${el.strMeal}</h4>
     </div>
    </div>
</div> `

 })
 document.getElementById("mysearch").innerHTML=temp
//  console.log(gameList[0].id);
get()
}



/****************************************** */

$(document).ready(() => {
     
        $(".loadScrean").fadeOut(3000)
        // $("body").css("overflow", "visible")

    
})







 
/************************************contact********* */



function displayContact() {
    console.log("44444");
document.getElementById("contactM").classList.replace("d-none", "d-block")
    document.querySelector(".search1").classList.add("d-none");
    document.querySelector(".meals").classList.add("d-none");
    document.querySelector(".areameals").classList.add("d-none");
    document.querySelector(".intmeals").classList.add("d-none");
    document.querySelector(".catmeals").classList.add("d-none");
    document.querySelector(".details").classList.add("d-none");
    
 console.log("555555");




    document.getElementById("submit")
    nameInput?.addEventListener("blur", validName)
    emailInput?.addEventListener("blur", validName)
    phoneInput?.addEventListener("blur", validName)
    ageInput?.addEventListener("blur", validName)
    passInput?.addEventListener("blur", validName)
    repassInput?.addEventListener("blur", validName)
}

let nameInput = document.getElementById("nameInput")
let emailInput = document.getElementById("emailInput")
let phoneInput = document.getElementById("phoneInput")
let ageInput = document.getElementById("ageInput")
let passInput = document.getElementById("passInput")
let repassInput = document.getElementById("repassInput")


function validName() {
    let ragex = /^[a-zA-Z]+$/
    if (ragex.test(nameInput.value) == true) {
        document.getElementById("nameAlert").classList.replace("d-block", "d-none")
        return true
    }
    else {
        document.getElementById("nameAlert").classList.replace("d-none", "d-block")
        return false
    }
}

function validEmail() {
    let ragex = /^[a-zA-Z0-9]{3,5}@[a-zA-Z]{2,10}\.[a-zA-Z]{2,3}$/
    if (ragex.test(emailInput.value) == true) {
        document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        return true
    }
    else {
        document.getElementById("emailAlert").classList.replace("d-none", "d-block")
        return false
    }
}
function validPhone() {
    let ragex = /^01[0125][0-9]{8}$/
    if (ragex.test(phoneInput.value) == true) {
        document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        return true
    }
    else {
        document.getElementById("phoneAlert").classList.replace("d-none", "d-block")
        return false
    }
}
function validAge() {
    let ragex = /^([1-9]|[1-9][0-9]|[1][1-9]{2}|200)$/
    if (ragex.test(ageInput.value) == true) {
        document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        return true
    }
    else {
        document.getElementById("ageAlert").classList.replace("d-none", "d-block")
        return false
    }
}
function validPass() {
    let ragex = /^(?=.[0-9])(?=.[a-z])[a-zA-Z0-9]{8,}$/
    if (ragex.test(passInput.value) == true) {
        document.getElementById("passAlert").classList.replace("d-block", "d-none")
        return true
    }
    else {
        document.getElementById("passAlert").classList.replace("d-none", "d-block")
        return false
    }
}
function validRePass() {

    if ((document.getElementById("repassInput").value == document.getElementById("passInput").value) == true) {
        document.getElementById("repassAlert").classList.replace("d-block", "d-none")
        return true
    }
    else {
        document.getElementById("repassAlert").classList.replace("d-none", "d-block")
        return false
    }
}

function validation() {
    if (validName() == true && validEmail() == true && validPhone() == true && validAge() == true && validPass() == true && validRePass() == true) {
        document.getElementById("submit").removeAttribute("disabled")
    }
    else {
        document.getElementById("submit").setAttribute("disabled", true)
    }
}