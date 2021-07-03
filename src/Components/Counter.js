import React from 'react';
// import {connect} from "react-redux"
// import { increment, decrement } from './../Redux/Actions/counterActions';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <div className="counter">
            <button onClick={() => dispatch({type:"DECREMENT"})} > - </button>
            <h5> {count} </h5>
            <button onClick={() => dispatch({type:"INCREMENT"})} > + </button>
        </div>
    )
}


// const mapStateToProps = (state) => {
//     return {
//         count: state.count
//     }
// }

// const mapDispatchToProps = {
//     increment,
//     decrement
// }

export default Counter
// connect(mapStateToProps, mapDispatchToProps)(Counter)
