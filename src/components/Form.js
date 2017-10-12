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
                        class="validate"
                        value={this.props.annualIncome}
                        onChange={this.props.handleChange}/>
                        <label for="annualIncome">Annual Income</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8 offset-s1" id="home_price">
                        <input required
                        name="homePrice"
                        type="number"
                        id="homePrice"
                        class="validate"
                        value={this.props.homePrice}
                        onChange={this.props.handleChange}/>
                        <label for="homePrice">Home Price</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s8 offset-s1">
                        <input
                        name="monthlyFees"
                        type="checkbox"
                        id="monthlyFees"
                        class="validate"
                        value={this.props.monthlyFees}
                        onChange={this.props.handleChange}
                        onClick={this.props.showFeeAmount}/>
                        <label for="monthlyFees">Are there Monthly Fees?</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8 offset-s1" id="fee_amount">
                        <input
                        name="feesAmount"
                        type="number"
                        id="feesAmount"
                        class="validate"
                        placeholder="Fees may include Co-op, Building Maintenance, or HOA fees"
                        value={this.props.feesAmount}
                        onChange={this.props.handleChange}/>
                        <label for="feesAmount">Fees Amount</label>
                    </div>
                </div>
                <div className="row" id="down_payment">
                    <div className="input-field col s8 offset-s1">
                        <input required
                        name="downPayment"
                        type="number"
                        id="downPayment"
                        class="validate"
                        value={this.props.downPayment}
                        onChange={this.props.handleChange}
                        />
                        <label for="downPayment">Down Payment</label>
                    </div>
                </div>
                <div id="insurance">
                    You will need insurance unless you make a larger down payment.  Mortgage insurance will cost about ${this.props.homePrice * 0.01} per month.
                </div>
                <div className="row">
                    <div className="input-field col s8 offset-s1">
                        <input required
                        name="mortgageTerm"
                        type="number"
                        id="mortgageTerm"
                        class="validate"
                        value={this.props.mortgageTerm}
                        onChange={this.props.handleChange}/>
                        <label for="mortgageTerm">Mortgage Term</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8 offset-s1">
                        <input required
                        name="interestRate"
                        type="number"
                        id="interestRate"
                        class="validate"
                        value={this.props.interestRate}
                        onChange={this.props.handleChange}/>
                        <label for="interestRate">Interest Rate</label>
                    </div>
                </div>


                <div className="input-field col s2 offset-s1">
                    <button class="indigo btn waves-effect waves-light" type="submit" name="action">Calculate
                    <i class="material-icons right">update</i>
                    </button>
                </div>

                <div className="input-field col s2 offset-s1">
                    <button class="indigo btn waves-effect waves-light" type="reset" name="action" onClick={this.props.handleReset}>Reset
                    <i class="material-icons right">reset</i>
                    </button>
                </div>
                
                </form>     
            </div>
        );
    }
}

export default Form;