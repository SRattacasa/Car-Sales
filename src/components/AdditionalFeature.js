import React from 'react';
import {addFeature} from '../actions/'
import {connect} from 'react-redux'
import {mapStatetoProps} from '../reducers/mainReducer'

const mapDispatchtoProps = {addFeature}

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature }>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(mapStatetoProps,mapDispatchtoProps)(AdditionalFeature);
