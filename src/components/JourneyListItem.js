import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Card, Icon, Image } from 'semantic-ui-react';

const JourneyListItem = ({ JourId, Title, StartDate, EndDate, Note }) => (
        <Card color='blue'>
            <Card.Content as={Link} to={`/edit/${JourId}`}>
                <Image src='../../images/nzflag.png' />
                <Card.Header className="card-header">
                    {Title}
                </Card.Header>
                <Card.Meta className="card-meta">
                    {moment(StartDate).format('DD. MMM. YYYY')} to {moment(EndDate).format('DD. MMM. YYYY')}
                </Card.Meta>
                <Card.Description className="card-description">
                    {Note}
                </Card.Description>
            </Card.Content>
        </Card>
)

// const JourneyListItem = ({ title, startDate, endDate, note }) => (
//     <div>
//         <h2>{title}</h2>
//         <p>Period: {moment(startDate).format('MMMM Do, YYYY')} - {moment(endDate).format('MMMM Do, YYYY')}</p>
//         <p>{note}</p>
//     </div>
// )


export default JourneyListItem;