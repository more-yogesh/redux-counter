import { useSelector, useDispatch } from 'react-redux';
import { incrementHandler, decrementHandler } from './store/action/counter.action'

function App() {

  const reduxStore = useSelector(state => state);
  const dispatcher = useDispatch();

  console.log(reduxStore);

  const clickHandler = () => {
    // console.log('clicked');
    dispatcher(incrementHandler());
  }
  const dcHandler = () => {
    dispatcher(decrementHandler());
  }

  return (
    <div className="App">
      <h1>{reduxStore.storeCounter.mainCounter}</h1>
      <button onClick={clickHandler}>+</button>
      <button onClick={dcHandler}>-</button>
    </div>
  );
}

export default App;
