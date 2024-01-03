import React, {useEffect} from "react";
import './Preloader.css'


const Preloader = ()=>{
  useEffect(()=>{
     
  }, []);
  return (
        <div class="loader">
            <div class="intern">
            </div>
            <div class="external-shadow">
                <div class="central">
                </div>
            </div>
        </div>
  )
}

export default Preloader;