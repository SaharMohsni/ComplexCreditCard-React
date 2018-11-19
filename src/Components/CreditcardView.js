import React from "react";

const formatCardNumberForCard = cardNumber =>
    cardNumber.concat("*".repeat(16 - cardNumber.length))


const CreditcardView = (props) => 
      <div className="card">
        <div className="title">
          <h1>VIP CREDIT CARD </h1>
        </div>
        <div className="puce"></div>
        <div className="main-container">
          <div className="leftBlock">
            <div className="cardNum">
              <span>{formatCardNumberForCard(props.creditCardinfo[0])}</span>
            </div>
            <div className="description">
              <div className=" codeName">
                <span className="code">5422</span>
                <span className="name">{props.creditCardinfo[1]}</span>
              </div>
              <div className="validateDate">
                <div className="valid">
                  <span>VALID THRU</span>
                </div>
                <div className="MonthYear">
                  <div className="monthyearletter">
                    <span>MONTH/YEAR</span>
                  </div>
                  <div className="monthyearNumber">
                    <span>{props.creditCardinfo[2]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightBlock" />
        </div>
      </div>
  

export default CreditcardView;
