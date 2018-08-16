import React from 'react';
import glamorous from 'glamorous';

import CurveBackgroundOne from '../../assets/images/curve-background-one.png';
import GetFunded from '../../assets/images/get-funded-arrows.png';
import DiscoverInnovation from '../../assets/images/discover-innovation-arrows.png';
import OrangeSlashes from '../../assets/images/orange-slashes.png';
import RedSlashes from '../../assets/images/red-slashes.png';
import { orange, darkRed, lightRed, white, textGrey } from '../../colors.js';
import { 
	Background,
	mediaQueries, 
	Row, 
	Col, 
	VerticalRow, 
	IphoneScreen, 
	LabelCol, 
	P, 
	HR, 
	Slashes, 
	Text,
	Li,
	List 
} from '../../UIElements.js';

const SecondSection = () => (
	<Container>
		<Background src={CurveBackgroundOne} />
		<ContentContainer>
			<Row>
				<LabelCol>
					<VerticalRow>
						<Slashes src={OrangeSlashes} />
						<P color={orange}>GET FUNDED</P>
					</VerticalRow>
				</LabelCol>
				<Col>
					<Row>
						<Col style={{alignItems: `flex-end`, width: `40%`}}>
							<IphoneScreen src={GetFunded} />
						</Col>
						<Col style={{alignItems: `flex-start`, width: `60%`}}>
							<div style={{maxWidth: 700}}>
								<P color={orange} style={{marginBottom: 15}}>FUND YOUR FAVORITE INNOVATION</P>
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
			<HR color={textGrey} />
			<Row>
				<LabelCol>
					<VerticalRow>
						<Slashes src={RedSlashes} />
						<P color={lightRed}>DISCOVER INNOVATION</P>
					</VerticalRow>
				</LabelCol>
				<Col style={{width: `60%`, alignItems: `flex-end`}}>
					<div style={{maxWidth: 700, textAlign: `right`}}>
						<P color={lightRed} style={{marginBottom: 15}}>UPVOTE</P>
						<Text color={textGrey} style={{marginBottom: 25}}>
							When you're logged in to #Thon, you'll be able to upvote items to help determine their rank.
							You get one vote per item, but you can change it after it's logged. The number appearing at
							the up arrows is the submission's score: the number of funds raised. Upvotes allow you to get
							exposure for your message, brand, or product and have a snowball effect on the traffic a post
							receives.
						</Text>
						<Text color={textGrey} style={{marginBottom: 25}}>
							An upvote on thon is very different than a vote on any other social-media website. Clicking
							that little arrow is much more than a "Like" on Facebook or a "Heart" on Instagram. On #Thon,
							votes are rewarded with US dollars or cryptocurrencies!
						</Text>
						<Text color={textGrey} style={{marginBottom: 25}}>
							When you click the upvote button you are telling the Blockchain, "this is where I want X amount
							of the daily rewards pool to go." The amount that you're able to direct is dependent on the amount
							of Privilege you have. So the more Privilege you have, the more of the daily rewards pool you can
							direct to ideas you like!
						</Text>
						<P color={lightRed} style={{marginBottom: 15}}>DISCOVER</P>
						<Text color={textGrey} style={{marginBottom: 25}}>
							Discover your next favorite innovation app, website, product. We showcase the best new products
							and apps every day.
						</Text>
						<Text color={textGrey} style={{marginBottom: 25}}>
							This is the place to find innovation you love and share them with friends. A global community of
							innovators founders, mentors, investors, journalists, creators, entrepreneurs and makers.
						</Text>
					</div>
				</Col>
				<Col style={{width: `40%`, alignItems: `flex-start`}}>
					<IphoneScreen src={DiscoverInnovation} />
				</Col>					
			</Row>
		</ContentContainer>
	</Container>
)

export default SecondSection;

const Container = glamorous.div({
	position: 'relative',
	width: `100vw`,
	marginTop: `-28vh`,
	backgroundColor: `transparent`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
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
