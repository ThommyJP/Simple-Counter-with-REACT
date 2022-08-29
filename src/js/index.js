//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

let unsegundo = 0;
let diezsegundos = 0;
let ciensegundos = 0;
let milsegundos = 0;
let diezmilsegundos = 0;
let cienmilsegundos = 0;

setInterval(() => {
    unsegundo++;
      if (unsegundo > 9) { 
        unsegundo = 0

        diezsegundos++
        if (diezsegundos > 5) {
            diezsegundos = 0

            ciensegundos++
            if (ciensegundos > 9) {
                ciensegundos = 0

                milsegundos++
                if (milsegundos > 5) {
                    milsegundos = 0

                    diezmilsegundos++
                    if (diezmilsegundos > 9) {
                        diezmilsegundos = 0

                        cienmilsegundos++
                        if (cienmilsegundos > 9) {
                            cienmilsegundos= 0
                        }
                        
                    }
                    
                }
                
            }            
        }
    } 
       

 //render your react application
    ReactDOM.render(
        <div className="py-5 background">
	        <Home
            uno={unsegundo}
            diez={diezsegundos}
            cien={ciensegundos}
            mil={milsegundos}
            diezmil={diezmilsegundos}
            cienmil={cienmilsegundos}/>
        </div>, 

    document.querySelector("#app")
    );
}	, 1000)