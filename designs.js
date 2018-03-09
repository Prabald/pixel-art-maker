
let color="black";
let mouseDown=false;

function makeGrid(){

    $("#pixelCanvas").children().remove(); //To reset the canvas
    
    const canvas=document.getElementById("pixelCanvas");
    
    const height=$("#inputHeight").val();
    
    const width=$("#inputWidth").val();
    
    const pixelSize=$("#pixelSize").val(); 
  
    /*for loop to create the table dynamically */
    
    for(let i=0;i<height;i++)
        {
            var row=canvas.insertRow(i);
            for(let j=0;j<width;j++)
            {
                let x=row.insertCell(j);
                
            }
        }
    
    $("td").css("width",pixelSize);
    
    $("tr").css("height",pixelSize);
    
}

/*Event listener to set the selected color*/
$("#colorPicker").change(function(){
    color=$(this).val();
    
});

/*Event listener to call the makeGrid() function*/
$("#createGrid").click(function(evt){
    evt.preventDefault();
    makeGrid();
});

/*Event Listener to check whether the user is selecting a color of his own or the provided color*/
$(".predefColors").click(function(evt){
    evt.preventDefault();
    color=$(this).attr("name"); 
});

/*Event listener to check if the mouse key is currently pressed and to change the color of the cell which the cursor is on*/
$('table').delegate('td', 'mousedown', function() {
  mouseDown=true
  $(this).css('background-color', color);
});

/*To erase the color from the cell which is double clicked on*/
$('table').delegate('td', 'dblclick', function() {
  $(this).css('background-color', 'white');
});

/*To check if the mouse key is no longer pressed*/
$('table').delegate('td', 'mouseup', function() {
  mouseDown=false;
});

/*To check if the mouse is hovering over the table cells */
$('table').delegate('td', 'mouseover', function() {
   if(mouseDown==true) 
  $(this).css('background-color', color);
});

/*To check if the mouse key is no longer pressed*/
$('body').mouseup(function(){
   mouseDown=false; 
});

/*Event Listener to make the grid appear or disappear according to user's wish*/
$('#gridVisibility').change(function(){
    if($(this).prop("checked")==true)
        $("table, td, tr").css({"border":" 1px solid grey","border-collapse":"seperate"});
    else
       $("table, td, tr").css({"border":" none","border-collapse":"collapse"}); 
})