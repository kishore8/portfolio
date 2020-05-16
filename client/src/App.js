import React, { useState, useEffect } from 'react';
import './App.css';
import { Route , Switch} from 'react-router-dom';
import DashBoard from './Components/dashboard/DashBoard';
import PageNotFound from './Components/PageNotFound';
import Experience from './Components/experience/Experience';
import Contact from './Components/contact/Contact';
import { withRouter } from "react-router-dom";



const App = (props) =>{
  const [prevBtn, setPrevBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);


  useEffect(() =>{
      if(props.location.pathname === '/'){
          setPrevBtn(false);
          setNextBtn(true);
    } else if(props.location.pathname === '/techstack'){
          setPrevBtn(true);
          setNextBtn(true);
    } else{
          setPrevBtn(true);
          setNextBtn(false);
    }
    return () =>{}
  })

  const redirectToRoute = (evt)=>{
    console.log(evt);
    if(props.location.pathname === '/'){
        if(!evt){
          setPrevBtn(true);
          setNextBtn(true);
          props.history.push("/techstack");
        }
        
    } else if(props.location.pathname === '/techstack'){
        if(!evt){
          props.history.push("/contact");
          setPrevBtn(true);
          setNextBtn(false);
        } else{
          props.history.push("/");
          setPrevBtn(false);
          setNextBtn(true);
        }
    } else{
        if(evt){
          setPrevBtn(true);
          setNextBtn(true);
          props.history.push("/techstack")
        }
        
    }
    //props.history.push("/techstack");
  }

  return(
    <>
    <div>
      {
        prevBtn ?  <button onClick={(e) => {redirectToRoute('back')}} className="menu menuBack"><i className="fa fa-arrow-left"></i></button> : null
      }
   {
     nextBtn ?  <button onClick={(e) => {redirectToRoute()}} className="menu"><i className="fa fa-arrow-right"></i></button> : null
   }
   
    
      
    </div>
    <div className="content">
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route path="/techstack" component={Experience} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      
    </div>
    </>
  );
}

export default withRouter(App);
