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
        this.props.onDecrement();
    }
    
    onIncrement = () =>{
        //console.log('haha')
        this.props.onIncrement();
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

//lấy được state trong reducers
const mapStateToProps = (state) => {
	return {
		times: state.counterReducers.count
	};
}


const mapDispatchToProps = (dispatch) => {
	return {
        //map được việc dispatch action decrementAction với prop onDecrement
		onDecrement: (step) => {
			dispatch(decrementAction(step));
        },
        //tương tự ở trên
		onIncrement: () => {
			dispatch(incrementAction());
		}
	};
}

//kết nối mapDispatchToProps và mapStateToProps tới component COunter
export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Counter);

//đã có thể sử dụng được 2 prop là onDecrement và onIncrement ở Counter