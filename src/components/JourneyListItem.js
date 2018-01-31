import React from 'react';
import moment from 'moment';
import { Card, Icon, Image } from 'semantic-ui-react';

const JourneyListItem = ({ title, startDate, endDate, note }) => (
    <Card.Group>
        <Card>
            <Card.Content>
                <Image src='../../images/nzflag.png' />
                <Card.Header>
                    {title}
                </Card.Header>
                <Card.Meta>
                    {moment(startDate).format('DD. MMM. YYYY')} to {moment(endDate).format('DD. MMM. YYYY')}
                </Card.Meta>
                <Card.Description>
                    {note}
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