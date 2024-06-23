import '../css/App.css';

const MoneyPane = (props) => {

    const handleClick = (value) => { 
        props.addMoney(value);
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      });

    return (
        <div className="moneyContainer">
            <button className='moneyButton' onClick = {() => {handleClick(1)}}>{formatter.format(1)}</button>
            <button className='moneyButton' onClick = {() => {handleClick(5)}}>{formatter.format(5)}</button>
            <button className='moneyButton' onClick = {() => {handleClick(10)}}>{formatter.format(10)}</button>
            <button className='moneyButton' onClick = {() => {handleClick(25)}}>{formatter.format(25)}</button>
        </div>
    );
  }
  
  export default MoneyPane;
  