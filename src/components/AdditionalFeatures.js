import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux'
import {mapStatetoProps} from '../reducers/mainReducer'



const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(mapStatetoProps)(AdditionalFeatures);
