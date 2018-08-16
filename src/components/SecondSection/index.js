import React from 'react';
import glamorous from 'glamorous';

import CurveBackgroundOne from '../../assets/images/curve-background-one.png';
import GetFunded from '../../assets/images/get-funded-arrows.png';
import DiscoverInnovation from '../../assets/images/discover-innovation-arrows.png';
import OrangeSlashes from '../../assets/images/orange-slashes.png';
import RedSlashes from '../../assets/images/red-slashes.png';
import Bullet from '../../assets/images/arrow-bullet.png';
import { orange, darkRed, lightRed, white, textGrey } from '../../colors.js';
import { mediaQueries, Row, Col, VerticalRow } from '../../UIElements.js';

const SecondSection = () => (
	<Container>
		<Background src={CurveBackgroundOne} />
		<ContentContainer>
			<Row>
				<LabelCol>
					<VerticalRow>
						<Slashes src={OrangeSlashes} />
						<P>GET FUNDED</P>
					</VerticalRow>
				</LabelCol>
				<Col>
					<Row>
						<Col style={{alignItems: `flex-end`, width: `40%`}}>
							<IphoneScreen src={GetFunded} />
						</Col>
						<Col style={{alignItems: `flex-start`, width: `60%`}}>
							<div style={{maxWidth: 700}}>
								<P style={{marginBottom: 15}}>FUND YOUR FAVORITE INNOVATION</P>
								<Text style={{marginBottom: 25}}>
									#Thon is a place where innovators and passionate backers come together to support ideas
									born at hackathons. Explore and Follow innovative apps, websites, products and more, and
									Upvote your favorite right from the app.
								</Text>
								<Text>With the thon app, you can:</Text>
								<List>
									<Li><Text>Fund innovative solutions to help make new ideas stay alive</Text></Li>
									<Li><Text>Save your favorites and get reminders before projects end</Text></Li>
									<Li><Text>Share innovative ideas with friends via email, messaging, social media and more</Text></Li>
								</List>
								<Text>Innovators can stay up to date from anywhere:</Text>
								<List>
									<Li><Text>Get notified each time you receive funding</Text></Li>
									<Li><Text>Keep up with comments and upvotes</Text></Li>
									<Li><Text>Post updates and respond to backer messages</Text></Li>
								</List>
							</div>
						</Col>		
					</Row>
				</Col>
			</Row>
			<HR />
			<Row>
				<LabelCol>
					<VerticalRow>
						<Slashes src={RedSlashes} />
						<P style={{color: lightRed}}>DISCOVER INNOVATION</P>
					</VerticalRow>
				</LabelCol>
				<Col style={{width: `60%`, alignItems: `flex-end`}}>
					<div style={{maxWidth: 700, textAlign: `right`}}>
						<P style={{color: lightRed, marginBottom: 15}}>UPVOTE</P>
						<Text style={{marginBottom: 25}}>
							When you're logged in to #Thon, you'll be able to upvote items to help determine their rank.
							You get one vote per item, but you can change it after it's logged. The number appearing at
							the up arrows is the submission's score: the number of funds raised. Upvotes allow you to get
							exposure for your message, brand, or product and have a snowball effect on the traffic a post
							receives.
						</Text>
						<Text style={{marginBottom: 25}}>
							An upvote on thon is very different than a vote on any other social-media website. Clicking
							that little arrow is much more than a "Like" on Facebook or a "Heart" on Instagram. On #Thon,
							votes are rewarded with US dollars or cryptocurrencies!
						</Text>
						<Text style={{marginBottom: 25}}>
							When you click the upvote button you are telling the Blockchain, "this is where I want X amount
							of the daily rewards pool to go." The amount that you're able to direct is dependent on the amount
							of Privilege you have. So the more Privilege you have, the more of the daily rewards pool you can
							direct to ideas you like!
						</Text>
						<P style={{color: lightRed, marginBottom: 15}}>DISCOVER</P>
						<Text style={{marginBottom: 25}}>
							Discover your next favorite innovation app, website, product. We showcase the best new products
							and apps every day.
						</Text>
						<Text style={{marginBottom: 25}}>
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
  LineHeight: `normal`,
  letterSpacing: 0.4,
  color: orange,
  margin: 0
})

const Slashes = glamorous.img({
	height: 75,
	width: 75,
	WebkitTransform: `rotate(270deg)`,
  MozTransform: `rotate(270deg)`,
  OTransform: `rotate(270deg)`,
  MsTransform: `rotate(270deg)`,
  transform: `rotate(270deg)`,
  marginRight: 25
})

const IphoneScreen = glamorous.img({
	height: `100%`,
	width: `100%`,
	maxHeight: 550,
	maxWidth: 330
})

const HR = glamorous.hr({
	marginTop: 100,
	marginBottom: 100,
  width: 1000,
  height: 0,
  border: `solid .5px ${textGrey}`
})

const Text = glamorous.p({
	fontFamily: `SF-Pro-Text-Light`,
  fontSize: 20,
  fontWeight: 900,
  fontStyle: `normal`,
  fontStretch: `normal`,
  LineHeight: 1.2,
  letterSpacing: 0.2,
  color: textGrey,
  margin: 2
})

const Li = glamorous.li({
	margin: 0,
	padding: 0,
})

const List = glamorous.ul({
	listStyle: `square outside url(${Bullet})`
})

const LabelCol = glamorous.div({
	position: `absolute`, 
	left: 0,
	width: 600,
	marginLeft: -150,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
})