/*
 * Hackademic Client Console JS
 * 
 * This is the file that makes the webpages have a console-like behavior.
 * All it does is check the <cInput> text field, that every console-like page of the website has, for keypresses.
 * If the Enter button is pressed, it gets the input text and checks if it is a known command.
 * It's using the built-in JavaScript String methods to do the checks.
 * 
 * Since this is not an actual web application, it uses "cheap tricks" to connect the challenges.
 * All it does is get your current URL, get the challenge number part of it, and redirect you to the correct folder.
 * In order for all this to work, the challenges have to be named 'chalenge-x.html' and their directories "challenge-x" where x is the number of the challenge.
 * 
 * To conclude, if this project was to be an actual web application that had to be updated and maintained, this code would not fit well.
 * For the purpose it was made though i think it suffices. It has only a few lines of code and it was pretty fast to write and get it work.
 * 
 * 			-What It Expects-
 * 			1.Every page this runs on has to have a <cInput> text field and a <consoleOutput> div.
 * 			2.Challenge description pages are stored in the following format: "challenge-x.html"
 * 			3.Challenge directories are located in the same directory as the challenge description pages, and are named as "/challenge-x"
 * 			4.You provide the actual number of available challenges in the NUMBER_OF_CHALLENGES var.
 *  
 */

//Just a constant that helps with some checks bellow
var NUMBER_OF_CHALLENGES = 5; 

//consoleOutput(): outputs text in the <consoleOutput> div every console-like page in this site has.
function consoleOutput(txt){	
	var consoleOutput = document.getElementById("consoleOutput");
	consoleOutput.appendChild(document.createTextNode(txt));
	consoleOutput.appendChild(document.createElement("br"));	
}

//parseCommand(): Splits the command the user inputs and returns an array.
//array[0] will store the command name, array[1], array[2] the commands parameters.
function parseCommand(txt){
	return txt.trim().split(" ",3);

}

//goToChallenge(): redirects to a /challenge-x.html folder in the web-directory. X is the number of the challenge.
function goToChallenge(number){	
	window.location = "/challenge-"+number+".html";
}

//This is the method that does all the work. It listens for keypress on the <cInput> text field element. 
document.getElementById('cInput').onkeypress = function(e){	
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
    	consoleOutput(this.value) 
    	var command = parseCommand(this.value); //the array that stores the given command and it's parameters.
    	var noParameters = command.length==1;  //this one is TRUE if the command had no parameters, FALSE otherwise. 	  
   	    switch(command[0]){ 
   	    	case "help":
   	    			if(noParameters){   	    		
   	    			consoleOutput("Available Commands: challenge [1-5], start,  back, clear, about.");   	    
   	    			consoleOutput("You can only use the start command once you're in a challenge description page.");  		
   	    			
   	    			} else {consoleOutput("The help command accepts no parameters.");}
   	    			break;
   	    		case "about":   	
   	    			if(noParameters){    		
   	    				consoleOutput("Currently a set of 5 introductory hacking challenges. The project is still under heavy-developent.");
   	    			} else {consoleOutput("The about command accepts no parameters.");}
   	    			break;   	    			
   	    		case "back":
   	    			if(noParameters){
   	    				history.go(-1);}
   	    			else { consoleOutput("The back command accepts no parameters."); }
   	    			break;
   	    		case "clear":
   	    			if(noParameters){
   	    				document.getElementById("consoleOutput").innerHTML="";
   	    			}
   	    			else {consoleOutput("The clear command accepts no parameters.");}
   	    			break;   	   	    			
   	    		case "challenge":
   	    			if(noParameters){
   	    				consoleOutput("Specify a challenge number. ex. challenge 1");
   	    			} else {
   	    				if(command[2]){consoleOutput("Challenge requires only one parameter.");break;} 
   	    				if(!isNaN(command[1])){   	    					
   	    					if(command[1] <= NUMBER_OF_CHALLENGES && command[1]>0){goToChallenge(command[1]);}
   	    					else{consoleOutput("Challenge not found.")}   	    					
   	    				}
   	    				else
   	    				{
   	    					consoleOutput("Called a challenge with wrong parameters.");
   	    				}
   	    			}
   	    			break;    	  
   	    		case "start":
   	    			if(noParameters){
   	    				var currentURL = document.URL;   	    				
   	    				var chaPos = currentURL.lastIndexOf("challenge-")+10;   	    			
   	    				if(chaPos != -1){   	    					
   	    					var challengeNumber = currentURL.charAt(chaPos)
   	    					if(challengeNumber >= 1 && challengeNumber<=5){
   	    						window.location = "/challenge-"+challengeNumber;  	
   	    					}
   	    					else{
   	    						window.location = "/challenge-1";  	
   	    					}
   	    					 	    					
   	    				}
   	    				else{consoleOutput("Select a challenge first.")}
   	    			}
   	    			else {
   	    				consoleOutput("The start command accepts no parameters.")   	    				
   	    			}	
   	    			break; 	    						
   	    			
   	    		default:
   	    			consoleOutput("Uknown command.");
   	    }   	       	       	        	
    	this.value = ""; //empties the <cInput> value.    	
    	return false; //prevents the form from being submitted.
    }
  }