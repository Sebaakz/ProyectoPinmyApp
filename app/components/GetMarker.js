GetMarkers = () => {
    let markers = this.state.data.map((marker, index) => {
        let magnitude = marker.magnitude;
  let icon = undefined;
  if(magnitude < 4.0)
  {
    icon = require('./assets/image_earthquakes_one.png')
  }
        else if(magnitude >= 4.0 & magnitude <= 5.0)
        {
            icon = require('./assets/image_earthquakes_two.png')
        }
        else if(magnitude > 5.0)
        {
            icon = require('./assets/image_earthquakes_three.png')
        }

        return ( <MapView.Marker coordinate = {
                {
                    latitude: Number(marker.latitude),
                    longitude: Number(marker.longitude)
                }
            }
            image = {
                icon
            }
            key = {
                index
            }
            >
            <MapView.Callout>
                <View>
                    <Text>Lat:{marker.latitude}, Lon:{marker.longitude}</Text>
                    <Text>Magnitude:{marker.magnitude}, Depth:{marker.depthkm}</Text>
                </View>
            </MapView.Callout>
            </MapView.Marker>
        );
    });
    return markers;
}