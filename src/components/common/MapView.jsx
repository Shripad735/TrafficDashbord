import {Map, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';

class MapContainer extends Component{
    render(){
        const containerStyle = {
            position: 'relative',
            width: '100%',
            height: '407px', // You can adjust this height as needed
            borderRadius: '10px',
            overflow: 'hidden' // This ensures the map content also follows the rounded corners
        };
        
        return(
            <div style={containerStyle}>
            <Map
            google = {this.props.google}
            style={{
                width: "100%",
                height: "100%"
            }}
            zoom={10}
            initialCenter={{
                lat: 28.704060,
                lng: 77.102493
            }}
            />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyCrSWFU35ffzHNtiByNDE4wXqCpXfHPlmU"
})(MapContainer);