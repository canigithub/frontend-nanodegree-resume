console.log(1);
var a = NaN;
console.log(a);


var bio = {
    'name': 'Nengyun Zhang',
    'role': 'Full Stack Engineer',
    'contacts': {
        'mobile': '720-393-0168',
        'email': 'nengyun.zhang@gmail.com',
        'github': 'canigithub',
        'website': 'ggalpha.com',
        'location': 'Tucson, AZ',
    },
    'welcomeMsg': 'es balabala si?',
    'skills': ['Java', 'Python', 'C/C++', 'Javascript', 'Matlab'],
    'bioPic': './images/fry.jpg'
}

$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

$('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
$('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
$('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
$('#topContacts').append(HTMLwebsite.replace('%data%', bio.contacts.website));
$('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));

$('#header').append(HTMLbioPic.replace('%data%', bio.bioPic));
$('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg));

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        $('#skills').append(HTMLskills.replace('%data%', skill));
    });
}



var Job = function(employer, title, location, dates, descrpt) {
    this.employer = employer;
    this.title = title;
    this.dates = dates;
    this.location = location;
    this.descrpt = descrpt;
}

var work = {
    'jobs': [
    new Job('UofA', 'TA', 'Tucson, AZ', 'In progress', 'da.'),
    new Job('CSU', 'Student', 'Fort Collins, CO', 2014, 'si?')
    ]
}

work.jobs.forEach (function(job) {
    $('#workExperience').append(HTMLworkStart);
    for (var entry in job) {
        switch (entry) {
            case 'employer':
                $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', job[entry]) +
                    HTMLworkTitle.replace('%data%', job['title']));
                break;
            case 'title':
                // $('.work-entry:last').append(HTMLworkTitle.replace('%data%', job[entry]));
                break;
            case 'location':
                $('.work-entry:last').append(HTMLworkLocation.replace('%data%', job[entry]));
                break;
            case 'dates':
                $('.work-entry:last').append(HTMLworkDates.replace('%data%', job[entry]));
                break;
            case 'descrpt':
                $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job[entry]));
                break;
            default:
                console.log('something wrong');
        }
    }
});



var Project = function(title, dates, descrpt, images) {
    this.title = title;
    this.dates = dates;
    this.descrpt = descrpt;
    this.images = images;
}

var projects = {
    'projects': [
    new Project('DB', '2016', 'Implement DB', './images/netsci_lcc1.png'),
    new Project('Clustering', '2016', 'Find Community Structure in Social Networks', './images/netsci_lcc1.png')
    ],

    'display': function() {
        // display all projects
        this.projects.forEach(function(proj) {
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', proj.title));
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%', proj.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', proj.descrpt));
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%', proj.images));
        });
    }
}

projects.display();



var School = function(name, location, degree, majors, dates, url) {
    this.name = name;
    this.location = location;
    this.degree = degree;
    this.majors = majors;
    this.dates = dates;
    this.url = url;
}


var Course = function(title, school, dates, url) {
    this.title = title;
    this.school = school;
    this.dates = dates;
    this.url = url;
}


var education = {
    'schools': [
    new School('UofA', 'Tucson, AZ', 'MS', 'ECE', 2016, null),
    new School('CSU', 'Fort Collins, CO', 'BS', 'ECE', 2014, null)
    ],
    'onlineCourses': [
    new Course('Alg', 'Princeton', 2016, null),
    new Course('ML', 'UofWash', 2016, null),
    new Course('IR', 'UIUC', 2016, null)
    ]
}


$('#main').append(internationalizeButton);

var inName = function(name) {
    var names = name.split(' ');
    names[0] = names[0].replace(/\b\w/g, l=>l.toUpperCase());
    names[1] = names[1].toUpperCase();
    return (names[0] + " " + names[1])
}

$('#mapDiv').append(googleMap)













