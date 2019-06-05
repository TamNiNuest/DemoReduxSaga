import React from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction} from '../actions';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.onDecrement = this.onDecrement.bind(this);
        this.onIncrement = this.onIncrement.bind(this)
    }

    onDecrement = () =>{
        this.props.onDecrement(1);
    }
    
    onIncrement = () =>{
        this.props.onIncrement(1)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="container">
                        <div style={{marginBottom: '15px'}}>
                            <button onClick={this.onDecrement} style={{marginRight: '15px'}} type="button" className="btn btn-danger">Decrease</button>
                            <button onClick={this.onIncrement} type="button" className="btn btn-primary">Increase</button>
                        </div>
                        <div><h1>{this.props.times}</h1></div>
                    </div>
                </header>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		times: state.counterReducers ? state.counterReducers : 0
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDecrement: (step) => {
			dispatch(decrementAction(step));
		},
		onIncrement: (step) => {
			dispatch(incrementAction(step));
		}
	};
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Counter);