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

function displayLineData(lineName) {
    fetch('nyc-subway.json')
        .then(response => response.json())
        .then(data => {
            for (let line in data.lines) {
                let subwayLine = data.lines[line];
                if (subwayLine.name === lineName) {
                    let lineDataDiv = document.getElementById('line-data');
                    lineDataDiv.innerHTML = `
                        <h2>Line: ${subwayLine.name}</h2>
                        <p>Color: ${subwayLine.color}</p>
                        <p>Stations: ${subwayLine.stations.join(', ')}</p>
                    `;
                    return;
                }
            }
        })
        .catch(err => {
            console.log(err);
        });
}