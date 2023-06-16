
function GetMap() {
    const map = new Microsoft.Maps.Map('#map', {
        center: new Microsoft.Maps.Location(47.6149, -122.1941), //Location center position
        mapTypeId: Microsoft.Maps.MapTypeId.load, //Type: [load, aerial,canvasDark,canvasLight,birdseye,grayscale,streetside]
        zoom: 8  //Zoom:1=zoomOut, 20=zoomUp[ 1~20 ]
    });
}