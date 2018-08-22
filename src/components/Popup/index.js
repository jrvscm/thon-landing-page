import React, { Component } from 'react';
import glamorous from 'glamorous';

import Close from '../../assets/images/close-button.svg';
import Background from '../../assets/images/popup-background.png';
import LogoSvg from '../../assets/images/popup-thon-logo.svg';
import { Col, Row, P, mediaQueries, SubscribeButton } from '../../UIElements';
import { white, lightRed,disabledLightRed, darkRed, orange  } from '../../colors';
import 'whatwg-fetch';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

class Popup extends Component {
	constructor(props){
		super(props);

		this.state = {
			validator: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
			valid: false,
			touched: false,
			value: ''
		}
	}

	onClick() {
		const { toggler } = this.props;
		this.setState({
			value: ''
		})
		//closes popup after user is redirected to mailchimp signup
		setTimeout(() => {
			toggler();
			this.setState({
				valid: false
			})
		}, 0)
	}		

	onUpdate(e) {
		const { value, validator } = this.state;
    const valid = validator.test(String(value).toLowerCase());
    this.setState({
      value: e.target.value,
      valid: valid
    });

    const url = `${process.env.REACT_APP_MAILCHIMP_SUBSCRIBE_ENDPOINT}&MERGE0=${e.target.value}`;
    document.getElementById("mc-embedded-subscribe-form").action = url.toString(); 
	}

	touched() {
		this.setState({
			touched: true
		})
	}
	
	render(){
		const { hidden, toggler } = this.props;
		const { value, validator, valid } = this.state;

		if(hidden === true) {
			return(
				null
			)
		} else {
		return(
			<OuterLayer isMobile={isMobile}>
				<Container isMobile={isMobile}>
					<Wrapper>
						<LogoCol isMobile={isMobile}>
							<Sizer>
								<Logo src={LogoSvg} />
								<P color={white}>
									<span style={{fontFamily: 'SF-Pro-Display-Heavy', fontSize: 40}}>
										GET FUNDED, LEARN,<br />  
										NETWORK
									</span><br />
									THE MARKETPLACE OF<br />
									INNOVATION AND<br />
									OPPORTUNITIES<br />
									FOR HACKATHONS
								</P>
							</Sizer>
						</LogoCol>
						<FormCol isMobile={isMobile}>
							<CloseButton 
								src={Close} 
								role="button" 
								onClick={() => toggler()}
							/>
							<div style={{width: `100%`}}>
								<FormTitle
									color={orange}
									isMobile={isMobile}
								>
									THE WAY TO CHANGE<br />THE WORLD OF STARTUPS
								</FormTitle>
								<form action=""
									method="post" 
									id="mc-embedded-subscribe-form" 
									name="mc-embedded-subscribe-form" 
									className="validate" 
									target="_blank"
									name="subscribe" 
									autoComplete="off" 
									noValidate
								>
									<label htmlFor="email" />
									<CustomInput
										valid={valid}
										onClick={() => this.touched()} 
										value={value}
										onChange={(e) => this.onUpdate(e)}
										isMobile={isMobile}
										name="EMAIL" 
										type="email" 
										placeHolder="youremail@email.com"
										autoComplete="off"
									/>
									<Row>
										<CustomSubscribe 
											onClick={() => this.onClick()}
											disabled={!valid}
											isMobile={isMobile} 
											isValid={valid}
											type="submit" 
										>
											SUBSCRIBE
										</CustomSubscribe>
									</Row>
								</form>
							</div>
							<Row>
								<Terms>Privacy Policy and Terms of Use</Terms>
							</Row>
						</FormCol>
					</Wrapper>
				</Container>
			</OuterLayer>
			)
		}
	}
}

export default Popup;

const Container = glamorous.div({
	position: `fixed`,
	backgroundImage: `linear-gradient(to left, #ff9c00, #8f1e2f)`,
	zIndex: 100,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
}, ({isMobile}) => ({
		top: !isMobile ? `10%` : 0, 
		left: !isMobile ? `15%` : 0, 
		right: !isMobile ? `15%` : 0, 
		bottom: !isMobile ? `10%` : 0, 			
}))

const OuterLayer = glamorous.div({
	position: `fixed`,
	height: `100vh`,
	width: `100vw`,
	zIndex: 150,
	backgroundColor: `rgba(0,0,0,.9)`,
})

const Wrapper = glamorous.div({
	position: `absolute`,
	top: 0,
	right: 0,
	left: 0,
	bottom: 0,
	backgroundImage: `url(${Background})`,
	backgroundSize: `cover`,
	backgroundPosition: `center center`,
	backgroundRepeat: `no-repeat`,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`
})

const Logo = glamorous.img({
	height: 75,
	marginBottom: 10,
	[mediaQueries.mobile]:{
		marginTop: 75,
		marginBottom: 40
	}
})

const FormCol = glamorous(Col)({
	boxSizing: `border-box`,
	backgroundColor: white, 
	height: `100%`,
	width: `35%`,
	paddingRight: 30,
	paddingLeft: 30,
	border: `2px solid ${lightRed}`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	[mediaQueries.small]:{
		width: `45%`
	}
}, ({isMobile}) => ({
	width: !isMobile ? null : `100%`,
	minWidth: !isMobile ? null : `100%`
}))

const Sizer = glamorous.div({
	paddingLeft: 50
})

const CustomInput = glamorous.input({
	boxSizing: `border-box`,
  width: `100%`,
  height: 70,
  borderRadius: 5,
  marginBottom: 70,
  marginTop: 10,
  fontSize: 25,
  fontFamily: `SF-Pro-Text-Light`,
  fontWeight: 300,
  color: orange,
  paddingLeft: 15,
  paddingRight: 15,
  transition: `all .2s ease`,
  border: `solid 1px ${lightRed}`,
  '&:focus':{
  	outline: `none`
  }
}, ({isMobile, valid}) => ({
	marginTop: !isMobile ? null : 0,
	marginBottom: !isMobile ? null : `140`,
	border: valid === true ? `1px solid green` : null
}))

const CloseButton = glamorous.img({
	height: 35,
	width: 35,
	position: `absolute`,
	top: 10,
	right: 10,
	cursor: `pointer`
})

const LogoCol = glamorous(Col)({
	width: `70%`, 
	alignItems: `flex-start`,
}, ({isMobile}) => ({
	display: !isMobile ? null : `none`
}))

const CustomSubscribe = glamorous(SubscribeButton)({
	width: `95% !important`,
}, ({isMobile, isValid}) => ({
	marginTop: !isMobile ? null : `0 !important`,
	backgroundColor: isValid === false ? disabledLightRed : null
}))

const FormTitle = glamorous(P)({
	fontSize: `20px !important`,
	fontFamily: 'SF-Pro-Display-Bold', 
	fontWeight: 900,
}, ({isMobile}) => ({
	textAlign: !isMobile ? null : `center`,
	marginBottom: !isMobile ? null : `80`
}))

const Terms = glamorous.p({
	fontSize: 12,
	color: lightRed,
	position: `absolute`,
	bottom: 0
})