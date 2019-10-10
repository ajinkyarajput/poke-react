import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  render() {
    return (
      <div className="list-group" style={{ display: "table", width: "100%" }}>
        {this.props.items.map((item) =>
          <ListItem
            key={item.get('id')}
            name={item.get('name')}
            imageUrl={item.get('image_url')}
          />
        )}
      </div>
    );
  }
}

export default List