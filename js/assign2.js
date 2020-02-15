$(document).ready(function () {
var margin = {top: 20, right: 200, bottom: 150, left: 100},
	padding = -90,
    width = 1000,
    height = 400;
/*var x = d3.scale.linear()
    .range([0, width]);*/
//Declaring the type of x axis value and its dimensions
   /* var x = d3.scale.ordinal()
    .rangePoints([0	, width -50]);
	
//Declaring the type of y axis value and its dimesions
var y = d3.scale.linear()
    .range([height, 0]);
	
//Declaring predefined array of colors
var color = d3.scale.category10();

//Defining x axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

//Defining y axis
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");
	
//defining variable for ploting the lines between points	
	var valueline = d3.svg.line()
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); })
    .interpolate("linear");

	// Define the div for the tooltip
var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);


//Defining the canvas for drawing the scatterplot	
var svg = d3.select("#timeSeriesChart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top  + margin.bottom)
  .append("g")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
*/
//Loading the data from the json file.

//var ssv = d3.dsv(" ", "text/plain");

// Load and (later, asynchronously) parse the data
d3.text("cereal.csv", function(textString) {
	var datatorender=[];
	var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);
	var gvalues= ["protein","fat","carbo","sugars","fiber"];
	var marks={"American Home Food Products":"circle",
	"General Mills":"square",
	"Kelloggs":"triangle-up",
	"Nabisco":"triangle-down",
	"Ralston Purina":"cross",
	"Post":"diamond",
	"Quaker Oats":"cross",
	
	};
	
	
	var shapes=[["American Home Food Products","circle"],
	["General Mills","square"],
	["Kelloggs","triangle-up"],
	["Nabisco","triangle-down"],	
	["Post","diamond"],
	["Quaker Oats","cross"],	
	["Ralston Purina","cross"],
	];
	
	var hotcoldLegend=[["Hot","linear-gradient-red"],["Cold","linear-gradient-blue"]];
	/*var shapes = ["square","tringle-up","triangle-down","diamond","cross","symbolPentagon"];
	var manufac = ["American Home Food Products","General Mills","Kelloggs","Post","Quaker Oats","Ralston Purina"];*/
	
	
/*	var marks={"American Home Food Products":"symbolPentagon",
	"General Mills":"symbolPentagon",
	"Kelloggs":"symbolPentagon",
	"Nabisco":"symbolPentagon",
	"Post":"symbolPentagon",
	"Quaker Oats":"symbolPentagon",
	"Ralston Purina":"symbolPentagon"
	};*/
	
	//var symbol = d3.symbol().size(1000).type(d3.symbolPentagon);
	var mgvalues= ["sodium","potassium"];
	var x,y;
	//Declaring predefined array of colors
	var color = d3.scale.category10();
	var fooColors;
	/*var shapeScale = d3.scale.ordinal()
            .domain(labels)
            .range([d3_shape.symbolCircle, d3_shape.symbolCross,
                d3_shape.symbolSquare,d3_shape.symbolDiamond,d3_shape.symbolTriangle]);*/
	var data = d3.dsv(" ", "text/plain").parseRows(textString);
	data.forEach(function(d){
		
		var node={
			"Cereal" : d[0],
			"Manufacturer" : getManufacturer(d[1]),
			"Type" : d[2],
			"Calories" : +d[3],
			"Protein" : +d[4],
			"Fat" : +d[5],
			"Sodium" : +d[6],
			"Fiber" : +d[7],
			"Carbohydrates" : +d[8],
			"Sugars" : +d[9],
			"Shelf" : +d[10],
			"Potassium" : +d[11],
			"Vitamins" : +d[12],
			"Weight per serving" : +d[13],
			"Cup per serving" : +d[14]
			
		}
		datatorender.push(node);				
	})
	
function getManufacturer(initial){
	
if(initial == "A") return "American Home Food Products";
else if(initial== "G") return "General Mills";
else if(initial=="K") return "Kelloggs";
else if(initial=="N") return "Nabisco";
else if(initial == "P") return "Post";
else if(initial =="Q") return "Quaker Oats";
else if(initial =="R") return "Ralston Purina";
	}
//console.log(datatorender[0].name);
	


 //x.domain([d3.min(datatorender, function(d) { return d.date; }),d3.max(datatorender, function(d) { return d.date; })]);
 //x.domain(d3.extent(datatorender, function(d) { return d.name; }));
/*
 //Defining x axis
 x.domain(datatorender.map(function(d) { return d.name; }));
//Defining y axis 
 y.domain(d3.extent(datatorender, function(d) { return d.sugars; }));

 //Drawing x axis on the canvas	 
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
	  .selectAll("text")	
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function(d) {
				//console.log(d);
                return "rotate(-55)" 
                })
			.style("font-size","10px")
    .append("text")
      .attr("class", "xlabel")
      .attr("x", width/2 - 200)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Cereals");
	 

	  
//Drawing y axis on the canvas	  
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "translate("+ (padding/2) +","+(height/2)+")rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("values in grams(g)");

*/

var svg = d3.select("#timeSeriesChart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top  + margin.bottom)
  .append("g")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	//Function for ploting lines between data points
	function drawLine(alteredLineValue){	
		alteredLineValue.forEach(function(d){
		svg.append('g')
		.data([d])
		.attr("id",function([d]) { 
		return d.category;})
		.attr('class', 'datapath')
		.selectAll('path')
		.data([d])
		//.data([datatorender])
		.enter().append('path')
        .attr("d", valueline)
		.style("stroke-width", 1)
		.style("stroke", function([d]) { 
		return color(d.category);})//"rgb(6,120,155)")
		.style("fill", "none");
	
}) }


var sizeScale;
var colorScale;
var brightnessScaleForRed;
var brightnessScaleForBlue;
var markScale;
function defineColourToDataPoints(x_axis_value,y_axis_value,size,brightness){
	sizeScale = d3.scale.linear()
    .domain([0,d3.max(datatorender,function(d) { return d[size]})])
	.range([35,250]);
	//var colorList = selectedColour.split('|');
	//console.log(colorList);
	
	brightnessScaleForBlue = d3.scale
    .linear()
    .domain([0,d3.max(datatorender,function(d) { return d[brightness]; })])
    .range([d3.rgb("lightblue"),"darkblue"]);
	
	brightnessScaleForRed = d3.scale
    .linear()
    .domain([0,d3.max(datatorender,function(d) { return d[brightness]; })])
    .range([d3.rgb("yellow"),"red"]);
	}		 
	


function plotXandYaxis(xvalue,yvalue,size,brightness){
	 
	 if(xvalue == "Manufacturer" || xvalue=="Cereal" || xvalue=="Type"){
			x = d3.scale.ordinal().rangePoints([0, width -50]);
	 }else{
		x = d3.scale.linear().range([0	, width -50]);
	 }
	//Declaring the type of y axis value and its dimesions
	 if(yvalue == "Manufacturer" || yvalue=="Cereal" || yvalue=="Type"){
			y = d3.scale.ordinal().rangePoints([height, 0]);
	 }else{
		 y = d3.scale.linear().range([height, 0]);
	 }

	//Defining x axis
	var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

	//Defining y axis
	var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");
	
	//Defining the canvas for drawing the scatterplot	

//Defining x axis
 if(xvalue == "Manufacturer" || xvalue=="Cereal" || xvalue=="Type"){
	x.domain(datatorender.map(function(d) {return d[xvalue]; }));
 }else{
	 x.domain([-1,d3.max(datatorender,function(d) { return d[xvalue]; })]);
	 defineColourToDataPoints(xvalue,yvalue,size,brightness);
	 /*fooColors = d3.scale
    .linear()
    .domain([0,d3.max(datatorender,function(d) { return d[xvalue]; })])
    .range(["#87CEFF", "#0000FF"]);*/
 }
//Defining y axis 
 if(yvalue == "Manufacturer" || yvalue=="Cereal" || yvalue=="Type"){
	 y.domain(datatorender.map(function(d) {return d[yvalue]; }));
 }else {
	y.domain([-1,d3.max(datatorender,function(d) { return d[yvalue]; }) + 1]);
	defineColourToDataPoints(xvalue,yvalue,size,brightness);
	/*fooColors = d3.scale
    .linear()
    .domain([0,d3.max(datatorender,function(d) { return d[yvalue]; })])
    .range(["#87CEFF", "#0000FF"]);*/
 }
//Drawing x axis on the canvas	 
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
	  .selectAll("text")	
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function(d) {
				//console.log(d);
                return "rotate(-55)" 
                })
			.style("font-size","12px");
   
   //Providing labels
   svg.append("text")
      .attr("class", "xlabel")
      .attr("x", width/2 - 200)
      .attr("y", height-6)
      .style("text-anchor", "end")
      .text(xvalue.toUpperCase());
	 
/*	 d3.selectAll("x axis").style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function(d) {
				//console.log(d);
                return "rotate(-55)" 
                })
			.style("font-size","10px");*/

	  
//Drawing y axis on the canvas	  
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
	  .selectAll("text")	
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")        
			.style("font-size","12px");
			
   svg.append("text")
      .attr("class", "ylabel")
      .attr("transform", "translate("+ (padding/2) +","+(height/2)+")rotate(-90)")
	 .attr("y", 6)
      .attr("dy", ".71em")
	  .style("font-size","15px")
      .style("text-anchor", "end")
      .text(yvalue.toUpperCase());
}

	function isNumber(obj) { return !isNaN(parseFloat(obj)) }
	
	
function plotDataPoints(xvalue,yvalue,shape){
  svg.selectAll(".dot" + yvalue )
      .data(datatorender)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 2.5) //specifying the radius of the circle/data point
      .attr("cx", function(d) {
		//   console.log("d[xvalue]  : " + d[xvalue]);
       return x(d[xvalue]); })
      .attr("cy", function(d) {
		  if(isNumber(d[yvalue])){
			if(d[yvalue]>=0){		  			
			  return y(d[yvalue]);
			}
		  }else{
			  return y(d[yvalue]);
		  }
	//	 console.log("d[yvalue]  : " + d[yvalue]);
       //return y(d[yvalue]);
	   })
	  .style("opacity", 1)
	  .style("stroke", function(d) { 
	   if(d.Type == "H") return "red"
	   else return "steelblue";
		})
      .style("fill",function(d){return scaleBright(d[yvalue]);}
    
	  
	  /*function(d) { 
	   if(d.type == "H") return "red"
	   else return "blue";
		}*/
		
		) //giving color to the datapoints depending on the catagory
		.append("svg:title")
		//shows date and exchange rate when mouse is placed on the dots 
		
	
}



var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function plotDataPointsTri(xvalue,yvalue,size){
	//var symbol = d3.svg.symbol().size(1000).type(d3.symbolPentagon);
var points= svg.append("svg").attr("width",width + 50).attr("height",height+20);
 points.selectAll(".dot")
      .data(datatorender)
    .enter().append("path")
      .attr("class", "point")
      .attr("d", d3.svg.symbol().type(function(d){return marks[d.Manufacturer]})
	  .size(function(d){return sizeScale(d[size])}))
   //   .attr("d", d3.svg.symbol().type(function() { return symbol(); }).size(function(d){
	//	  return  sizeScale(d[size])}))
      .attr("transform", function(d) { 
			var numeric_yvalue;
			var rotate = "rotate(0)";
			if(isNumber(d[yvalue])){ //Ploting values which are >=0
				if(d[yvalue]>=0){		  			
					numeric_yvalue =  y(d[yvalue]);
				}
			}else{
			  numeric_yvalue =  y(d[yvalue]);
			}
			
			if (d.Manufacturer=="Ralston Purina") 
				rotate = "rotate(45)";
		//	console.log(numeric_yvalue);
			return "translate(" + x(d[xvalue]) + "," + numeric_yvalue + ")"+rotate; 
			
			
			})
	  .style("opacity", 1)
	  .style("stroke", "darkred")
	 // .style("size", function(d){return sizeScale(d[size])})
	  .style("fill",function(d) { 
			if(d.Type == "H") return brightnessScaleForRed(d[yvalue]);
			else return brightnessScaleForBlue(d[yvalue]);
			})
	 // .style("fill",function(d){return brightnessScale(d[yvalue]);})
      /*.style("fill", function(d) { 
	   if(d.type == "H") return "red"
	   else return "blue";
		}) //giving color to the datapoints depending on the catagory
		.append("svg:title")
		//shows date and exchange rate when mouse is placed on the dots */
		
		
	/*svg.selectAll(".dot"+yvalue+"1")
      .data(datatorender)
	  .enter().append("g")
	  .attr("class", "rect")
	  .attr("transform", function(d) { 
			var numeric_yvalue;
			if(isNumber(d[yvalue])){ //Ploting values which are >=0
				if(d[yvalue]>=0){		  			
					numeric_yvalue =  y(d[yvalue]);
				}
			}else{
			  numeric_yvalue =  y(d[yvalue]);
			}
			
			
		  //	console.log(d[xvalue]);
		  var filteresxvalue;
		  if(d[xvalue] == "Ralston Purina") return d;}
			
			return "translate(" + x(d[xvalue]) + "," + numeric_yvalue + ")"; 
			}
			)
			.append("rect")
	  .attr("width", 40)
      .attr("height", 18)
	  .style("fill", "red")*/
}

function clickOnDataPoints(){
	svg.selectAll(".point") //Providing mouse over event on all the data points.
	.on("mouseover",function(d){
	//	console.log("clicked")
		d3.select(this).style("stroke","Red")//highlighting only the selected data point.
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html("Cereal:"+d["Cereal"] + "<br/>"  
			+"Manufacturer :"+d["Manufacturer"] + "<br/>"
			+"Protein/Fat/Fibre/Carbo/Sugar :"+d["Protein"] +"/" +d["Fat"]+"/" +d["Fiber"]+"/" +d["Carbo"]+"/" +d["Sugars"] +"<br/>"
			+"Vitamin&Mineral :"+d["Vitamins"] + "<br/>")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");
		})
		
	.on("mouseout",function(){ //On mouseout everything will be set back to normal
		 d3.selectAll(".dot")
			.style("opacity", 1)
		d3.selectAll(".datapath") //1111111111111
			.style("opacity",1)
		d3.select(this).style("stroke","darkred")
		 div.transition()		
                .duration(500)		
                .style("opacity", 0);	
	}) 
	
	}

//Creating the legends.	
function createLegent(brightness,sizeValue)	{
	//console.log("y_axis_value " + y_axis_value);
 //Creating the legends.		
  var legend = svg.selectAll(".legend")
      .data(shapes)
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
//Defining the dimension of the legends 
  legend.append("path")
	.attr("class", "point")
      .attr("x", width +50)
	  .attr("transform", function(d, i) {
			var rotate = "rotate(0)";
			if(i==6) rotate = "rotate(45)";
		return "translate("+ (width + 20) +",0)" + rotate; })
	  .attr("d", d3.svg.symbol().type(function(shapes){return shapes[1]}))
      .style("fill", "none")
	  .style("stroke", "red");

  legend.append("text")
	.attr("transform", function(d, i) { return "translate(" + (width +40) +",0)"; })
      .attr("x", 0)
      .attr("y", 0)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
	  .style("font-size","12px")
      .text(function(shapes) {
		//  console.log()
		return shapes[0]; //Giving value to each legend
       });
	   
	   //Append a defs (for definition) element to your SVG
var defs = svg.append("defs");

//Append a linearGradient element to the defs and give it a unique id
var linearGradientRed = defs.append("linearGradient")
    .attr("id", "linear-gradient-red");
	
	linearGradientRed
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%");
	
	//Set the color for the start (0%)
linearGradientRed.append("stop") 
    .attr("offset", "0%")   
    .attr("stop-color", "yellow"); //light blue

//Set the color for the end (100%)
linearGradientRed.append("stop") 
    .attr("offset", "100%")   
    .attr("stop-color", "Red"); //dark blue

	var linearGradientBlue = defs.append("linearGradient")
    .attr("id", "linear-gradient-blue");
	
	linearGradientBlue
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%");
	
	//Set the color for the start (0%)
linearGradientBlue.append("stop") 
    .attr("offset", "0%")   
    .attr("stop-color", "lightblue"); //light blue

//Set the color for the end (100%)
linearGradientBlue.append("stop") 
    .attr("offset", "100%")   
    .attr("stop-color", "darkblue"); //dark blue
	   
	var HClegend = svg.selectAll(".legendHC")
	.data(hotcoldLegend)
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + (i * 40 + 150) + ")"; });
//Defining the dimension of the legends 
  HClegend.append("rect")
      .attr("x", width+12 )	  	  
      .attr("width", 130)
      .attr("height", 20)
	//  .attr("transform","translate("+ (width + 20) +",0)")
      .style("fill", function(hotcoldLegend){ return "url(#"+hotcoldLegend[1] + ")"});

  HClegend.append("text")
  .attr("transform", function(d, i) { return "translate(" + (width +40) +",0)"; })
      .attr("x", 20)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
	  .style("font-size","12px")
	  .style("fill","white")
      .text(function(hotcoldLegend){return hotcoldLegend[0];} //Giving value to each legend
       );
	   
svg.append("text")
  .attr("transform", function(d, i) { return "translate(" + (width +40) +",0)"; })
      .attr("x", -25)
      .attr("y", 177)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
	  .style("font-size","15px")
      .text(brightness+" "+d3.min(datatorender,function(d) { return d[brightness]})+" to " +d3.max(datatorender,function(d) { return d[brightness]})+"");
	  
	  
	var legendSize = svg.selectAll(".legendSize")
      .data(shapes)
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(" +(20*i)+",250)"; });
//Defining the dimension of the legends 
  legendSize.append("path")
	.attr("class", "pointSize")
      .attr("x", width +40)
	  .attr("transform","translate("+ (width ) +",0)")
	  .attr("d", d3.svg.symbol().type(function(shapes){return "triangle-up";}).size(function(shapes,i){return 25*i;}))
      .style("fill", "darkblue")
	  .style("stroke", "red");
	console.log(sizeValue);  
	 svg.append("text")
  .attr("transform", function(d, i) { return "translate(" + (width +40) +",0)"; })
      .attr("x", -25)
      .attr("y", 265)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
	  .style("font-size","15px")
      .text(sizeValue+" "+d3.min(datatorender,function(d) { return d[sizeValue]})+" to " +d3.max(datatorender,function(d) { return d[sizeValue]})+"");

}   

