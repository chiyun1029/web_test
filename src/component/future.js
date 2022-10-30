import "./style.css"

import personal from "./personal"
// import school from "./school"

let url=personal;
const future = () => {
    return (
     <div>
        <nav class="navbar">
            學習寶
        </nav>
        <div class="box">
            
                <div class="item1">

                    <div class="grid-item3">
                        <a calss="school" href="school">
                        各校院圖譜
                        </a>
                    </div>

                    <br></br>

                    <div class="grid-item4">
                        <a calss="future" href="future">
                        未來職涯知識庫
                        </a>
                    </div>

                    <br></br>

                    <div class="grid-item5">
                        <a calss="personal" href={url}>
                        個人化學習歷程
                        </a>
                    </div>
                    
                </div>

            

                <div class="item2">
                    測試
                </div>
            
            
        </div>
    </div>
            
                    
            
        

    );
  };
  
  export default future;