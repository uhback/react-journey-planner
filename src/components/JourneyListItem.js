import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Card, Icon, Image } from 'semantic-ui-react';

const JourneyListItem = ({ JourId, Title, StartDate, EndDate, Note }) => (
    <Card.Group>
        <Card>
            <Card.Content as={Link} to={`/edit/${JourId}`}>
                <Image src='../../images/nzflag.png' />
                <Card.Header>
                    {Title}
                </Card.Header>
                <Card.Meta>
                    {moment(StartDate).format('DD. MMM. YYYY')} to {moment(EndDate).format('DD. MMM. YYYY')}
                </Card.Meta>
                <Card.Description>
                    {Note}
                </Card.Description>
            </Card.Content>
        </Card>
    </Card.Group>
)

// const JourneyListItem = ({ title, startDate, endDate, note }) => (
//     <div>
//         <h2>{title}</h2>
//         <p>Period: {moment(startDate).format('MMMM Do, YYYY')} - {moment(endDate).format('MMMM Do, YYYY')}</p>
//         <p>{note}</p>
//     </div>
// )


export default JourneyListItem;