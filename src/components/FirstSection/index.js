import React from 'react';
import glamorous from 'glamorous';
import { Textfit } from 'react-textfit';

import CurveImage from  '../../assets/images/curve-top-border-one.png';
import SvgIcon from '../../assets/images/thon-logo-red.svg';
import HeaderPattern from '../../assets/images/header-pattern-cropped.png';
import StackedIphones from '../../assets/images/stacked-iphones.png';
import DiscoverInnovation from '../../assets/images/discover-innovation.png';
import { orange, darkRed, lightRed, white } from '../../colors.js';
import { mediaQueries, Row, SubscribeButton, SectionBorder } from '../../UIElements.js';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const FirstSection = ({toggler}) => {
	if(!isMobile || isMobile === `iPad`) {
	return(	
		<Container>
			<Background>
				<GlamorousRow>
					<Col>
						<InnerRow>
							<Logo src={SvgIcon} />
						</InnerRow>
						<InnerRow style={{marginTop: 30, marginBottom: 30}}>
							<P>
								GET FUNDED, LEARN, NETWORK<br/> 
								THE MARKETPLACE OF INNOVATION<br/>
								AND OPPORTUNITIES FOR HACKATHONS
							</P>
						</InnerRow>
						<InnerRow>
							<SubscribeButton onClick={() => toggler()}>SUBSCRIBE</SubscribeButton>
						</InnerRow>
					</Col>
					<Iphones src={StackedIphones} />
				</GlamorousRow>
				<SectionBorder src={CurveImage} />	
			</Background>	
		</Container>
	)
} else {
	return(
		<Container>
			<Background>
				<Col>
					<InnerRow>
						<Logo src={SvgIcon} />
					</InnerRow>
					<InnerRow>
						<P>
							GET FUNDED, LEARN, NETWORK<br/> 
							THE MARKETPLACE OF INNOVATION<br/>
							AND OPPORTUNITIES FOR HACKATHONS
						</P>
					</InnerRow>
				</Col>
				<Iphones src={DiscoverInnovation} />
				<SectionBorder src={CurveImage} />
			</Background>
		</Container>			
		)
	}
}

export default FirstSection;

const Container = glamorous.div({	
	minHeight: `100vh`,
	width: `100vw`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justyfContent: `center`,
})

const Background = glamorous.div({
	position: `relative`, 
	height: `100vh`,
	width: `100vw`,
	paddingBottom: `20vh`,
	backgroundImage: `url(${HeaderPattern})`,
	backgroundSize: `cover`,
	backgroundPosition: `center center`,
	backgroundRepeat: `no-repeat`,
	[mediaQueries.mobile]:{
		backgroundSize: `140vw, 100vh`,
		backgroundPosition: `left top`,
		paddingBottom: `28vh`,
	}
})

const InnerRow = glamorous.div({
	width: `100%`,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `flex-start`,
	[mediaQueries.mobile]:{
		width: `80%`
	}
})

const Col = glamorous.div({
	width: `50%`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `flex-start`,
	[mediaQueries.mobile]:{
		width: `100%`,
		justifyContent: `center`
	}
})

const Logo = glamorous.img({
	height: 75,
	[mediaQueries.mobile]:{
		marginTop: 75,
		marginBottom: 40
	}
})

const H1 = glamorous.h1({
	color: lightRed,
	fontFamily: 'SF-Pro-Display-Bold',
	fontWeight: `bold`,
	fontSize: 80,
	margin: 0
})

const P = glamorous.p({
	margin: 0,
	padding: 0,
	fontSize: 40,
	fontFamily: 'SF-Pro-Text-Light',
	fontWeight: 400,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: `normal`,
  letterSpacing: 0.5,
  color: white,
  [mediaQueries.regular]: {
  	fontSize: 30
  },
  [mediaQueries.med]: {
  	fontSize: 25
  },
  [mediaQueries.small]:{
  	fontSize: 22
  }
})

const Iphones = glamorous.img({
	height: `90%`,
	marginTop: 100,
	[mediaQueries.regular]:{
		height: `70%`,
	},
	[mediaQueries.med]:{
		height: `60%`
	},
	[mediaQueries.small]:{
		height: `50%`
	},
	[mediaQueries.mobile]:{
		height: `100%`,
		width: `100%`,
		marginTop: 40
	}
})

const GlamorousRow = glamorous(Row)({
	height: `100%`
})

