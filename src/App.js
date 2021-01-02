import React,{useState} from 'react';
import DatePicker from './components/DatePicker';
import {useSpring,useSprings,animated} from 'react-spring';

function App() {
  const items = ["vec","vic","voc","vuc"]

  const [visible,setVisible] = useState(false);
  const spring = useSpring(testSylte(visible))

  const springs = useSprings(
    2,
      items.map(
        item => (
          testSylte(visible)
        )
      )
  )

  const onClickHandler =(e)=>{
    setVisible( currentState => !currentState );
  };

  return (
    <div className="App" style={{"background-color":"blue",height:"200px"}}>
        <button className="button-calendar">
            *Date Picker*
            <DatePicker></DatePicker>       
        </button>

        {/* {springExample(spring)}
        Separador xd
        {springsExample(springs)} */}


        <button className="button" onClick={onClickHandler}>change</button>
    </div>
  );
}

const testSylte = (visible)=>{
  return {
    to:
      {opacity: visible?1:0, color: '#ffaaee',bottom:0},         
    from: 
    {margin:"5px",opacity: !visible?1:0, color: 'red',bottom:"100%","background-color":"green"}
  
  }
}
const springExample = (spring)=>{
  return (
    <div>
      <ExampleSpring children={"useSpring"} style={spring}></ExampleSpring>
      <ExampleSpring children={"useSpring"} style={spring}></ExampleSpring>
      <ExampleSpring children={"useSpring"}  ></ExampleSpring>
      <ExampleSpring children={"useSpring"} style={spring}></ExampleSpring>
    </div>
  )
  
}
  
const springsExample = (springs)=>{
  return (
    <div>
      {
      springs.map(
        props =>  
        <ExampleSpring style={props} children={"useSprings"}></ExampleSpring> 
      )      
      }
      </div>
  )
  
}

function ExampleSpring({style,children,...props}) {
  return (
    <animated.div style={style}>{children}</animated.div>
  )
}
export default App;
