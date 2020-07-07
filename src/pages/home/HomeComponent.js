import * as React from "react";
import Select from '../filter/FilterComponent';
import '../../style/HomeComponent.css'
class HomeComponent extends React.Component {
  render() {
    const { welcome } = this.props;
    console.log("welcome", welcome);

    return (
      <React.Fragment>
          <h2 className='title'>{welcome}</h2>
          <div className='container'>
            <div className='selects'>
              <Select />
              <Select />
              <Select />
              <Select />
            </div>
        </div>
       
      </React.Fragment>
    );
  }
}

export default HomeComponent;
