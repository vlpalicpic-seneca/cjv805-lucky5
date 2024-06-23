import '../css/App.css';
const Ticket = (props) => {

    const displayCombination = props.combination.length === 0? [' ',' ',' ',' ',' '] : props.combination;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    return (
     
        <div className="ticketContainer">
            <h2>Ticket</h2><br />
            <h3>Combination</h3>
            <h1>{displayCombination.map((value)=>(<div className='ticketCombinationContainer'>{value}</div>))}</h1>
            <br />
            <h3>Ticket Value</h3>
            <h1><div className='ticketValueContainer'>{formatter.format(props.money)}</div></h1>
        </div>
  
    );
  }
  
  export default Ticket;
  