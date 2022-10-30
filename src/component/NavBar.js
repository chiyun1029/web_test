import "./style.css"
import React from 'react';
import school from './school'


const NavBar = () => {
    
    return (
       
     <div>
        <nav class="navbar">
            學習寶
        </nav>
        <div class="box">
            
                <div class="item1">
                <div class="grid-item3">
                    <a calss="school" href="#f">
                    各校院圖譜
                    </a>
                    <select>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option selected value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>

                </div>
                    

                    <br></br>

                    <div class="grid-item4">
                        <a calss="future" href="#f">
                        未來職涯知識庫
                        </a>
                    </div>

                    <br></br>

                    <div class="grid-item5">
                        <a calss="personal" href="#p">
                        個人化學習歷程
                        </a>
                    </div>
                    
                </div>

            

                <div class="item2">

                </div>
            
            
        </div>
    </div>
            
                    
            
        

    );
  };
  
  export default NavBar;