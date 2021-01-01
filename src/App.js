import React from 'react';
import DatePicker from './components/DatePicker';


function App() {
  return (
    <div className="App">
        <button className="button-calendar">
            *Date Picker*
            <DatePicker></DatePicker>       
        </button>
    </div>
  );
}

export default App;
