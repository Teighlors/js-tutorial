fetch('nyc-subway.json') 
.then(response => response.json()) 
.then(data => {     
    for(line in data.lines) {         
        let subwayLine = data.lines[line];         
        console.log("Line : " + subwayLine.name);         
        console.log("Color : " + subwayLine.color);         
        console.log("Stations : " + subwayLine.stations);     
    } 
}) 
.catch(err => {     
    console.log(err); 
});