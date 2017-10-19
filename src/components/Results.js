import React from 'react';

class Results extends React.Component {
    handleChange(event) {
        this.props.handleChange(event);
    }
    handleSubmit(event) {
        this.props.handleSubmit(event);
    }
    myRound(value, decimals) {
        console.log("rounded value");
        console.log(Math.round(value + 'e' + decimals) + 'e-' + decimals);
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
      }


    render() {
        return (
            <div id="results_panel" className="col s4 card-panel indigo lighten-3 white-text">
                Help me help you... let's crunch some numbers ;)

                <div id="results_list"> 
                    <h2> RESULTS: </h2>
                    <div> Your monthly income is ${this.props.myRound(this.props.results.monthlyIncome,2)} before taxes. <br/>
                     Your mortgage will be {this.props.results.numberPayments} monthly payments of
                     ${this.props.myRound(this.props.results.paymentAmount,2)} </div>
                    <div> This payment is {this.props.myRound(this.props.results.percentMonthlyIncome * 100,2)}% of your monthly earnings. </div>
                    <div> Additionally, you must pay ${this.props.results.monthlyFees > 0 ? this.props.results.monthlyFees : 0} in monthly fees
                     and ${this.props.results.mortgageInsurance > 0 ? this.props.results.mortgageInsurance: 0} for mortgage insurance. </div>
                    <div> This totals to ${this.props.myRound(this.props.results.totalSpending,2)} per month or {this.props.myRound(this.props.results.totalPercentMonthlyIncome * 100,2)}% of your monthly income. </div>
                </div>
                
            </div>
        );
    }
}

export default Results;