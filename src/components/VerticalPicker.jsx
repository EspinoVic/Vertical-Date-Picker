import React from 'react'
import { useTransition, animated } from 'react-spring'
import { useState } from 'react'

let isUp = false;

export default function VerticalPicker({data,...props}) {
    
    const [index, setIndex] = useState(0);
    const [itemsForPicking/* ,setitemsForPicking */] = useState(reduceItemsExpresion(data));

    let itemsToShow = getItemsToShow(itemsForPicking,index) /* itemsForPicking.slice(index,index + 5); */
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
  

    const transitions = useTransition(itemsToShow, p => p, {
        from:  { opacity: 1,/* transform: `translate3d(0,${isUp?100:-100}%,0)`, */ },
        enter: { opacity: 1,},
        leave: { opacity: 1,/* transform: `translate3d(0,${isUp?-100:100}%,0)` ,*/ },
    })
    let itemsTransitioned = transitions.map(({ item, props, key },index) => {
        return <ItemPicker key={key} content={item} style={props}></ItemPicker>

    })

    
    return (
        <div className="verticalpicker-container" onWheel={onClick}>
            {itemsTransitioned}            
        </div>
    )
}

/*
    It's gonna get  5 elements from offset (index), 
    2 aboves,
    2 below and 
    index
*/
function getItemsToShow(array, offset){

    let elements = [];
    elements[elements.length] = getElementFromOffset(array,offset, -2);
    elements[elements.length] = getElementFromOffset(array,offset, -1);
    elements[elements.length] = getElementFromOffset(array,offset, 0)/* array[offset] */;
    elements[elements.length] = getElementFromOffset(array,offset, 1);
    elements[elements.length] = getElementFromOffset(array,offset, 2);
    return elements;
}

/* offset must be 1,2,-1,-2,0 */
function getElementFromOffset(array,offset,range){
    let arrayLength = array.length;

    let newIndex = offset+range;
    //out of index negative
    if(newIndex<0){
        newIndex = array.length-Math.abs(newIndex);
    }//out of index positive
    else if(newIndex>=array.length){
        newIndex = newIndex-Math.abs(array.length);

    }//0
    else{
        //nothing changed
    }

    return array[newIndex];

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

