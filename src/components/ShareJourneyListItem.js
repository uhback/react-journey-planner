import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react';

const ShareJourneyListItem = ({ JourId, Title, StartDate, EndDate, Note, NickName }) => (
    <Card color='red'>
        <Card.Content as={Link} to={`/edit/${JourId}`}>
            <Image floated='right' size='mini' src='../../images/nzflag.png' />            
            <Card.Header className="card-header">
                {Title}
            </Card.Header>
            <Card.Meta className="card-meta">
                {NickName}
            </Card.Meta>
            <Card.Description className="card-description">
                {Note}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button color='red'>
                <Icon name='heart' />
                Like
            </Button>
            <Label as='a' basic color='red' pointing='left'>2,048</Label>
        </Card.Content>
    </Card>
)

export default ShareJourneyListItem;