import React, { Compoent } from 'react';
import { connect } from 'react-redux';

import { Form, Button, Grid } from 'semantic-ui-react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class JourneyLocationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            JourId: props.journey ? props.journey.JourId : undefined,
            CtryName: '',
            CityName: [],
            CityInput: ''
        }
    }

    selectCountry (val) {
        this.setState({ 
            CtryName: val
        });
    }

    selectRegion (city) {
        //const addRegion = this.state.Regioins.concat(region);
        this.setState({ CityInput: city });
    }

    onClickAddRegion = () => {
        const newCityName = [...this.state.CityName, this.state.CityInput];
        this.setState({ CityName: newCityName })
    }

    onClickResetRegion = () => {
        this.setState({ CityName: [] })
    }

    render() {
        return (
            <Grid columns={2}>
                <Grid.Column>
                    <Form>
                        <Form.Field>
                            <label>Country</label>
                            <CountryDropdown
                                value={this.state.CtryName}
                                onChange={(val) => this.selectCountry(val)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Region</label>
                            <RegionDropdown
                                country={this.state.CtryName}
                                value={this.state.CityInput}
                                onChange={(val) => this.selectRegion(val)} />
                        </Form.Field>
                        <Button color='teal' onClick={this.onClickAddRegion}>Add</Button>
                        <Button color='grey' onClick={this.onClickResetRegion}>Reset</Button>
                        <div className="container-header">
                            {this.state.CityName && <p>{this.state.CityName}</p>}
                        </div>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        journey: state.journey,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(JourneyLocationForm)