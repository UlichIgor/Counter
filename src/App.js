import React from 'react';

function App() {
const [open, setOpen] =React.useState(false);
  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };
  return (
    <><button onClick={()=>setOpen(true)} className='open-modal-btn'>open</button>{
      open && (<div className="App">
        <button onClick={()=>setOpen(false)}  className='closed-modal-btn'>x</button>
      <h2>Лічильник </h2>
      <h1>{count}</h1>
      <div class="btn-group">
        <button onClick={onClickMinus} className="minus">- відняти</button>
        <button onClick={onClickPlus} className="plus">+ додати</button>
      </div>
    </div> )
     }</>
 );
}

export default App;
