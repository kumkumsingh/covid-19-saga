import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import WorldTotal from "./WorldTotal";
// import axios from "axios";
 
class WorldTotalContainer extends Component {
//     state = {
//         Total:{}
//     };

  componentDidMount() {
    this.props.worldTotalFetch();
    console.log('checking props in worldtotal',this.props)
//     axios.get(
//         "https://api.covid19api.com/world/total"
//       ).then( total =>{
//          this.setState(
//            {
//                Total:total,
//            }
//          )
//       } );
   
  }
  render() {
    return (
      <React.Fragment>
        {/* <WorldTotal /> */}
        <WorldTotal total={this.props.worldTotal}/> 
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
    console.log('checking state', state)
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
