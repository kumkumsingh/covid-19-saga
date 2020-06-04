import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import WorldTotal from "./WorldTotal";

 
class WorldTotalContainer extends Component {

  componentDidMount() {
    this.props.worldTotalFetch();
   
  }
  render() {
    return (
      <React.Fragment>
        <WorldTotal total={this.props.worldTotal}/> 
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
    return{
       worldTotal: state.worldTotal
    }
}

const mapDispatchToProps = dispatch => {
    return{
        worldTotalFetch: () => dispatch(actions.worldTotalFetch())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WorldTotalContainer);
