import React from "react";
import { addFeature, removeFeature } from "../actions/";
import { connect } from "react-redux";
import { mapStatetoProps } from "../reducers/mainReducer";

const mapDispatchtoProps = { addFeature, removeFeature };

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          props.addFeature({
            id: props.feature.id,
            name: props.feature.name,
            price: props.feature.price,
          });
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(mapStatetoProps, mapDispatchtoProps)(AdditionalFeature);
