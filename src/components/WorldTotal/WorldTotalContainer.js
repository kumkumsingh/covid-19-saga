import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import * as actions from "../../actions/index";
import WorldTotal from "./WorldTotal";

 
const WorldTotalContainer = () =>{

  const dispatch = useDispatch();
  const worldTotal = useSelector(state => state.worldTotal)
  useEffect(() => {    
     dispatch(actions.worldTotalFetch())
    }, [])
    return (
      <React.Fragment>
        <WorldTotal total={worldTotal}/> 
      </React.Fragment>
    );

}


export default WorldTotalContainer;
