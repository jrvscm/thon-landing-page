import React from 'react';
import glamorous from 'glamorous';

import RedSlashes from '../../assets/images/red-slashes.png';
import GetNewSkills from '../../assets/images/get-new-skills-arrows.png';
import WhiteSlashes from '../../assets/images/white-slashes.png';
import { white } from '../../colors.js';
import { 
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

const ThirdSection = () => (
	<Container>
		<Row>
			<LabelCol>
				<VerticalRow>
					<Slashes src={WhiteSlashes} />
					<P color={white}>GET NEW SKILLS</P>
				</VerticalRow>
			</LabelCol>
			<Col>
				<Row style={{paddingTop: 70, paddingBottom: 160}}>
					<Col style={{width: `20%`}}>
						<div style={{textAlign: `right`}}>
							<Text color={white} style={{paddingBottom: 15, fontWeight: 300}}>
								DON'T JUST LEARN – LEARN<br />  
								TO INNOVATE<br />
								LEARN SPECIFIC SKILLS:
							</Text>
							<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
 								Learn from 100+ companies -<br /> 
 								from Cryptocurrency and Blockchain to Artificial Intelligence, 
								Machine Learning, Data Science, Marketing and Photoshop.							
							</Text>
							<Text color={white} style={{paddingBottom: 15, fontWeight: 300}}>
								LEARN FROM EXPERTS:
							</Text>
							<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
								Be inspired by 1000+ mentors, expert instructors. Keep learning even when you're offline.
							</Text>
						</div>
					</Col>
					<Col style={{width: `20%`}}>
						<IphoneScreen src={GetNewSkills} />
					</Col>
					<Col style={{width: `20%`, alignItems: `flex-start`}}>
						<div style={{textAlign: `left`}}>
							<Text color={white} style={{paddingBottom: 15, fontWeight: 300}}>
								BE PART OF A COMMUNITY: 
							</Text>
							<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
								Connect with a mentor, interact with other learners, or post questions for your instructor.						
							</Text>
							<Text color={white} style={{paddingBottom: 15, fontWeight: 300}}>
								EARN SHAREABLE CERTIFICATES:
							</Text>
							<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
								Easily share your achievements with employers, colleagues and friends
								Thon offers free and paid courses including video lecture and reading materials. Paid courses unlock 
								quizzes and award you a Certificate
							</Text>
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

