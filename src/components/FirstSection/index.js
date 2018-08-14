import React from 'react';
import glamorous from 'glamorous';
import { Textfit } from 'react-textfit';

import HeaderPattern from '../../assets/images/header-pattern-cropped.png';
import LogoSvg from '../../assets/images/logo-light-red.png';
import StackedIphones from '../../assets/images/stacked-iphones.png';
import { orange, darkRed, lightRed, white } from '../../colors.js';
import { mediaQueries } from '../../UIElements.js';

const FirstSection = () => (
	<Container>
		<BackGround>
			<Row>
				<Col>
					<InnerRow>
						<Logo />
						<H1>thon</H1>
					</InnerRow>
					<InnerRow>
						<P>
							GET FUNDED, LEARN, NETWORK<br/> 
							THE MARKETPLACE OF INNOVATION<br/>
							AND OPPORTUNITIES FOR HACKATHONS
						</P>
					</InnerRow>
					<InnerRow>
						<Button>SUBSCRIBE</Button>
					</InnerRow>
				</Col>
				<Iphones src={StackedIphones} />
			</Row>
		</BackGround>
	</Container>
)

export default FirstSection;

const Container = glamorous.div({
	height: `100%`,
	minHeight: `100vh`,
	width: `100%`,
	minWidth: `100vw`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justyfContent: `center`
})

const BackGround = glamorous.div({
	height: `100vh`,
	width: `100vw`,
	backgroundColor: orange,
	backgroundImage: `url(${HeaderPattern})`,
	backgroundSize: `cover`,
	backgroundPosition: `center center`,
	backgroundRepeat: `no-repeat`
})

const Row = glamorous.div({
	height: `100%`,
	width: `100%`,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`
})

const InnerRow = glamorous.div({
	width: `100%`,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `flex-start`
})

const Col = glamorous.div({
	width: `50%`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `flex-start`
})

const Logo = glamorous.div({
	height: 75,
	width: 75,
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

const P = glamorous.p({
	fontSize: 40,
	fontFamily: 'SF-Pro-Text-Light',
	fontWeight: 900,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: `normal`,
  letterSpacing: 0.5,
  color: white,
  [mediaQueries.large]: {
  	fontSize: 30
  },
  [mediaQueries.med]: {
  	fontSize: 25
  }
})

const Button = glamorous.button({
	height: 70,
	width: 300,
	borderRadius: 39,
	backgroundColor: lightRed,
	color: white,
	border: `none`,
	fontFamily: 'SF-Pro-Text-Light',
	fontSize: 30,
	fontWeight: 500,
	fontStyle: `normal`,
	fontStretch: `normal`,
	fontHeight: `normal`,
	letterSpacing: 0.5
})

const Iphones = glamorous.img({
	maxHeight: 700
})