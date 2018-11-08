import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default props => (
    <Card className={props.className}>
      <a target='_blank' href={props.link}><CardImg top width='100%' height='300px' src={props.src} alt={props.alt}/></a>
      <CardBody>
        <CardTitle className='title'>{props.title}</CardTitle>
        <CardSubtitle className='subTitle'>{props.subTitle}</CardSubtitle>
        <CardText className='text'>{props.text}</CardText>
      </CardBody>
    </Card>
);