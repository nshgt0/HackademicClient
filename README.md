Greetings!

This is actually a pretty simple project created by using
HTML5, CSS3, JavaScript, and a little bit of PHP.
I haven't written any fallbacks for older browsers, so a modern browser
is required to display the challenges.

CSS were created "on the fly" so they'are not well organized. 
All of them are simple enough, besides the CSS for the Challege3,5 form.

Each challenge's description is stored in the web-directory and is named as challenge-x.html, where x is the challenge's number.
The actual challenge is stored in the same directory, in a folder named /challenge-x.

This is NOT an interactive web game.
Finishing the challenges is just following a path of links.

I've commented the /js/console.js, the file that links everything together.


Challenge 1 and 2 are the simpliest, a little bit of HTML inspection is enough to solve them.
Challenge 3 works using a strict comparisson for the credentials.(Password: letme1n) 
Challenge 4 uses SSI, and is vulnable to path traversal attacks. You can get an <!--exec cmd="ls" --> directive
running on the subscribe form. It's actually running SSIexec for i'm still doing some testing with it.
Challenge 5 uses regex to match the Username input with something like 'admin ' OR 1=1 --comments'.
