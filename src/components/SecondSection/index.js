import React from 'react';
import glamorous from 'glamorous';

import CurveBackgroundOne from '../../assets/images/curve-background-one.png';
import GetFundedScreen from '../../assets/images/get-funded.png';
import OrangeSlashes from '../../assets/images/orange-slashes.png';
import { orange, darkRed, lightRed, white } from '../../colors.js';
import { mediaQueries, Row, Col } from '../../UIElements.js';

const SecondSection = () => (
	<Container>
		<Background src={CurveBackgroundOne}>
		</Background>
		<ContentContainer>
			<Row>
				<Col style={{width: `25%`}}>
					<VerticalRow>
						<Slashes src={OrangeSlashes} />
						<P>GET FUNDED</P>
					</VerticalRow>
				</Col>
				<Col style={{width: `25%`}}>
					<GetFunded src={GetFundedScreen} />
				</Col>
				<Col style={{width: `50%`}}>
				</Col>
			</Row>
		</ContentContainer>
	</Container>
)

export default SecondSection;

const Container = glamorous.div({
	position: 'relative',
	minHeight: `100vh`,
	width: `100vw`,
	marginTop: `-28vh`,
	backgroundColor: `transparent`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
})

const Background = glamorous.img({
	height: `100%`,
	width: `100%`
})

const ContentContainer = glamorous.div({
	position: `absolute`,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
})

const P = glamorous.p({
	fontFamily: 'SF-Pro-Text-Light',
  fontSize: 36,
  fontWeight: `bold`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: `normal`,
  letterSpacing: 0.4,
  color: `#ff9c00`,
  marginLeft: 25
})

const Slashes = glamorous.img({
	height: 75,
	width: 75,
	WebkitTransform: `rotate(270deg)`,
  MozTransform: `rotate(270deg)`,
  OTransform: `rotate(270deg)`,
  MsTransform: `rotate(270deg)`,
  transform: `rotate(270deg)`,
})

const GetFunded = glamorous.img({
	height: `100%`,
	width: `100%`,
	boxShadow: `0 0 10px 0 rgba(0, 0, 0, 0.5)`,
	maxHeight: 500,
	maxWidth: 280
})

const VerticalRow = glamorous(Row)({ 
	WebkitTransform: `rotate(270deg)`,
  MozTransform: `rotate(270deg)`,
  OTransform: `rotate(270deg)`,
  MsTransform: `rotate(270deg)`,
  transform: `rotate(270deg)`
})