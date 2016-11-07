import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MainSection from '../components/MainSection';
import * as NoteActions from '../actions/index';

class App extends Component {

  componentWillMount() {
    fetch('http://srv-lab-t-968.zhaw.ch:8080/api/notes')
      .then(response => response.json())
      .then(json => this.props.actions.notesLoaded(json.notes));
  }

  render() {
    const {notes, actions} = this.props;
    return (
      <MainSection
        notes={notes}
        actions={actions}
        />
    );
  }
}

App.propTypes = {
  notes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NoteActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
