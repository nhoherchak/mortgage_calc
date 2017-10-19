import React from 'react';

class Form extends React.Component {
    handleChange(event) {
        this.props.handleChange(event);
    }
    handleSubmit(event) {
        this.props.handleSubmit(event);
    }
    showFeeAmount(event) {
        this.props.showFeeAmount(event);
    }
    handleReset(event) {
        this.props.handleReset(event);
    }
    checkInsurance(event) {
        this.props.checkInsurance(event);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} className="col s7">


                <div className="row">
                    <div className="input-field col s8 offset-s1">
                        <input required
                        name="annualIncome"
                        type="number"
                        id="annualIncome"
                        className="validate"
                        value={this.props.annualIncome}
                        onChange={this.props.handleChange}/>
                        <label htmlFor="annualIncome">Annual Income</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8 offset-s1" id="home_price">
                        <input required
                        name="homePrice"
                        type="number"
                        id="homePrice"
                        className="validate"
                        value={this.props.homePrice}
                        onChange={this.props.handleChange}/>
                        <label htmlFor="homePrice">Home Price</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s8 offset-s1">
                        <input
                        name="monthlyFees"
                        type="checkbox"
                        id="monthlyFees"
                        className="validate"
                        value={this.props.monthlyFees}
                        onChange={this.props.handleChange}
                        onClick={this.props.showFeeAmount}/>
                        <label htmlFor="monthlyFees">Are there Monthly Fees?</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8 offset-s1" id="fee_amount">
                        <input
                        name="feesAmount"
                        type="number"
                        id="feesAmount"
                        className="validate"
                        placeholder="Fees may include Co-op, Building Maintenance, or HOA fees"
                        value={this.props.feesAmount}
                        onChange={this.props.handleChange}/>
                        <label htmlFor="feesAmount">Fees Amount</label>
                    </div>
                </div>
                <div className="row" id="down_payment">
                    <div className="input-field col s8 offset-s1">
                        <input required
                        name="downPayment"
                        type="number"
                        id="downPayment"
                        className="validate"
                        value={this.props.downPayment}
                        onChange={this.props.handleChange}
                        />
                        <label htmlFor="downPayment">Down Payment</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6 offset-s3 yellow lighten-3" id="insurance">
                        You will need insurance unless you make a larger down payment.  Mortgage insurance will cost about 1% of the remaining home cost or ${((this.props.homePrice-this.props.downPayment) * 0.01)/12} per month.
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8 offset-s1">
                        <input required
                        name="mortgageTerm"
                        type="number"
                        id="mortgageTerm"
                        className="validate"
                        value={this.props.mortgageTerm}
                        onChange={this.props.handleChange}/>
                        <label htmlFor="mortgageTerm">Mortgage Term</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8 offset-s1">
                        <input required
                        name="interestRate"
                        type="number"
                        id="interestRate"
                        className="validate"
                        value={this.props.interestRate}
                        onChange={this.props.handleChange}/>
                        <label htmlFor="interestRate">Interest Rate</label>
                    </div>
                </div>


                <div className="input-field col s2 offset-s1">
                    <button className="indigo btn waves-effect waves-light" type="submit" name="action">Calculate
                    <i className="material-icons right">update</i>
                    </button>
                </div>

                <div className="input-field col s2 offset-s1">
                    <button className="indigo btn waves-effect waves-light" type="reset" name="action" onClick={this.props.handleReset}>Reset
                    <i className="material-icons right">reset</i>
                    </button>
                </div>
                
                </form>     
            </div>
        );
    }
}

export default Form;