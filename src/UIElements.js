import glamorous from 'glamorous';

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