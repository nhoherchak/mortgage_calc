import React from 'react';

class Results extends React.Component {
    handleChange(event) {
        this.props.handleChange(event);
    }
    handleSubmit(event) {
        this.props.handleSubmit(event);
    }

    ///REF remove later
    /*results: {
        monthlyIncome: monthIncome,
        numberPayments: numPayments,
        PaymentAmount: mortgageAmount,
        percentMonthlyIncome: mortgageAmount/monthIncome,
        monthlyFees: this.state.monthlyFees,
        mortgageInsurance: "", //TODO what to do here
        totalSpending: totalSpent, //fix insurance ref
        totalPercentMonthlyIncome: totalSpent/monthIncome,
      }*/


    render() {
        return (
            <div id="results_panel" className="col s4 card-panel indigo lighten-3 white-text">
                Help me help YOU... let's crunch some numbers ;)

                <div id="results_list"> 
                    <h2> RESULTS: </h2>
                    <div> Your monthly income is ${this.props.results.monthlyIncome} before taxes. <br/>
                     Your mortgage will be {this.props.results.numberPayments} monthly payments of
                     ${this.props.results.paymentAmount} </div>
                    <div> This payment is {this.props.results.percentMonthlyIncome}% of your monthly earnings. </div>
                    <div> Additionally, you must pay ${this.props.results.monthlyFees > 0 ? this.props.results.monthlyFees : 0} in monthly fees
                     and ${this.props.results.mortgageInsurance > 0 ? this.props.results.mortgageInsurance: 0} for mortgage insurance. </div>
                    <div> This totals to ${this.props.results.totalSpending} per month or
                     {this.props.results.totalPercentMonthlyIncome}% of your monthly income. </div>
                </div>
                
            </div>
        );
    }
}

export default Results;