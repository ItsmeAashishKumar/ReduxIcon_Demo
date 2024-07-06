import logo from './logo.svg';
import {connect} from 'react-redux'
import './App.css';
import { startSpinning, stopSpinning } from './redux/action';

function App({rotating,startSpinning,stopSpinning}) {
  return (
    <div className="App" >
      <header className="App-header">
        <img  src={logo}
          className={`App-logo ${rotating ? 'spinning' : 'stopped'}`}
          alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={startSpinning}>Start</button>
          <button onClick={stopSpinning}>Stop</button>
        </div>
      </header>
    </div>
  );
}
const mapStateToProps=state=>({
  rotating:state.rotating
});
const mapDispatchToProps=dispatch=>({
  startSpinning:()=>dispatch(startSpinning),
  stopSpinning:()=>dispatch(stopSpinning)
})
export default connect(mapStateToProps, mapDispatchToProps)(App);