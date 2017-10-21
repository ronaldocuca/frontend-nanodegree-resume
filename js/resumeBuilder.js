/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("Ronaldo Rocha");

 // var awesomeThoughts = "I am Ronaldo Rocha and I am AWESOME!";
 // var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 
 console.log(awesomeThoughts);
 console.log(funThoughts);

 // $("#main").append(funThoughts);

 var formattedName = HTMLheaderName.replace("%data%","Ronaldo Rocha");
 var formattedRole = HTMLheaderRole.replace("%data%","Web Developer fullstack");

 $("#header").append(formattedName);
 $("#header").append(formattedRole);
