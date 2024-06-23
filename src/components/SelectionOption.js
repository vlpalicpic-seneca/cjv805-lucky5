import '../css/App.css';

const SelectionOption = (props) => {

    const isOptionInChoices = props.choices.includes(parseInt(props.option, 10));
    const backgroundColor = isOptionInChoices ? '#299345' : '#97C93C';

    const optionClick = () => {
        props.selectOption(props.option);
    }

    return(
        <button onClick={optionClick} className="selectionButton" style={{backgroundColor}} >{props.option}</button>
    );
  }


  export default SelectionOption;
  