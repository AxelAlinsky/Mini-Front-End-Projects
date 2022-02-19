var numDisplay = document.getElementById('numDisplay');
var inc = document.getElementById('inc');
var dsc = document.getElementById('dsc');
var rst = document.getElementById('rst')
var incNum = 0;

inc.addEventListener('click', ()=>{
    parseInt(inc)
    incNum ++;
    numDisplay.innerText = incNum;
    console.log(incNum)
})


rst.addEventListener('click', ()=> {
    incNum = 0;
    numDisplay.innerText = incNum;

})

dsc.addEventListener('click', ()=>{
    parseInt(inc)
    incNum --;
    numDisplay.innerText = incNum;
    console.log(incNum)
})