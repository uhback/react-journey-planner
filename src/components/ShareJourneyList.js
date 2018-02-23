import React from 'react';
import { connect } from 'react-redux';
import ShareJourneyListItem from './ShareJourneyListItem';
import { Grid, Image, Card } from 'semantic-ui-react'

const ShareJourneyList = (props) => (
    <div className="container">
        <Card.Group itemsPerRow={4} doubling stackable>
            {props.sharedJournies.map((journey) => (
                  <ShareJourneyListItem {...journey} key={journey.JourId} />
            ))}
        </Card.Group>
    </div>
)

const mapStateToProps = (state) => {
    return {
        sharedJournies: state.sharedJournies,
        auth: state.auth
    }
}
export default connect(mapStateToProps)(ShareJourneyList);