//Functionality for the button click
d3.selectAll("#generate").on("click",function(){	
		svg.selectAll("*").remove();
		var x_axis_value = d3.select("#xaxis").node().value; 
		var y_axis_value = d3.select("#yaxis").node().value; 
	//	console.log(y_axis_value);
		
		//var mark = d3.select("#mark").node().value; 
		var mark="diamond";
	//	var colour = d3.select("#colour").node().value; 
		var brightness = d3.select("#brightness").node().value; 
		var size = d3.select("#size").node().value; 
		
		plotXandYaxis(x_axis_value,y_axis_value,size,brightness);
		
		/*if(y_axis_value == "gvalues"){
			gvalues.forEach(function(d){
			//	console.log("gvalues : " + d);
				//plotDataPoints(x_axis_value,d,mark,"blue");
				plotDataPointsTri(x_axis_value,d,mark)
			})
		}else if(y_axis_value == "mgvalues"){
			mgvalues.forEach(function(d){
				//console.log("mgvalues : " + d);
				//plotDataPoints(x_axis_value,d,mark,"blue");
				plotDataPointsTri(x_axis_value,d,mark)
			})					
		}else{ */
			//plotDataPoints(x_axis_value,y_axis_value,mark,"blue");
			plotDataPointsTri(x_axis_value,y_axis_value,size)
		
		clickOnDataPoints();
		createLegent(brightness,size);
		
		//plotDataPointsTri(x_axis_value,y_axis_value);
		
	//	console.log("x_axis_value : " + d3.select("#xaxis").node().value);
	
		 });

//plotDataPoints("protein");	
	  
	});
	
	
	
});