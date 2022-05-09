import React from "react";
import { connect } from 'react-redux';
import { helloAction } from "../actions/HelloAction";

export class Hello extends React.Component{

    conmponentDidMount(){
        this.props.getGreeting();
    }

    render(){
        return(
            <div id="hello">
                <h2>{this.props.greeting}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        greeting: state.HelloReducer.greeting
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getGreeting: ()=>{
            dispatch(helloAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)