import React from 'react';
import glamorous from 'glamorous';

import BrandsCurve from '../../assets/images/brands-curve.png';
import Logos from '../../assets/images/all-logos.png';
import { SectionBorder, Col, Row, P, mediaQueries } from '../../UIElements';
import { white, orange } from '../../colors';



const Brands = () => (	
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
	height: `auto`,
	width: `70%`,
	marginTop: `10vh`,
	marginBottom: `30vh`,
	[mediaQueries.med]:{
		width: `90%`,
		marginBottom: `25vh`
	}
})