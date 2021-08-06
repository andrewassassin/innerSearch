// let tabLink ==> 宣告按鈕 a tabContents
let tabLink = document.getElementById("tabs").querySelectorAll("img");
// let tabContents ==> 宣告面板內容為 tabContents
let tabContents = document.getElementById("tab-inner").querySelectorAll('.form-content');
const tabInner = document.getElementById("tab-inner");
const btn = document.getElementById("tabs").querySelectorAll(".card-btns");
console.log("btn",btn)

    tabInner.classList.add("turnon")
     arrowDisplay(btn[0]);
    // 啟動第一個panel
     panelDisplay(tabLink[0]);
     //點擊  tab a連結
     for(let i = 0; i < tabLink.length; i++){
       tabLink[i].addEventListener('click',function(e){
        e.preventDefault();
        // addEventListener的this指向作用對象本身
        panelDisplay(this);
        //  console.log("this",this)
        
        arrowDisplay(btn[i]);
       });
       
    };
   

// 建立一個 function 名稱為 panelDisplay
// 賦予判斷條件為 class 有 active  時下面的面板會顯示，反之其他會隱藏內容

    function panelDisplay(activePanel){
          // Do something...
        for(let i =0;i<tabLink.length;i++){
            
        //設定條件tabLink ==activePanel 
        //將tablink代入for循環中並利用 if ...else 進行條件 classList.add增加class="active" 
        // ，就是每執行一次function的時候就進行全部tablinks增加class
        
            if(tabLink[i] == activePanel) {
            // 假設目前的 tabLink 等於 activate, 改變他的class .active
                tabLink[i].classList.add("active");
            // 顯示面板的display:block 
            tabContents[i].classList.add("opacity");
                tabContents[i].style.display="block";
            
            }else {
            // 假設目前的 ablink 不等於 activate, 刪除他的class .active
                tabLink[i].classList.remove("active");
                tabContents[i].classList.remove("opacity");
            // 隱藏面板
                tabContents[i].style.display="none";
            }
        }
    }
  
    // 黃色箭頭啟動函式
    function arrowDisplay(activeArrow){
        for(let i =0;i<btn.length;i++){          
                if(btn[i] == activeArrow) {              
                    btn[i].classList.add("showup");                
                }else {
                    btn[i].classList.remove("showup");
                }
            }
    }


   
