import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Natasha",
      annualIncome: "",
      homePrice: "",
      monthlyFees: "",
      feesAmount: "",
      downPayment: "",
      mortgageTerm: "",
      interestRate: "",
      firstCheck: true,
      test: "",
      results: {
        monthlyIncome: "",
        numberPayments: "",
        PaymentAmount: "",
        percentMonthlyIncome: "",
        monthlyFees: "",
        mortgageInsurance: "",
        totalSpending: "",
        totalPercentMonthlyIncome: ""
      }
    }

  }

  showFeeAmount(event) {
    if (document.getElementById('fee_amount').style.display === "none" || this.state.firstCheck) {
      document
        .getElementById('fee_amount')
        .style
        .display = "block";
      this.setState({firstCheck: false});
    } else {
      document
        .getElementById('fee_amount')
        .style
        .display = "none";
    }
  }

  handleChange(event) {
    const name = event.target.name; //eg currentTitle or currentDetails
    const value = event.target.value;

    this.setState({[name]: value});
    console.log({[name]: value});
    
    this.checkInsurance(name, value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      annualIncome: this.state.annualIncome,
      homePrice: this.state.homePrice,
      monthlyFees: this.state.monthlyFees,
      feesAmount: this.state.feesAmount,
      downPayment: this.state.downPayment,
      mortgageTerm: this.state.mortgageTerm,
      interestRate: this.state.interestRate
    });
    //firebase.database().ref('/notes').push(data, response => response);
    //TODO do some calculation here!!! Results calculations
    const monthIncome = this.state.annualIncome / 12;
    const numPayments = this.state.mortgageTerm * 12;
    const interestPercent = this.state.interestRate / 100;
    const mortgageAmount = (Number(this.state.homePrice) - Number(this.state.downPayment)) * 
                          ((interestPercent * (1 + interestPercent) ^ numPayments) /
                          (((1 + interestPercent) ^ numPayments) - 1));
    const monthlyMortgage = mortgageAmount/numPayments;
    console.log(mortgageAmount);
    console.log(Number(this.state.homePrice) - Number(this.state.downPayment));
    console.log((interestPercent * (1 + interestPercent) ^ numPayments));
    console.log(((1 + interestPercent) ^ numPayments) - 1);
    
    var downpaymentPercent = this.state.downPayment / this.state.homePrice;
    console.log("downpayment percent : " + downpaymentPercent);
    let insuranceM;
    if (downpaymentPercent < 0.02) {
      insuranceM = ((this.state.homePrice-this.state.downPayment) * 0.01) / 12;
    } else {
      insuranceM = 0;
    }
    const totalSpent = monthlyMortgage + new Number(this.state.feesAmount) + insuranceM;
    
    //add results to props
    this.setState({
      results: {
        monthlyIncome: monthIncome,
        numberPayments: numPayments,
        paymentAmount: monthlyMortgage,
        percentMonthlyIncome: monthlyMortgage / monthIncome,
        monthlyFees: this.state.feesAmount,
        mortgageInsurance: insuranceM, //TODO what to do here
        totalSpending: totalSpent, //fix insurance ref
        totalPercentMonthlyIncome: totalSpent / monthIncome
      }
    });
    //display results
    document
      .getElementById('results_list')
      .style
      .display = "block";

  }

  handleReset(event) {
    this.setState({
      annualIncome: "",
      homePrice: "",
      monthlyFees: "",
      feesAmount: "",
      downPayment: "",
      mortgageTerm: "",
      interestRate: ""
    });
  }

  checkInsurance(name, value) {
    let downpaymentPercent;
    if (name === 'downPayment') {
      downpaymentPercent = value / this.state.homePrice;
    } else if (name === 'homePrice') {
      downpaymentPercent = this.state.downPayment / value;
    } else {
      downpaymentPercent = this.state.downPayment / this.state.homePrice;
    }
    console.log("downpayment percent : " + downpaymentPercent);
    if (downpaymentPercent < 0.02) {
      document
        .getElementById('insurance')
        .style
        .display = "block";
    } else {
      document
        .getElementById('insurance')
        .style
        .display = "none";
    }

    /*
    var downpayment = document.getElementById("down_payment");
    var homeprice1 = document.getElementById("home_price");
    var downpaymentPercent = downpayment / homeprice1;
    
    downpayment.addEventListener("input", function (event) {
      if (email.validity.typeMismatch) {
        email.setCustomValidity("I expect an e-mail, darling!");
      } else {
        email.setCustomValidity("");
      }
    });*/
  }

  myRound(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name}/>
        <div className="indigo white-text center">
          Interested in a new home? Let me help...
        </div>
        <div className="row">
          <Form
            annualIncome={this.state.annualIncome}
            homePrice={this.state.homePrice}
            monthlyFees={this.state.monthlyFees}
            feesAmount={this.state.feesAmount}
            downPayment={this.state.downPayment}
            mortgageTerm={this.state.mortgageTerm}
            interestRate={this.state.interestRate}
            handleChange={this
            .handleChange
            .bind(this)}
            handleSubmit={this
            .handleSubmit
            .bind(this)}
            showFeeAmount={this
            .showFeeAmount
            .bind(this)}
            handleReset={this
            .handleReset
            .bind(this)}
            checkInsurance={this
            .checkInsurance
            .bind(this)}
            test={this.state.test}/>
          <Results results={this.state.results} myRound={this
            .myRound
            .bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
