import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CraigslistListItem = ({ item, toggleShowHide }) => {
  return (
    <Card.Group>
      <Card fluid={true}>
        <Card.Content>
          <h3>{item.title}</h3>
          <p>{item.neighborhood} ~ <span style={{ color: 'red' }}>{item.price}</span></p>
          {(item.images) ?
            <Image
              src={
                `https://images.craigslist.org/, 
                ${item.images.split(',')[0].substring(2)}, 
                _300x300.jpg`
              }
            />
            : <p>No image</p>}
          <a href={item.href}><p>link</p></a>
          <p>id: {item.id} </p>
          <p>showStatus: {item.show.toString()}</p>
          <button onClick={() => toggleShowHide(item.id, item.show)}>Hide Post</button>
          <br />
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default CraigslistListItem;
