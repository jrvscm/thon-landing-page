import React from 'react';
import glamorous from 'glamorous';

import Close from '../../assets/images/close-button.svg';
import Background from '../../assets/images/popup-background.png';
import LogoSvg from '../../assets/images/popup-thon-logo.svg';
import { Col, Row, P, mediaQueries, SubscribeButton } from '../../UIElements';
import { white, lightRed, darkRed, orange  } from '../../colors';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const Popup = ({hidden, toggler}) => {
	if(hidden === true) {
		return(
			null
		)
	} else {
		return(
			<Container>
				<Wrapper>
					<LogoCol isMobile={isMobile}>
						<Sizer>
							<Logo src={LogoSvg} />
							<P color={white}>
								GET FUNDED, LEARN,<br />  
								NETWORK<br />
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
							<form autocomplete="off">
								<label htmlFor="email" />
								<CustomInput 
									isMobile={isMobile}
									name="email" 
									type="email" 
									autocomplete="off"
								/>
							</form>
							<Row>
								<CustomSubscribe isMobile={isMobile} type="submit">SUBSCRIBE</CustomSubscribe>
							</Row>
						</div>
						<Row>
							<Terms>Privacy Policy and Terms of Use</Terms>
						</Row>
					</FormCol>
				</Wrapper>
			</Container>
		)
	}
}

export default Popup;

const Container = glamorous.div({
	position: `fixed`,
	top: 0,
	right: 0,
	left: 0,
	bottom: 0,
	backgroundImage: `linear-gradient(to left, #ff9c00, #8f1e2f)`,
	zIndex: 100,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
})

const Wrapper = glamorous.div({
	position: `fixed`,
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
	position: `relative`,
	boxSizing: `border-box`,
	backgroundColor: white, 
	height: `100vh`,
	width: `30%`,
	minWidth: 350,
	paddingRight: 30,
	paddingLeft: 30,
	border: `2px solid ${lightRed}`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
}, ({isMobile}) => ({
	width: !isMobile ? null : `100%`,
	minWidth: !isMobile ? null : `100%`,
	'&::-webkit-scrollbar':{
		display: `none`
	}
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
  border: `solid 1px ${lightRed}`,
  '&:focus':{
  	outline: `none`
  }
}, ({isMobile}) => ({
	marginTop: !isMobile ? null : 0,
	marginBottom: !isMobile ? null : `140`
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
	width: `95%`,
}, ({isMobile}) => ({
	marginTop: !isMobile ? null : `0 !important`
}))

const FormTitle = glamorous(P)({
	fontSize: `20px !important`, 
	fontWeight: 300,
}, ({isMobile}) => ({
	textAlign: !isMobile ? null : `center`,
	marginBottom: `80`
}))

const Terms = glamorous.p({
	fontSize: 12,
	color: lightRed,
	position: `fixed`,
	bottom: 0
})