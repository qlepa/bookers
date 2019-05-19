import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions';

class EventsList extends React.Component {
    componentDidMount(){
        this.props.fetchEvents();
    }
    render() {
        console.log(this.props.events);
        return <div>Events List</div>;
    }
};

const mapStateToProps = (state) => {
    return { events: state.events }
}

export default connect(
    mapStateToProps, 
    { fetchEvents }
    )(EventsList);