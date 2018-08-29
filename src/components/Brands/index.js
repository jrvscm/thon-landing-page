import React from 'react';
import glamorous from 'glamorous';

import BrandsCurve from '../../assets/images/brands-curve.png';
import Logos from '../../assets/images/all-logos.png';
import MobileLogos from '../../assets/images/mobile-brands.png';
import { SectionBorder, Col, Row, P, mediaQueries } from '../../UIElements';
import { white, orange } from '../../colors';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const Brands = () => {
	if(!isMobile || isMobile === `iPad`) {
		return(	
			<Container>
				<CustomBorder src={BrandsCurve} />
				<ContentContainer>
					<Row>
						<P style={{fontSize: 36, zIndex: 1}} color={orange}>
							OTHERS ARE TALKING ABOUT US
						</P>
					</Row>
					<Logo src={Logos} />
				</ContentContainer>
			</Container>
		)
	} else {
		return(
			<Container>
				<CustomBorder src={BrandsCurve} />
				<ContentContainer>
					<Row>
						<MobileP color={orange}>
							OTHERS ARE TALKING ABOUT US
						</MobileP>
					</Row>
					<Row>
						<Logo src={MobileLogos} />
					</Row>
				</ContentContainer>
			</Container>
		)
	}
}

export default Brands;

const Container = glamorous.div({
	position: 'relative',
	height: `100%`,
	width: `100vw`,
	backgroundColor: `transparent`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
})

const ContentContainer = glamorous.div({
	height: `100%`,
	width: `100vw`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	backgroundColor: white
})

const CustomBorder = glamorous(SectionBorder)({
	top: `-30vh`,
	[mediaQueries.med]:{
		top: `-15vh`
	}
})

const Logo = glamorous.img({
	width: `70%`,
	marginTop: `10vh`,
	marginBottom: `30vh`,
	[mediaQueries.med]:{
		width: `90%`,
		marginBottom: `25vh`
	},
	[mediaQueries.mobile]:{
		marginBottom: `50vh`
	}
})

const MobileP = glamorous(P)({
	fontSize: 36, 
	zIndex: 1,
	[mediaQueries.mobile]:{
		fontSize: 20,
		marginTop: 100
	}
})