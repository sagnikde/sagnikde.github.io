google.charts.load('current', {'packages':['corechart']});

      


function drawChart(launches){
    rocketdata = []
    for (key in launches) {
        rocketdata.push([key, launchnumbers[key]]);
    }
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Agency');
    data.addColumn('number', 'Launches');
    data.addRows(rocketdata);
    // Set chart options
    var options = {
        'title': 'Rocket Launches',
        'width': 400,
        'height': 300
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chartholder'));
    chart.draw(data, options);
  
}


function getlaunches(){
    var date1 = document.getElementById('mindate').value;
    var date2 = document.getElementById('maxdate').value;

    while(true){
        fetch()
    }
}

function populatedata(rawlaunches){
    let launches = rawlaunches.launches;
    launchnumbers = {};
    
    while(true){
        fetch('GET',"https://launchlibrary.net/1.4/launch/" + date1 + "/" + date2)
        .then(function(response){
            response.json()
        })
    }
}


function convertISOStartToDate(p_dateString)
{
    
    var yyyy=p_dateString.split("T")[0].substring(1,4);
    var mm=p_dateString.split("T")[0].substring(5,2);
    var dd=p_dateString.split("T")[0].substring(7,2);
    var p_isostart = moment(yyyy+ "-"+ mm +"-"+dd ,"YYYY-MM-DD");
 
    return p_isostart;
}
    






   
function launchbydate(date1,date2){
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            populatedata(JSON.parse(request.responseText));
         }
    };
    request.open('GET',"https://launchlibrary.net/1.4/launch/" + date1 + "/" + date2);
    request.send();

    
}



function getlaunches() {
    var date1 = document.getElementById('mindate').value;
    var date2 = document.getElementById('maxdate').value;
    rocketdata = []
    launchbydate(date1,date2);
}