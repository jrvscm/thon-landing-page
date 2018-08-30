import React from 'react';
import glamorous from 'glamorous';

import Footer from '../Footer';
import Brands from '../Brands';
import CurveImage from '../../assets/images/curve-bottom-border-two.png';
import HeaderPattern from '../../assets/images/header-pattern-cropped.png';
import { orange, darkRed, lightRed, white } from '../../colors.js';
import { mediaQueries, Row, Col, SectionBorder } from '../../UIElements.js';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const FooterSection = ({toggler}) => {
	if(!isMobile || isMobile === `iPad`) {
		return(
			<Container>
				<CustomBorder src={CurveImage} />
				<Background>
					<H1>
						PROTECT YOUR INTELECTUAL PROPERTY<br />
						ON THE BLOCKCHAIN
					</H1>
				</Background>
				<Brands />
			<Footer toggler={toggler} />
		</Container>
	)
} else {
		return(
			<Container>
				<CustomBorder src={CurveImage} />
				<H1>
					PROTECT YOUR<br/> 
					INTELECTUAL<br /> 
					PROPERTY<br />
					ON THE BLOCKCHAIN
				</H1>			
				<Brands />
				<Footer toggler={toggler}/>
			</Container>		
		)
	}
}

export default FooterSection;

const Container = glamorous.div({
	position: `relative`,
	height: `100%`,
	width: `100vw`,
	[mediaQueries.mobile]:{
		display: `flex`,
		flexDirection: `column`,
		alignItems: `center`,
		justifyContent: `center`,
		minHeight: `100vh`
	}
})

const Background = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	height: `120vh`,
	width: `100vw`,
	backgroundImage: `url(${HeaderPattern})`,
	backgroundSize: `cover`,
	backgroundPosition: `center center`,
	backgroundRepeat: `no-repeat`,
	backgroundBlendMode: `soft-light`
})

const H1 = glamorous.h1({
	color: lightRed,
	fontFamily: 'SF-Pro-Display-Heavy',
	fontWeight: 900,
	fontSize: 40,
	marginBottom: `10vh`,
	color: white,
	textAlign: `center`,
	[mediaQueries.small]:{
		fontSize: 32,
	},
	[mediaQueries.mobile]:{
		fontSize: 22,
		marginTop: `30vh`,
		marginBottom: `30vh`
	},
	[mediaQueries.landscape]:{
		marginTop: 200,
		marginBottom: 200
	}
})


const CustomBorder = glamorous(SectionBorder)({
	top: -1,
	[mediaQueries.mobile]:{
		objectPosition: `top`
	}
})