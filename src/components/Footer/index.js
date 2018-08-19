import React from 'react';
import glamorous from 'glamorous';

import LogoSvg from '../../assets/images/thon-logo-white.svg';
import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/instagram.svg';
import Send from '../../assets/images/send.svg';
import Slack from '../../assets/images/slack.svg';
import Twitter from '../../assets/images/twitter.svg';
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
						<Social>
							<li><SocialButton src={Send} /></li>
							<li><SocialButton src={Facebook} /></li>
							<li><SocialButton src={Instagram} /></li>
							<li><SocialButton src={Twitter} /></li>
							<li><SocialButton src={Slack} /></li>
						</Social>
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
					<Social>
						<li><SocialButton role={`button`} src={Send} /></li>
						<li><SocialButton role={`button`} src={Facebook} /></li>
						<li><SocialButton role={`button`} src={Instagram} /></li>
						<li><SocialButton role={`button`} src={Twitter} /></li>
						<li><SocialButton role={`button`} src={Slack} /></li>
					</Social>
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

const Social = glamorous.ul({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `space-between`,
	listStyleType: `none`,
	marginRight: `10%`,
	marginLeft: `10%`,
	marginTop: 30,
	marginBottom: 30,
	padding: 0,
	width: `100%`,
	textAlign: `center`,
	'& li':{
		display: `inline`
	}
})

const SocialButton = glamorous.img({
	backgroundColor: `transparent`,
	border: `none`,
	borderRadius: `50%`,
	cursor: `pointer`,
	outline: `none`,
	height: 50,
	width: 50,	
	[mediaQueries.med]:{
		height: 40,
		width: 40
	},
	[mediaQueries.mobile]:{
		height: 30,
		width: 30
	}
})

const FooterSubscribeButton = glamorous(SubscribeButton)({
	minWidth: `75vw`,
	marginBottom: 30,
	marginTop: `0 !important`,
})