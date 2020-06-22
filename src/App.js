import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { mapStatetoProps} from './reducers/mainReducer'

import {connect} from 'react-redux'
import {addFeature, removeFeature} from './actions'






const App = props => {
 

  return (
    
    <div className="boxes">
      <div className="box">
        
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total  />
      </div>
    </div>
    
  );
};

export default connect(mapStatetoProps, {addFeature, removeFeature})(App);
