import React from 'react';
import glamorous from 'glamorous';

import { white, textGrey } from '../../colors.js';
import { 
	mediaQueries, 
	Row, 
	Col, 
	VerticalRow, 
	LabelCol, 
	P,
	Li,
	Text,
	List,
	IphoneScreen
} from '../../UIElements.js';

const ThirdSection = () => (
	<Container>
		<Row>
			<LabelCol>
				<VerticalRow>
					<P color={white}>GET NEW SKILLS</P>
				</VerticalRow>
			</LabelCol>
			<Col>
				<Row>
					<Col style={{alignItems: `flex-end`, width: `40%`}}>
					</Col>
					<Col style={{alignItems: `flex-start`, width: `60%`}}>
						<div style={{maxWidth: 700}}>
							<P color={white} style={{marginBottom: 15}}>FUND YOUR FAVORITE INNOVATION</P>
							<Text color={textGrey} style={{marginBottom: 25}}>
								#Thon is a place where innovators and passionate backers come together to support ideas
								born at hackathons. Explore and Follow innovative apps, websites, products and more, and
								Upvote your favorite right from the app.
							</Text>
							<Text color={textGrey}>With the thon app, you can:</Text>
							<List>
								<Li><Text color={textGrey}>Fund innovative solutions to help make new ideas stay alive</Text></Li>
								<Li><Text color={textGrey}>Save your favorites and get reminders before projects end</Text></Li>
								<Li><Text color={textGrey}>Share innovative ideas with friends via email, messaging, social media and more</Text></Li>
							</List>
							<Text color={textGrey}>Innovators can stay up to date from anywhere:</Text>
							<List>
								<Li><Text color={textGrey}>Get notified each time you receive funding</Text></Li>
								<Li><Text color={textGrey}>Keep up with comments and upvotes</Text></Li>
								<Li><Text color={textGrey}>Post updates and respond to backer messages</Text></Li>
							</List>
						</div>
					</Col>		
				</Row>
			</Col>
		</Row>
	</Container>
)

export default ThirdSection;

const Container = glamorous.div({
	width: `100vw`,
	backgroundColor: `transparent`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
})

