function getColor(selection)
{
    // var selection="";
	switch(selection){
        //Add more options here
                case "red": 
                case "green":
                    case "blue":
                
              return true;
                break;

	    default :
	    	return false;//returns false because the user picked an unavailable color
	    break;               
    }
    
}

var colorName = prompt('What color do you want?');
var isAvailable = getColor(colorName);
if(isAvailable = true ) console.log('Good news! That color is available');
else console.log('We are sorry, that color is not available');
