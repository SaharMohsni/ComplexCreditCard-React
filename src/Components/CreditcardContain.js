import React, { Component } from 'react';
import CreditcardView from "./CreditcardView"
/**************Card Number ******************/
const normalizeCardNumber = cardNumber =>
    cardNumber.replace(/\D/g, "").slice(0, 16);
    
//format: prepare data to be rendred
const formatCardNumberForInput = cardNumber => {
    if (cardNumber === "") return "";
return cardNumber.match(/.{1,4}/g).join(" ");
};

/**************Month and year ******************/
//normalize: prepare data to be saved
const normalizeValidThru = validThru => {
    let monthAndYear = validThru
      .replace(/\D/g, "")
      .slice(0, 4)
      .match(/.{1,2}/g);
      if (!monthAndYear) {
        return "";
      }
      if (monthAndYear.length === 1) {
        let monthAsNumber = Number(monthAndYear[0]);
        if (monthAsNumber > 12) monthAndYear[0]= "12";
        if (monthAsNumber === 0 && monthAndYear[0].length === 2) {
            monthAndYear[0]= "0";
        }
      }
      if (monthAndYear.length===2){
        let yearAsNumber = Number(monthAndYear[1]); 
        if(yearAsNumber>50) monthAndYear[1]= "50";
        if (yearAsNumber === 0) monthAndYear[1]= "0";
       
      }
      return monthAndYear.join("/");
      
};
  

class CreditcardContain extends Component{
    constructor(props){
        super(props);
        this.state = {
            cardNumber:"",
            name:"",
            monthAndYear:""
        };
    }
    
//normalisation cardNumber
changeNumber = event =>{
    this.setState({
        cardNumber: normalizeCardNumber(event.target.value)
    });
  console.log(event.target.value)
}
//normalisation name
changeName = event =>
    this.setState({
        name: event.target.value
        .trimLeft()
        .replace(/\d/g, "")
        .toUpperCase()
        .slice(0, 16)
    });
//normalisation Month and Year
changeMonthYear = event =>
    this.setState({
        monthAndYear: normalizeValidThru(event.target.value)
    });

render() {
    return (
        <div className="cardContainer">
            <CreditcardView creditCardinfo={[this.state.cardNumber,this.state.name,this.state.monthAndYear]} />
            <div className="inputArea"> 
                <span className="inputTitle">Input Area:</span>
                <input value={formatCardNumberForInput(this.state.cardNumber)} onChange={this.changeNumber} type="text" name="cardNumber" placeholder="Credit Card Number" />
                <input value={this.state.name} onChange={this.changeName} type="text" name="ownerName" placeholder="Holder Name"/>
                <input value={this.state.monthAndYear} onChange={this.changeMonthYear} type="text" name="month-Year" placeholder="Month and Year"/>
            </div>
        </div>
    )

}
}
export default CreditcardContain