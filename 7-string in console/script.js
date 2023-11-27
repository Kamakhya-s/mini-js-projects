 
var msg
document.querySelector('#start').addEventListener('click',function()
{
    msg =setInterval(function(str)
    {
        console.log(str)
    },2000,"Kamakhya")
})
document.querySelector('#stop').addEventListener('click',function()
{
    clearInterval(msg);
    console.log("stopped")
})