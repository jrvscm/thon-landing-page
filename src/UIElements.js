import glamorous from 'glamorous';
import Bullet from './assets/images/arrow-bullet.png';
import { white, lightRed } from './colors';

export const mediaQueries = {
	large: '@media only screen and (max-width: 1600px)',
	med: '@media only screen and (max-width: 1200px)',
  small: '@media only screen and (max-width: 1000px)',
  phone: '@media only screen and (max-width: 600px)',
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
	height: `100%`,
	width: `100%`,
	maxHeight: 550,
	maxWidth: 330
})

export const LabelCol = glamorous.div({
	position: `absolute`, 
	left: 0,
	width: 1000,
	marginLeft: -350,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
})

export const P = glamorous.p({
	fontFamily: 'SF-Pro-Text-Light',
  fontSize: 36,
  fontWeight: `bold`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  LineHeight: `normal`,
  letterSpacing: 0.4,
  margin: 0
}, ({color}) => ({
  color: color,
}))

export const HR = glamorous.hr({
	marginTop: 100,
	marginBottom: 100,
  width: 1000,
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
  marginRight: 25
})

export const Text = glamorous.p({
	fontFamily: `SF-Pro-Text-Light`,
  fontSize: 20,
  fontWeight: 900,
  fontStyle: `normal`,
  fontStretch: `normal`,
  LineHeight: 1.2,
  letterSpacing: 0.2,
  margin: 2
 }, ({color}) => ({
 	color: color
}))

export const Li = glamorous.li({
	margin: 0,
	padding: 0,
})

export const List = glamorous.ul({
	listStyle: `square outside url(${Bullet})`
})

export const Background = glamorous.img({
	height: `100%`,
	width: `100%`
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
	letterSpacing: 0.5
})