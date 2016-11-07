import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as NoteActions from '../actions/index';

class NoteForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    fetch('http://srv-lab-t-968.zhaw.ch:8080/api/addNote', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: this.state.subject,
        message: this.state.message,
        creator: this.state.creator
      })
    }).then(response => response.json())
      .then(json => this.props.actions.addNote(json))
      .then(() => this.state = {});
  }

  render() {
    const {note} = this.props;

    return (
      <div className="note-form">
        <div className="form-row">
          <input
            className="input"
            type="text"
            autoFocus="true"
            value={this.state.subject}
          />
        </div>
        <div className="form-row">
          <input
            className="input"
            type="text"
            autoFocus="true"
            value={this.state.message}
          />
        </div>
        <div className="form-row">
          <input
            className="input"
            type="text"
            autoFocus="true"
            value={this.state.creator}
          />
        </div>
        <button type="button" onClick={this.handleSave}>Add Note</button>
      </div>
    );
  }
}

NoteForm.propTypees = {
  actions: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NoteActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);
