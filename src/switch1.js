import React from 'react';

class Switch1 extends React.Component{

    render(){ 
		return (
			<div className={this.props.klasa}>
				<input id={this.props.mySwitchid} type={this.props.myTypeBox} onChange={this.props.myChange}/>
				<div className={this.props.myWrapperKlasa}>
					<label htmlFor={this.props.myLabhtmlFor} className={this.props.myLabKlasa}><span className={this.props.mySpanKlasa}></span><span className={this.props.mySpanKlasa}></span><span className={this.props.mySpanKlasa}></span></label>
				</div>
			</div>
		);  
	}
}

export default Switch1;