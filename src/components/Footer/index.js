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

const Footer = () => (
	<Container>
		<Col>
			<Row>
				<Logo />
			</Row>
		</Col>
		<Col style={{minWidth: 315}}>
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
					SUBSCRIBE
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
	width: 250,
	backgroundImage: `url(${LogoSvg})`,
	backgroundSize: `cover`,
	backgroundPosition: `center center`,
	backgroundRepeat: `no-repeat`,
	[mediaQueries.med]:{
		width: 200
	},
	[mediaQueries.small]:{
		width: 180
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
	height: 50,
	width: 50,
	'& img':{
		height: 50,
		width: 50
	},	
	'&:focus':{
		outline: `none`
	}
},
[mediaQueries.med]:{
	height: 38,
	width: 38,
	'& img':{
		height: 38,
		width: 38
	}
},
[mediaQueries.small]:{
	height: 40,
	width: 40,
	'& img':{
		height: 40,
		width: 40
	}
})
