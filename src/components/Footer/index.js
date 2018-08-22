import React from 'react';
import glamorous from 'glamorous';

import LogoSvg from '../../assets/images/thon-logo-white.svg';
import Social from '../../constants/Social';
import { orange, darkRed, lightRed, white } from '../../colors.js';
import { Row, Col, SubscribeButton, mediaQueries } from '../../UIElements';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const Footer = ({toggler}) => {
	if(!isMobile || isMobile === `iPad`) {
		return(	
			<Container>
				<Col>
					<Row>
						<Logo src={LogoSvg} />
					</Row>
				</Col>
				<Col style={{minWidth: 315}}>
					<Row>
						<Social />
					</Row>
				</Col>
				<Col>
					<Row>
						<SubscribeButton onClick={() => toggler()}>
							SUBSCRIBE
						</SubscribeButton>
					</Row>
				</Col>
			</Container>
		)
	} else {
		return(
			<Container>
				<Row>
					<Logo src={LogoSvg} />
				</Row>
				<Row>
					<Social />
				</Row>
				<Row>
					<FooterSubscribeButton onClick={() => toggler()}>
						SUBSCRIBE
					</FooterSubscribeButton>
				</Row>
			</Container>			
		)
	}
}

export default Footer;

const Container = glamorous.div({
	position: `absolute`,
	bottom: 0,
	left: 0, 
	right: 0,
	height: `auto`,
	backgroundColor: orange,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `space-around`,
	[mediaQueries.mobile]:{
		height: `auto`,
		flexDirection: `column`
	}
})

const Logo = glamorous.img({
	height: 75,
	[mediaQueries.mobile]:{
		marginTop: 30,
		height: 50
	}	
})

const H1 = glamorous.h1({
	color: lightRed,
	fontFamily: 'SF-Pro-Display-Bold',
	fontWeight: `bold`,
	fontSize: 80,
	margin: 0
})

const FooterSubscribeButton = glamorous(SubscribeButton)({
	minWidth: `75vw`,
	marginBottom: 30,
	marginTop: `0 !important`,
})