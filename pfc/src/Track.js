import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Track extends Component{
    render(){
return(
<Map google={this.props.google} zoom={14}>
    <Marker onClick={this.onMarkerClick}
    name={'current location'}/>
    <InfoWindow onClose={this.onInfoWindowClose}/>
       
    
</Map>
);
    }
}
export default GoogleApiWrapper({
    apikey: ("YOUR_GOOGLE_API_KEY_HERE")
})(Track)