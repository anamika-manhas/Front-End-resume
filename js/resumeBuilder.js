var bio = {
    "name" : " Anamika Manhas",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "8195914610",
        "email" : "anamikamanhas807@gmail.com",
        "github" : "anamika-manhas",
        "twitter" : "pandapandi",
        "location" : "Jammu&Kashmir"
        
    },
    "welcomeMessage" : "Always believe in yourself",
     "skills":["Web Development" , "HTML" , "JavaScript" , "CSS" , "Bootstrap" , "JQuery"],
    "biopic":"images/ana.jpg"
    };

bio.display = function(){
    
    $("#header").prepend(HTMLbioPic.replace("%data%",bio.biopic));
    $("#header").prepend(HTMLheaderName.replace("%data%",bio.name), HTMLheaderRole.replace("%data%",bio.role));
    
    FormattedContacts = [];
    FormattedContacts.push(HTMLmobile.replace("%data%",bio.contacts.mobile));
    FormattedContacts.push(HTMLemail.replace("%data%",bio.contacts.email));
    FormattedContacts.push(HTMLtwitter.replace("%data%",bio.contacts.twitter));
    FormattedContacts.push(HTMLgithub.replace("%data%",bio.contacts.github));
    FormattedContacts.push(HTMLlocation.replace("%data%",bio.contacts.location));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    
    for ( skill in bio.skills)
        {
          $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
        }
    
    for( contact in FormattedContacts)
        {
            $("#topContacts").append(FormattedContacts[contact]);
            $("#footerContacts").append(FormattedContacts[contact]);
            
        };
   

    
};

bio.display();


var work = {
    "jobs" : [{
        "employer" : "Chitkara University",
        "title":"student",
        "dates":"2015-present",
        "location":"Patila road,Rajpura",
        "Description":"I am doing my degree here.",
    }]
};
work.display=function(){
    for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer =HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle =HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle =formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates =HTMLworkDates.replace("%data%", work.jobs[job].dates);
     $(".work-entry:last").append(formattedDates);
    var formattedLocation =HTMLworkLocation.replace("%data%", work.jobs[job].location);
     $(".work-entry:last").append(formattedLocation);
    var formattedDescription =HTMLworkDescription.replace("%data%", work.jobs[job].Description);
     $(".work-entry:last").append(formattedDescription  );
    
} };
work.display();
    
    var projects = {
         "projects": [
            {
                "title": "Movie Website",
                "dates": "2016",
                "description": "It is made by using Python.",
                "image": "images/1.PNG"
            },
            {
                "title": "portfolio",
                "dates": "2016",
                "description": "It is made by using Bootstrap and is responsive.",
                "image": "images/2.PNG" 
            } 
         ]
    };
    projects.display = function() {
        for(pro in projects.projects)
        {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle =HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
    var formattedDates =HTMLprojectDates.replace("%data%", projects.projects[pro].dates);
    var formattedTitleDates =formattedTitle + formattedDates ;
    $(".project-entry:last").append(formattedTitleDates);
    var formattedDescription =HTMLprojectDescription.replace("%data%", projects.projects[pro].description);
     $(".project-entry:last").append(formattedDescription);
    var formattedImage =HTMLprojectImage.replace("%data%", projects.projects[pro].image);
     $(".project-entry:last").append(formattedImage);
        }
    };
                      
 projects.display();

var education ={
    "schools":[
        {
            "name" : "Chitkara University",
            "location" : "Rajpura,Patiala road",
            "degree" : "Bachelors of Engineering",
            "majors" : ["CS"],
            "dates" :2015,
            "url" :"www.chitkara.edu.in"
            
        }
    ],
    
    "onlineClasses" : [
        {
            "title" : "intro to programming",
            "school" : "Udacity",
            "dates" : 2016,
            "url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        }
    ]
};
    
    education.display = function()
    {
        
    for(school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedschoolName =HTMLschoolName.replace("%data%", education.schools[school].name);    
    var formattedschoolDegree =HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedNameDegree =formattedschoolName + formattedschoolDegree ;
    $(".education-entry:last").append(formattedNameDegree);
    var formattedschoolLocation =HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedschoolLocation);
    var formattedschoolDates =HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedschoolDates);
    var formattedschoolMajors =HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedschoolMajors);
   
     
     
}
        
    for(course in education.onlineClasses) 
    {
    $("#education").append(HTMLonlineClasses);
    var formattedonlineTitle =HTMLonlineTitle.replace("%data%", education.onlineClasses[course].title);
    var formattedonlineSchool =HTMLonlineSchool.replace("%data%", education.onlineClasses[course].school);
    var formattedTitleSchool =formattedonlineTitle + formattedonlineSchool ;
    $(".education-entry:last").append(formattedTitleSchool);
    var formattedonlineDates =HTMLonlineDates.replace("%data%", education.onlineClasses[course].dates);
    $(".education-entry:last").append(formattedonlineDates);
    var formattedonlineURL =HTMLonlineURL.replace("%data%", education.onlineClasses[course].url);
    $(".education-entry:last").append(formattedonlineURL);
     
      
    }
    };
education.display();

    
$('#mapDiv').append(googleMap);




