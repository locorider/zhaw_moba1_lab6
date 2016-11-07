import React, {Component, PropTypes} from 'react';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';

class MainSection extends Component {

  render() {
    const {notes, actions} = this.props;

    return (
      <div className="notes">
        <NoteForm />
        {notes.map(note =>
          <NoteItem
            key={note.id}
            note={note}
            {...actions}
            />
        )}
      </div>
    );
  }
}

MainSection.propTypes = {
  notes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
