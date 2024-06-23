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
        </div>
    );
  }
  
  export default SelectionPane;
  