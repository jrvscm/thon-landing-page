import React from 'react';
import glamorous from 'glamorous';

import { mediaQueries } from '../UIElements';
import { white } from '../colors'

const MainHeader = () => (
	<P>
		<HeadingSpan>BE THE NEWS, LEARN, EARN</HeadingSpan><br/> 
		A MARKETPLACE TELLING THE STORIES<br/>
		OF STUDENT/ALUMNI ENTREPRENEURS
	</P>	
)

export default MainHeader;

const P = glamorous.p({
	margin: 0,
	padding: 0,
	fontSize: 30,
	fontFamily: 'SF-Pro-Display-Regular',
	fontWeight: `normal`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: `normal`,
  letterSpacing: 0.4,
  color: white,
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
  letterSpacing: 0.5,
  fontWeight: 900,
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
		fontSize: 22
	}
})
