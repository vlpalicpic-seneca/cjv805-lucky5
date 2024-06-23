import SelectionOption from "./SelectionOption";

const SelectionPane = (props) => {

    const selectOption = (num) => {
        props.selectNum(parseInt(num,10));
    }

    return (
        <div className="selectionContainer">
            {Array.from({ length: 20 }, (x, index) => (
                <SelectionOption choices={props.combination} selectOption={selectOption} option={index + 1} />
            ))}
            {/* <SelectionOption choices = {props.combination} selectOption={selectOption} option = "1"></SelectionOption>
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
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "20"></SelectionOption> */}
            {/* <SelectionOption choices = {props.combination} selectOption={selectOption} option = "1"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "2"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "3"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "4"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "5"></SelectionOption>
            <br />
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "6"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "7"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "8"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "9"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "10"></SelectionOption>
            <br />
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "11"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "12"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "13"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "14"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "15"></SelectionOption>
            <br />
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "16"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "17"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "18"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "19"></SelectionOption>
            <SelectionOption choices = {props.combination} selectOption={selectOption} option = "20"></SelectionOption> */}
        </div>
    );
  }
  
  export default SelectionPane;
  