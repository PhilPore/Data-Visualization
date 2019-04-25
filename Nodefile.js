//might need to include a library
//console.log("Hi!")
/* 
Objective:
This code is written with the intent to provide a better data visualization for trends within a time period. The intent is to:
1 - have a scatterchart that looks at dates
2 - upon clicking a date, it will give you a scatterchart for the amount in a given day. This feature will require a little more work
Notes:
Get date function needed, as well as time. itll have to iterate through
*/
function DatVis(Datcont){ //Datcont is an array of objects that has the dates of the data. Assumes the object is already sorted
	//a sort feature will likely be added, or is in the software. 
	var datmap = new Map();
	//var yAxis = []; //will show the growth
	var xAxis =[]; //shows the date
	var sum = 0; //this will be used for setting the height
	for(var i = 0; i < Datcont.length; i++){
		if(datmap.has(Datcont[i])){
			//datmap[Datcont[i]]+=1;
			//inc+=1
			datmap.set(Datcont[i], datmap.get(Datcont[i])+1);

			//console.log(datmap[Datcont[i]])
		}
		else{
			//var inc = 1
			datmap.set(Datcont[i], 1);
			xAxis.push(Datcont[i]); //attempt to kill two birds with one stone by adding map keys to the x axis
			console.log(datmap.get(Datcont[i]));
		}
		
	}
	var datpoints = [];
	for(var j = 0; j < xAxis.length; j++){ //intent is to generate the y axis by taking map elements and pushing into the array. Also make the height sum
		//yAxis.push(datmap[xAxis[j]]);
		datpoints.push({x:xAxis[j],y:datmap.get(xAxis[j])});
		sum+=datpoints[j].y; //again we're trying to kill two birds with one stone
	}
	console.log(datmap);
	return datpoints;
	//https://canvasjs.com/html5-javascript-line-chart/ reference
	//<canvas id="LineChart" height = sum+50 width = xAxis.Length></cavas>
	///var vs = document.getElementById("neighborvischart").getContext('2d');
}
	window.onload = function () {
		//var testarray = [1088620200000,1088620200000,1104517800000,
		                  //1104517800000,1104517800000,1209580200000,1304188200000,1304188200000,
		                //  1304187200000,1304187200000,1400000000000,1200000000000];
			//var testarray =[1104517800000,1209580200000,1104517800000,1104517800000,1088620200000,1088620200000];
		var datpoints = DatVis(testarray);
		console.log(datpoints);
		var mindate =new Date(Math.min(...testarray));
		var maxdate = new Date(Math.max(...testarray));
		console.log((maxdate-(mindate-mindate*.5)));
		//console.log(minarr);
		//console.log(maxarr);
		var chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Growth of selected trend word during "+datpoints.length+" months"
			},
			axisY:{
				includeZero: false
			},
			axisX:{
				viewPortMinimum: maxdate-(mindate-mindate*.5),
				viewPortMaximum: maxdate+(mindate-mindate*.5)

			},
			data: [{
				type:"scatter",
				xValueType: "dateTime",
				dataPoints: datpoints

			}]

		});
		chart.render();

	}
	//var lchrt = new Chart()

	//The linegraph from this library is a little crappy, use plotly
	/*var lgraph = {
		chart: {
			height: sum+50,
			type: 'line',
			zoom: {
				enabled: false;
			}
		},
		dataLabels: {
			enabed: false;
		},
		stroke: {
			curve: 'straight';
		},
		series: [{
			name: "Times the word was used"
			data: yAxis

		}],
		title: {
			text: 'Use of our trend',
			align: 'center'
		},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'],
				opacity: 0.5
			},
		}*/


	//};




	
	
	
	//search up a listener
