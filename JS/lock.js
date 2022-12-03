var locker = document.getElementsByClassName("lock")[0]//获取锁的状态
var input = document.getElementsByTagName("input")[0]//获取输入的内容
input.addEventListener("keyup",function()
{
    if (input.value == "257")//口令正确。开锁
    {
        locker.style.setProperty("--red","#2ed573")
        locker.style.setProperty("--u","-10px")
        setTimeout//延时
        (
            function()
            {
                window.location.href="./Shion257.html"
            },
            1500
        )
        
    }
    else//口令错误，恢复原状
    {
        locker.style.setProperty("--red","#ff3465")
        locker.style.setProperty("--u","0px")
    }
})