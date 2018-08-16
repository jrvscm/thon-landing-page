import React from 'react';
import glamorous from 'glamorous';

import LogoSvg from '../../assets/images/logo-white.png';
import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/instagram.svg';
import Send from '../../assets/images/send.svg';
import Slack from '../../assets/images/slack.svg';
import Twitter from '../../assets/images/twitter.svg';
import { orange, darkRed, lightRed, white } from '../../colors.js';
import { Row, Col, SubscribeButton } from '../../UIElements';

const Footer = () => (
	<Container>
		<Col>
			<Row>
				<Logo />
				<H1>thon</H1>
			</Row>
		</Col>
		<Col>
			<Row>
				<Social>
					<li><SocialButton><img src={Send} /></SocialButton></li>
					<li><SocialButton><img src={Facebook} /></SocialButton></li>
					<li><SocialButton><img src={Instagram} /></SocialButton></li>
					<li><SocialButton><img src={Twitter} /></SocialButton></li>
					<li><SocialButton><img src={Slack} /></SocialButton></li>
				</Social>
			</Row>
		</Col>
		<Col>
			<Row>
				<SubscribeButton>
					Subscribe
				</SubscribeButton>
			</Row>
		</Col>
	</Container>
)

export default Footer;

const Container = glamorous.div({
	position: `absolute`,
	bottom: 0,
	left: 0, 
	right: 0,
	height: 146,
	backgroundColor: orange,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `space-around`
})

const Logo = glamorous.div({
	height: 80,
	width: 80,
	marginRight: 5,
	backgroundImage: `url(${LogoSvg})`,
	backgroundSize: `cover`,
	backgroundPosition: `center center`,
	backgroundRepeat: `no-repeat`
})

const H1 = glamorous.h1({
	color: lightRed,
	fontFamily: 'SF-Pro-Display-Bold',
	fontWeight: `bold`,
	fontSize: 80,
	margin: 0
})

const Social = glamorous.ul({
	listStyleType: `none`,
	margin: 0,
	padding: 0,
	width: `100%`,
	textAlign: `center`,
	'& li':{
		display: `inline`,
		margin: `2%`
	}
})

const SocialButton = glamorous.button({
	backgroundColor: `transparent`,
	border: `none`,
	borderRadius: `50%`,
	cursor: `pointer`,
	outline: `none`,
	'&:focus':{
		outline: `none`
	}
})
