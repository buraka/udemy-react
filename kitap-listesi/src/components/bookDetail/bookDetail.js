import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deselectBook } from '../../actions';

class BookDetail extends Component {

  renderContent() {
    const { selectedBook } = this.props;
    if (selectedBook.isbn) {
      return (
          <div className='ui cards'>
            <div className='card'>
              <div className="content">
                  <div className="header">{selectedBook.title}</div>
                  <div className="description">
                    {selectedBook.description}
                  </div>
                </div>
                <div className="ui bottom attached button"
                     onClick={() => {
                       this.props.deselectBook();
                     }}>
                  Kitap seçiminden vazgeç
                </div>
            </div>

          </div>
      )
    }
    return (
      <div>
        Seçili kitap yok.
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedBook: state.selectedBook
  }
}

export default connect(mapStateToProps, { deselectBook })(BookDetail);
