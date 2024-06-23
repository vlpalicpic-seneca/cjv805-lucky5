import '../css/App.css';

const SelectionOption = (props) => {

    const isOptionInChoices = props.choices.includes(parseInt(props.option, 10));
    const backgroundColor = isOptionInChoices ? '#299345' : '#97C93C';
    // const padding = 30;
    // const buttonSize = {
    //     height: '70px',
    //     width: '70px',
    //     borderRadius: '50%',
    //     cursor: 'pointer',
    //     margin: '3px',
    //     fontSize: '24px',
    //     fontWeight: '900'
    // }

    const optionClick = () => {
        props.selectOption(props.option);
    }

    return(
        <button onClick={optionClick} className="selectionButton" style={{backgroundColor}} >{props.option}</button>
    );
  }


  export default SelectionOption;
  