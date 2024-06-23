import SelectionOption from "./SelectionOption";
import { useState } from "react";

const SelectionPane = (props) => {

    // const [choices, setChoices] = useState([]);
    // const [counter, setCounter] = useState(0);

    const selectOption = (num) => {
    //     if (choices.length < 5 || choices.includes(choice)){
    //         console.log(choices.length)
    //         if (choices.includes(choice)) {
    //             let temp = choices;
    //             temp.splice(temp.indexOf(choice), 1);
    //             setChoices(temp);
    //             setCounter(counter-1);
    //         } else {
    //             let temp = choices;
    //             temp.push(choice);
    //             setChoices(temp);
    //             setCounter(counter+1);
    //         }
    //     } else {
    //         alert("you can only choose 5 numbers");
    //     }
    //     props.setCombination(choices);
        props.setCombination(num);
    }

    // const onClear = () => {
    //     setChoices([]);
    // }

    // const onRandom = () => {
    //     let randomTemp = [];
    //     while(randomTemp.length < 5){
    //         let num = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    //         if (randomTemp.includes(num)){
    //             continue
    //         } else {
    //             randomTemp.push(num);
    //         }
    //     }
    //     setCounter(5);
    //     setChoices(randomTemp);
    //     console.log(counter);
    //     console.log(choices);
    // }

    return (
        <div>
            {/* <button onClick = {onClear}>Clear</button>
            <button onClick = {onRandom}>Random</button> */}
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "1"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "2"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "3"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "4"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "5"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "6"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "7"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "8"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "9"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "10"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "11"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "12"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "13"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "14"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "15"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "16"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "17"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "18"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "19"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "20"></SelectionOption>
        </div>
    );
  }
  
  export default SelectionPane;
  