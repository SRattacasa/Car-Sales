import React from 'react';
import {connect} from 'react-redux'
import {mapStatetoProps} from '../reducers/mainReducer'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
      {console.log(props.additionalPrice)}
    </div>
  );
};

export default connect(mapStatetoProps)(Total);
