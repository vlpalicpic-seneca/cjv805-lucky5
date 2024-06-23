import '../css/App.css';
import ChoicePane from './ChoicePane.js';
import Header from './Header.js';
import SelectionPane from './SelectionPane.js';
import CashierAction from './CashierAction.js';
import MoneyPane from './MoneyPane.js'
import Ticket from './Ticket.js';
import { Footer } from './Footer.js';
import { useState } from 'react';

const App = () => {
  
  const [combination, setCombination] = useState([]);
  const [counter, setCounter] = useState(0);
  const [money, setMoney] = useState(0);
  const [ticketCombination, setTicketCombination] = useState([]);
  const [ticketMoney, setTicketMoney] = useState(0);

  const selectNum = (num) => {
    //check if max length or number already selected
    if (combination.length < 5 || combination.includes(num)){
      //already selected
      if (combination.includes(num)) {
          let temp = combination;
          temp.splice(temp.indexOf(num), 1);
          setCombination(temp);
          setCounter(counter-1);
      //add to combination state
      } else {
          let temp = combination;
          temp.push(num);
          setCombination(temp);
          setCounter(counter+1);
          }
      } else {
        alert("You can only choose 5 numbers!");
    }
    console.log(combination);
  }

  const clickCash = () => {
    //selected less than 5 numbers
    if (combination.length !== 5){
      // console.log(combination);
      alert("You need to select 5 numbers!");
    //selected combination but betted no money
    } else if (money <= 0) {
      alert("Missing money value!");
    } else {
      setTicketCombination(combination);
      setTicketMoney(money);
    }
  }

  const clickClear = () => {
    //clear all states
    setCombination([]);
    setMoney(0);
    setTicketCombination([]);
    setTicketMoney(0);
  }

  const clickRandom = (numArray) => {
    //set array from random button function to combination state
    setCombination(numArray);
    //clear money from previous selection
    setMoney(0);
    //clear ticket displays
    setTicketCombination([]);
    setTicketMoney(0);
  }

  const addMoney = (value) => {
    let newValue = money + value;
    setMoney(newValue);
  }
  
  return (
    <div className><center>
      <Header />
      <div className='containerStyle'>
        <div className='mainStyle'>
          <ChoicePane combination = {combination} money={money}></ChoicePane>
          <SelectionPane combination = {combination} selectNum = {selectNum} ></SelectionPane>
          <MoneyPane addMoney = {addMoney}></MoneyPane>
          <CashierAction clickCash = {clickCash} clickClear = {clickClear} clickRandom = {clickRandom} combination = {combination}></CashierAction>
        </div>
        <div className='ticketStyle'>
          <Ticket combination = {ticketCombination} money={ticketMoney}></Ticket>
        </div>
      </div>
      <Footer />
    </center></div>
  );
}

export default App;
