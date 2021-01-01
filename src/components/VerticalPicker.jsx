import React from 'react'
import { useTransition, animated } from 'react-spring'
import { useState } from 'react'

/* const pages = [
    ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>D</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>E</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>F</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>G</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>H</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>I</animated.div>,
  ] */
let isUp = false;

export default function VerticalPicker({data,...props}) {
    
    const [index, setIndex] = useState(0);
    const [itemsForPicking/* ,setitemsForPicking */] = useState(reduceItemsExpresion(data));

    const onClick = (event) =>{
      isUp = event.deltaY>0;
      setIndex(
        state =>{
          let deltaY = event.deltaY>0? 1:-1;
          isUp =  event.deltaY>0;
          let stateDelta = (state + deltaY) ;
          let newIndexToShow = stateDelta% itemsForPicking.length;
          if(newIndexToShow === -1)
            newIndexToShow = itemsForPicking.length-1
          return newIndexToShow;
        }
      ) 
    } 
  
  
    const transitions = useTransition(index, p => p, {
        from:  { opacity: 0, transform: `translate3d(0,${isUp?100:-100}%,0)` },
        enter: { opacity: 1, transform: `translate3d(0%,0,0)` },
        leave: { opacity: 0, transform: `translate3d(0,${isUp?-100:100}%,0)` },
    })

    return (
        <div className="verticalpicker-container" onWheel={onClick}>
            {transitions.map(({ item, props, key }) => {
                return <ItemPicker key={key} content={itemsForPicking[item]} style={props}></ItemPicker>
            /*  const Page = pages[item]
                return <Page key={key} style={props} /> */
            })}
        </div>
    )
}

function reduceItemsExpresion(data){
    let newArr = [];
   data.forEach((element,index )=> {

        newArr[newArr.length] = element.substring(0,element.length>4?3:4);
        
    });

    return newArr;
}

function ItemPicker ({style,content,...props}){
    return (
        <animated.div style={style}>
            {content}
        </animated.div>
    )

}

