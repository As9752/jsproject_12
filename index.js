const url="https://restcountries.com/v3.1/name/{name}?fullText=true";
const btn=document.querySelector("#btn");
const inp=document.querySelector("#cnt");
const res=document.querySelector(".result");
let callfun=()=>{
   const val=inp.value;
   fetch(`https://restcountries.com/v3.1/name/${val}?fullText=true`).then(response=>response.json()).then(e=>{
      // e.preventDefault();
      res.innerHTML=`<img src="${e[0].flags.svg}" class="flag">
      <h3 id="name">${val}</h3>
      <div class="container1">
      <div class="wrapper">
      <h4>Capital</h4>:<span>${e[0].capital}</span>
      </div></div>
           <div class="container1">
      <div class="wrapper">
      <h4>Continent</h4>:
      <span>${e[0].continents}</span>
        </div></div>
                <div class="container1">
      <div class="wrapper">
      <h4>Population:</h4><span>${e[0].population}</span>
      </div></div>
              <div class="container1">
      <div class="wrapper">
      <h4>Currencies:</h4><span>${Object.keys(e[0].currencies)[0]}</span>
</div></div>
 <div class="wrapper">
      <h4>Languages:</h4><span>${Object.values(e[0].languages)}</span>
</div></div>`
   }).catch(()=>{
      if(val.length===0)
         alert("Please enter country name first");
      else
         alert("Please enter valid country name");
   })
}
btn.addEventListener("click",()=>{
callfun();
})