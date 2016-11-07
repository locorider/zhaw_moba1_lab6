import React, {Component, PropTypes} from 'react';

class NoteItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteNote(this.props.note.id);
  }

  render() {
    const {note} = this.props;

    return (
      <div className="note">
        <h4>{note.subject}</h4>
        <p className="note-message">{note.message}</p>
        <div className="metadata">
          <span className="creator">{note.creator}</span>
          <span className="date">{note.dateTime}</span>
        </div>
        <div className="buttons">
          <a href="#" onClick={this.handleDelete}>Delete Note</a>
        </div>
      </div>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default NoteItem;
