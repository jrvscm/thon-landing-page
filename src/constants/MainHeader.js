import React from 'react';
import glamorous from 'glamorous';

import { mediaQueries } from '../UIElements';
import { white } from '../colors'

const MainHeader = () => (
	<P>
		<HeadingSpan>GET FUNDED, LEARN, NETWORK</HeadingSpan><br/> 
		THE MARKETPLACE OF INNOVATION<br/>
		AND OPPORTUNITIES FOR HACKATHON
	</P>	
)

export default MainHeader;

const P = glamorous.p({
	margin: 0,
	padding: 0,
	fontSize: 36,
	fontFamily: 'SF-Pro-Display-Regular',
	fontWeight: `normal`,
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

const HeadingSpan = glamorous.span({
	fontSize: 40,
	fontFamily: 'SF-Pro-Display-Heavy',
	[mediaQueries.regular]: {
  	fontSize: 30
  },
  [mediaQueries.med]: {
  	fontSize: 25
  },
  [mediaQueries.small]:{
  	fontSize: 22
  },
	[mediaQueries.mobile]:{
		fontSize: 22,
		fontWeight: 900 
	}
})
