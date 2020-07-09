import * as React from "react";
import Filter from '../filter/FilterComponent';
import '../../style/HomeComponent.css'
import { useEffect } from "react";
import axios from "axios";
import api from '../../config/api'


const HomeComponent = () => {

  // const { welcome } = this.props;
  // console.log("welcome", welcome);
  
  // TESTE
  // useEffect(() => {
  //   axios.get(api)
  //   .then(response => {
  //       console.log(response.data)
  //   })
  // }, []);
  
  return (
    <React.Fragment>
        {/* <h2 className='title'>{welcome}</h2> */}
        <div className='container'>
          <div className='selects'>
            <Filter 
              placeholder={"Marca..."}            
            />
            <Filter
              placeholder={"Modelo..."}  
            />
            <Filter 
              placeholder={"Ano..."}              
            />
            <Filter />
          </div>
      </div>
     
    </React.Fragment>
  );
} 


// class HomeComponent extends React.Component {
//   render() {
//   }
// }

export default HomeComponent;
