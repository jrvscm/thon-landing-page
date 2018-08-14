import glamorous from 'glamorous';

export const mediaQueries = {
	large: '@media only screen and (max-width: 1600px)',
	med: '@media only screen and (max-width: 1200px)',
  small: '@media only screen and (max-width: 1000px)',
  phone: '@media only screen and (max-width: 600px)',
}

export const Row = glamorous.div({
	height: `100%`,
	width: `100%`,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`
})

export const Col = glamorous.div({
	height: `100%`,
	width: `100%`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
})
