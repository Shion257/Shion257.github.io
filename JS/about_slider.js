// 获取元素(之前都使用的getElementById,因此此项目中完全使用querySelector)
let box = document.querySelector('.box');
let process = document.querySelector('.process');
let left = document.querySelector('.pcs_left');
let percent = document.querySelector('.percent');
let dot_eara = document.querySelector('.dot_eara');
let dot = document.querySelector('.dot');
let brand = document.querySelector('.brand');

// 鼠标按下状态
let isMouseDown = false;
// 圆点区域点击状态
let isClcikOnDot = false;  

// 圆点区域点击事件监听
dot_eara.onmousedown = function(){
  brand.style.display = "block";
  isClcikOnDot = true;
}
 // 盒子区域鼠标按下状态监听
box.onmousedown = function(){
   isMouseDown = true;
}
// 盒子区域鼠标抬起状态监听
box.onmouseup = function(){
  isMouseDown = false;
  isClcikOnDot = false;
  setTimeout(()=>{
    brand.style.display = "none";
  },1000);
}
// 盒子区域鼠标移动监听
box.onmousemove = function(e){
  // console.log(`isMouseDown ${isMouseDown} + isClcikOnDot ${isClcikOnDot}`);
  
  // x为鼠标移动的坐标值,-100是因为process距离左边100px
  let x = Math.floor(e.pageX - box.offsetLeft - 100);
    if( isClcikOnDot && isMouseDown){
      if(x <= 300 && x >= 0){
        percent.style.left = x + "px";
        left.style.width =x + "px";
        brand.innerHTML = Math.round(x/3)+ "";
      }else if(x < 0){
        // 用于处理鼠标卡顿无法到0%的问题
        percent.style.left = "0px";
        left.style.width = "0px";
        brand.innerHTML = "0%";
      }else{
        // 用于处理鼠标卡顿无法到100%的问题
        percent.style.left = "300px";
        left.style.width = "300px";
        brand.innerHTML = "100%";
      }   
    }
    // process上的点击事件监听
    process.onclick = function(){
      if(x <= 300 && x >= 0){
        percent.style.left = x + "px";
        left.style.width =x + "px";
        brand.innerHTML = Math.round(x/3)+ "";
        brand.style.display = "block";
        setTimeout(()=>{
          brand.style.display = "none";
        },1000);
      }
    }
  }
