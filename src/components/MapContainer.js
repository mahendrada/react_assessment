import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  height: '90%',
  width: '90%'
};

export class MapContainer extends Component {
  render() {
    const { currentLatLong } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles}
        initialCenter={
          currentLatLong
        }
      >
      <Marker
        title={'Current drone location'}
        position={currentLatLong} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCR7g-oKGuWmOF6_MJxODZYAldlvvAFY0Y'
})(MapContainer);