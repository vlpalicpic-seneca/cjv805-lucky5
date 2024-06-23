const ChoicePane = (props) => {

    // const displayCombination = props.combination.length === 0? 'Select Numbers' : JSON.stringify(props.combination);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    //same color but i was planning on different color
    const backgroundColor = props.combination.length === 0? '#299345' : '#299345';

    //set combination to LUCKY if no number has been selected, for aesthetics only
    const display = props.combination.length === 0? ['L', 'U', 'C', 'K', 'Y'] : props.combination;


    const combinationDisplay = 
        <div className = "combinationContainer" >
            <div className="combinationButton" style={{backgroundColor}} >{display[0]}</div>
            <div className="combinationButton" style={{backgroundColor}} >{display[1]}</div>
            <div className="combinationButton" style={{backgroundColor}} >{display[2]}</div>
            <div className="combinationButton" style={{backgroundColor}} >{display[3]}</div>
            <div className="combinationButton" style={{backgroundColor}} >{display[4]}</div>
        </div>

    //same return but was planning on changing it in the future
    const displayCombination = props.combination.length === 0? combinationDisplay : combinationDisplay;

    return (     
        <div className="choiceContainer">
            <div className="combinationDisplay"><h1>{displayCombination}</h1></div>
            <div className="moneyDisplay"><h1>{formatter.format(props.money)}</h1></div>
        </div>
    );
  }
  
  export default ChoicePane;
  