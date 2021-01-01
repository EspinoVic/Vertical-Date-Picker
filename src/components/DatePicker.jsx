import React from 'react'
import VerticalPicker from './VerticalPicker'

function DatePicker() {
    return (
        <div className="datepicker-container">
            <VerticalPicker data={dias}></VerticalPicker>
            <VerticalPicker data={meses}></VerticalPicker>
            <VerticalPicker data={años}></VerticalPicker>        
        </div>
    )
}

export default DatePicker;

let meses = 
[
  "ENERO",
  "FEBRERO",
  "MARZO",
  "ABRIL",
  "MAYO",
  "JUNIO",
  "JULIO",
  "AGOSTO",
  "SEPTIEMBRE",
  "OCTUBRE",
  "NOVIEMBRE",
  "DICIEMBRE"
];
let dias = 
[
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];
let años = 
[
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];