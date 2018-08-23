import React from 'react';
import glamorous from 'glamorous';

import LargeWhiteSlash from '../../assets/images/large-white-slashes.svg';
import CurveImage from '../../assets/images/images_min/curve-top-border-two.png';
import RedSlashes from '../../assets/images/images_min/red-slashes.png';
import GetNewSkills from '../../assets/images/images_min/get-new-skills-arrows.png';
import WhiteSlashes from '../../assets/images/images_min/white-slashes.png';
import GetNewSkillsSingle from '../../assets/images/images_min/get-new-skills.png';
import { white } from '../../colors.js';
import {
	LargeSlash, 
	SectionBorder,
	mediaQueries, 
	Row, 
	Col, 
	VerticalRow, 
	Slashes,
	LabelCol, 
	P,
	Li,
	Text,
	List,
	IphoneScreen
} from '../../UIElements.js';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const ThirdSection = () => {
	if(!isMobile || isMobile === `iPad`) {
	return(
	<Container>
		<Row>
			<LabelCol>
				<VerticalRow>
					<Slashes src={WhiteSlashes} />
					<P color={white} style={{fontSize: 36}}>GET NEW SKILLS</P>
				</VerticalRow>
			</LabelCol>
			<Col>
				<Row style={{paddingTop: 70, paddingBottom: 160}}>
					<TextCol>
						<div style={{textAlign: `right`}}>
							<P color={white} style={{paddingBottom: 15, fontSize: 20}}>
								DON'T JUST LEARN – LEARN<br />  
								TO INNOVATE<br />
								LEARN SPECIFIC SKILLS:
							</P>
							<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
 								Learn from 100+ companies -<br /> 
 								from Cryptocurrency and Blockchain to Artificial Intelligence, 
								Machine Learning, Data Science, Marketing and Photoshop.							
							</Text>
							<P color={white} style={{paddingBottom: 15, fontSize: 20}}>
								LEARN FROM EXPERTS:
							</P>
							<Text color={white} style={{fontWeight: 300, marginBottom: 40}}>
								Be inspired by 1000+ mentors, expert instructors. Keep learning even when you're offline.
							</Text>
						</div>
					</TextCol>
					<ImageCol>
						<IphoneScreen src={GetNewSkills} />
					</ImageCol>
					<TextCol>
						<div style={{textAlign: `left`}}>
							<P color={white} style={{paddingBottom: 15, fontSize: 20}}>
								BE PART OF A COMMUNITY: 
							</P>
							<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
								Connect with a mentor, interact with other learners, or post questions for your instructor.						
							</Text>
							<P color={white} style={{paddingBottom: 15, fontSize: 20}}>
								EARN SHAREABLE CERTIFICATES:
							</P>
							<Text color={white} style={{fontWeight: 300, marginBottom: 40}}>
								Easily share your achievements with employers, colleagues and friends
								Thon offers free and paid courses including video lecture and reading materials. Paid courses unlock 
								quizzes and award you a Certificate
							</Text>
						</div>				
					</TextCol>		
				</Row>
			</Col>
		</Row>
		<SectionBorder src={CurveImage} />
	</Container>
)} else {
	return(
			<Container>
				<LargeSlash path={LargeWhiteSlash}>
					<P 
						style={{
							color: white, 
							marginTop: 25, 
							marginLeft: 40
						}}
					>GET NEW<br />SKILLS</P>
				</LargeSlash>	
				<Row style={{marginTop: -100}}>
					<TextCol>
						<div>
							<P color={white} style={{paddingBottom: 15, fontSize: 16}}>
								DON'T JUST LEARN – LEARN<br />  
								TO INNOVATE<br />
								LEARN SPECIFIC SKILLS:
							</P>
							<Text color={white} style={{paddingBottom: 25}}>
 								Learn from 100+ companies -<br /> 
 								from Cryptocurrency and Blockchain to Artificial Intelligence, 
								Machine Learning, Data Science, Marketing and Photoshop.							
							</Text>
							<P color={white} style={{paddingBottom: 15, fontSize: 16}}>
								LEARN FROM EXPERTS:
							</P>
							<Text color={white} style={{ marginBottom: 30}}>
								Be inspired by 1000+ mentors, expert instructors. Keep learning even when you're offline.
							</Text>
						</div>
					</TextCol>
				</Row>
				<Row>
					<ImageCol>
						<IphoneScreen src={GetNewSkillsSingle} />
					</ImageCol>
				</Row>
				<Row>	
					<TextCol>
						<div>
							<P color={white} style={{paddingBottom: 15, fontSize: 16}}>
								BE PART OF A COMMUNITY: 
							</P>
							<Text color={white} style={{paddingBottom: 25}}>
								Connect with a mentor, interact with other learners, or post questions for your instructor.						
							</Text>
							<P color={white} style={{paddingBottom: 15, fontSize: 16}}>
								EARN SHAREABLE CERTIFICATES:
							</P>
							<Text color={white}>
								Easily share your achievements with employers, colleagues and friends
								Thon offers free and paid courses including video lecture and reading materials. Paid courses unlock 
								quizzes and award you a Certificate
							</Text>
						</div>				
					</TextCol>		
				</Row>
				<SectionBorder src={CurveImage} />
			</Container>
		)
	}
}

export default ThirdSection;

const Container = glamorous.div({
	position: `relative`,
	width: `100vw`,
	backgroundColor: `transparent`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	marginTop: `15vh`,
	paddingBottom: `15vh`
})

const TextCol = glamorous(Col)({
	width: `20%`, 
	[mediaQueries.med]:{
		width: `29%`
	},
	[mediaQueries.mobile]:{
		width: `100%`,
		padding: 40
	}
})

const ImageCol = glamorous(Col)({
 	width: `30%`, 
 	marginRight: 25, 
 	marginLeft: 25,
 	[mediaQueries.regular]:{
 		marginLeft: 0,
 		marginRight: 0
 	},
 	[mediaQueries.mobile]:{
 		width: `100vw`
 	}
})