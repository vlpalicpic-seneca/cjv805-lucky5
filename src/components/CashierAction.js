import '../css/App.css';

const CashierAction = (props) => {
    
    const clickCash = () => {
        props.clickCash();
    }

    const clickClear = () => {
        props.clickClear();
    }

    //fill in random
    const clickRandom = () => {
        let randomTemp = props.combination;
        while(randomTemp.length < 5){
            let num = Math.floor(Math.random() * (20) + 1)
            if (randomTemp.includes(num)){
                continue
            } else {
                randomTemp.push(num);
            }
            props.clickRandom(randomTemp);
        }
    }

    //completely random
    // const clickRandom = () => {
    //     let randomTemp = [];
    //     while(randomTemp.length < 5){
    //         let num = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    //         if (randomTemp.includes(num)){
    //             continue
    //         } else {
    //             randomTemp.push(num);
    //         }
    //         props.clickRandom(randomTemp);
    //     }
    // }

    return (
        <div className='actionContainer'>
            <button className='actionButton' onClick = {clickCash}>Cash</button>
            <button className='actionButton' onClick = {clickClear}>Clear</button>
            <button className='actionButton' onClick = {clickRandom}>Random</button>
        </div>
    );
  }
  
  export default CashierAction;
  