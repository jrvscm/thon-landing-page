import glamorous from 'glamorous';
import Bullet from './assets/images/arrow-bullet.png';
import { white, lightRed } from './colors';

export const mediaQueries = {
	large: '@media only screen and (max-width: 1600px)',
	regular: '@media only screen and (max-width: 1400px)',
	med: '@media only screen and (max-width: 1200px)',
  small: '@media only screen and (max-width: 1000px)',
  mobile: '@media only screen and (max-width: 823px)',
  iphoneX: '@media only screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3)',
  landscape: '@media only screen and (max-width: 850px) and (orientation: landscape)'
}

export const Row = glamorous.div({
	width: `100%`,
	maxWidth: 1500,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`
})

export const Col = glamorous.div({
	width: `100%`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
})

export const VerticalRow = glamorous(Row)({ 
	WebkitTransform: `rotate(270deg)`,
  MozTransform: `rotate(270deg)`,
  OTransform: `rotate(270deg)`,
  MsTransform: `rotate(270deg)`,
  transform: `rotate(270deg)`,
  width: `auto`
})

export const IphoneScreen = glamorous.img({
	height: 550,
	width: `80%`,
	objectFit: 'contain',
	objectPosition: `right`,
	zIndex: 50,
	[mediaQueries.mobile]:{
		width: `auto`,
		objectPosition: `center`,
		boxSizing: `content-box`,
		boxShadow: `0 0 10px 0 rgba(0, 0, 0, 0.5)`
	}
})

export const LabelCol = glamorous.div({
	position: `absolute`, 
	left: 0,
	width: 1000,
	marginLeft: -400,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	[mediaQueries.regular]:{
		marginLeft: -450
	},
	[mediaQueries.med]:{
		marginLeft: -450
	},
	[mediaQueries.small]:{
		marginLeft: -470
	}
})

export const P = glamorous.p({
	fontFamily: 'SF-Pro-Text-Bold',
  fontSize: 30,
  fontWeight: `bold`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  LineHeight: `normal`,
  letterSpacing: 0.4,
  margin: 0,
  [mediaQueries.med]:{
  	fontSize: 30
  },
  [mediaQueries.small]:{
  	fontSize: 25
  },
  [mediaQueries.mobile]:{
  	fontSize: 20
  },
}, ({color}) => ({
  color: color,
}))

export const HR = glamorous.hr({
	marginTop: 100,
	marginBottom: 100,
  width: `70%`,
  height: 0,
  maxWidth: 1400,
}, ({color}) => ({
  border: `solid .5px ${color}`
}))

export const Slashes = glamorous.img({
	height: 75,
	width: 75,
	WebkitTransform: `rotate(270deg)`,
  MozTransform: `rotate(270deg)`,
  OTransform: `rotate(270deg)`,
  MsTransform: `rotate(270deg)`,
  transform: `rotate(270deg)`,
  marginRight: 25,
  [mediaQueries.med]:{
  	height: 50,
  	width: 50
  },
  [mediaQueries.small]:{
  	height: 32.5,
  	width: 32.5
  }
})

export const Text = glamorous.p({
	fontFamily: `SF-Pro-Text-Light`,
  fontSize: 20,
  fontWeight: 300,
  fontStyle: `normal`,
  fontStretch: `normal`,
  LineHeight: 1.2,
  letterSpacing: 0.2,
  margin: 2,
  [mediaQueries.med]:{
  	fontSize: 18
  },
  [mediaQueries.small]:{
  	fontSize: 16
  },
 }, ({color}) => ({
 	color: color
}))

export const Li = glamorous.li({
	margin: 0,
	padding: 0,
})

export const List = glamorous.ul({
	marginTop: 0,
	listStyle: `square outside url(${Bullet})`
})

export const SubscribeButton = glamorous.button({
	height: 70,
	width: 300,
	borderRadius: 39,
	backgroundColor: lightRed,
	color: white,
	border: `none`,
	fontFamily: 'SF-Pro-Display-Regular',
	fontSize: 30,
	fontWeight: 500,
	fontStyle: `normal`,
	fontStretch: `normal`,
	fontHeight: `normal`,
	letterSpacing: 0.5,
	cursor: `pointer`,
	outline: `none`,
	[mediaQueries.med]:{
		height: 65,
		width: 268,
		fontSize: 25
	},
	[mediaQueries.small]:{
		height: 60,
		width: 200,
		fontSize: 20
	},
	[mediaQueries.mobile]:{
		width: `75vw`,
		marginTop: 25
	}
})

export const SectionBorder = glamorous.img({
	height: `40vh`,
	width: `100vw`,
	position: `absolute`,
	bottom: -1,
	left: 0,
	right: 0,
	[mediaQueries.med]:{
		height: `20vh`
	},
	[mediaQueries.mobile]:{
		width: `100%`,
		objectFit: 'contain',
		objectPosition: `bottom`		
	},
	[mediaQueries.landscape]:{
		width: `100%`,
		objectFit: 'fill',
	}
})

export const LargeSlash = glamorous(Row)({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `flex-start`,
	justifyContent: `flex-start`,
	backgroundSize: `contain`,
	backgroundPosition: `-1vw 0`,
	backgroundRepeat: `no-repeat`,
	height: `200`,
	width: `100%`,
	paddingRight: 40,
	paddingLeft: 40,
}, ({path}) => ({
	backgroundImage: `url(${path})`,
}))