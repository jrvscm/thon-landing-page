import glamorous from 'glamorous';
import Bullet from './assets/images/arrow-bullet.png';
import { white, lightRed } from './colors';

export const mediaQueries = {
	large: '@media only screen and (max-width: 1600px)',
	regular: '@media only screen and (max-width: 1400px)',
	med: '@media only screen and (max-width: 1200px)',
  small: '@media only screen and (max-width: 1000px)',
  mobile: '@media only screen and (max-width: 600px)',
}

export const Row = glamorous.div({
	width: `100%`,
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
	height: 600,
	width: 380,
	zIndex: 50
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
	fontFamily: 'SF-Pro-Text-Light',
  fontSize: 36,
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
  }
}, ({color}) => ({
  color: color,
}))

export const HR = glamorous.hr({
	marginTop: 100,
	marginBottom: 100,
  width: `80%`,
  height: 0,
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
  fontWeight: 900,
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
  }
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
	fontFamily: 'SF-Pro-Text-Light',
	fontSize: 30,
	fontWeight: 500,
	fontStyle: `normal`,
	fontStretch: `normal`,
	fontHeight: `normal`,
	letterSpacing: 0.5,
	[mediaQueries.med]:{
		height: 65,
		width: 268,
		fontSize: 25
	},
	[mediaQueries.small]:{
		height: 60,
		width: 200,
		fontSize: 20
	}
})

export const SectionBorder = glamorous.img({
	height: `20vh`,
	width: `100vw`,
	position: `absolute`,
	bottom: 0,
	left: 0,
	right: 0,
})