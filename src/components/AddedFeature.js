import React from 'react';
import {mapStatetoProps} from '../reducers/mainReducer'
import {connect} from 'react-redux'
import {addFeature, removeFeature } from '../actions/'

const mapDispatchtoProps = {addFeature, removeFeature}

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {
        props.removeFeature({id: props.id, price: props.price})
      }}>X</button>
      {props.feature}
      {console.log("READ THIS", props.key)}
      
      
    </li>
  );
};

export default connect(mapStatetoProps, mapDispatchtoProps)(AddedFeature);
