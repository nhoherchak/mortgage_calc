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
    this.checkInsurance(event);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      annualIncome: this.state.annualIncome,
      homePrice: this.state.homePrice,
      monthlyFees: this.state.monthlyFees,
      feesAmount: this.state.feesAmount,
      downPayment: this.state.downPayment,
      mortgageTerm: this.state.mortgageTerm,
      interestRate: this.state.interestRate
    };
    //firebase.database().ref('/notes').push(data, response => response);
    //TODO do some calculation here!!! Results calculations
    const monthIncome = this.state.annualIncome / 12;
    const numPayments = this.state.mortgageTerm * 12;
    const interestPercent = this.state.interestRate / 100;
    const mortgageAmount = (this.state.homePrice - this.state.downPayment) * ((interestPercent * (1 + interestPercent) ^ numPayments) / (((1 + interestPercent) ^ numPayments) - 1));
    const monthlyMortgage = mortgageAmount/numPayments;
    
    var downpaymentPercent = this.state.downPayment / this.state.homePrice;
    let insuranceM;
    if (downpaymentPercent < 0.02) {
      insuranceM = (this.state.homePrice-this.state.downPayment) * 0.01;
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

  checkInsurance(event) {
    var downpaymentPercent = this.state.downPayment / this.state.homePrice;
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
    
    downpayment.addEventListener("input", function (event) {
      if (email.validity.typeMismatch) {
        email.setCustomValidity("I expect an e-mail, darling!");
      } else {
        email.setCustomValidity("");
      }
    });*/
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
            .bind(this)}/>
          <Results results={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default App;
