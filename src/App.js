import './App.css';
import {connect} from 'react-redux'
import {incrementCount, decrementCount, toggleHidden} from './redux/numberReducer'

function App(props) {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <button onClick={props.toggleHidden}>Show/Hide Numbers</button>
      {props.hidden === false && <p>count: {props.count}</p>}
      <br />
      <button onClick={props.incrementCount}>add 1</button>
      <br />
      <button onClick={props.decrementCount}>sub 1</button>
    </div>
  );
}

const reduxStuff = connect((state) => state.numberReducer, {incrementCount, decrementCount, toggleHidden})

export default reduxStuff(App)