import React from 'react';
import ShareJourneyList from './ShareJourneyList';

class ShareJourneyBoard extends React.Component {
    render() {        
        return (
            <div className="container">
                <div className="container-list">
                    <ShareJourneyList />
                </div>
            </div>
        )
    }
}
export default ShareJourneyBoard