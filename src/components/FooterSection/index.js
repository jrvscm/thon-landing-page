import React from 'react';
import glamorous from 'glamorous';

import Footer from '../Footer';
import HeaderPattern from '../../assets/images/header-pattern-cropped.png';
import LogoSvg from '../../assets/images/logo-light-red.png';
import { orange, darkRed, lightRed, white } from '../../colors.js';
import { mediaQueries, Row, Col } from '../../UIElements.js';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const FooterSection = () => {
	if(!isMobile){
		return(
			<Container>
				<Background>
					<H1>
						PROTECT YOUR INTELECTUAL PROPERTY<br />
						ON THE BLOCKCHAIN
					</H1>
				</Background>
			<Footer />
		</Container>
	)
	} else {
		return(
			<Container>
				<H1>
					PROTECT YOUR INTELECTUAL<br /> 
					PROPERTY<br />
					ON THE BLOCKCHAIN
				</H1>
				<Footer />
			</Container>		
		)
	}
}

export default FooterSection;

const Container = glamorous.div({
	position: `relative`,
	height: `100%`,
	width: `100%`,
	[mediaQueries.mobile]:{
		display: `flex`,
		flexDirection: `column`,
		alignItems: `center`,
		justifyContent: `center`
	}
})

const Background = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	height: `100vh`,
	width: `100vw`,
	marginTop: `-40vh`,
	backgroundImage: `url(${HeaderPattern})`,
	backgroundSize: `cover`,
	backgroundPosition: `center center`,
	backgroundRepeat: `no-repeat`
})

const H1 = glamorous.h1({
	color: lightRed,
	fontFamily: 'SF-Pro-Display-Bold',
	fontWeight: 300,
	fontSize: 40,
	margin: 0,
	color: white,
	textAlign: `center`,
	[mediaQueries.small]:{
		fontSize: 32
	}
})

