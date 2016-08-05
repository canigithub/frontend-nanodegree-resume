/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append("Nengyun Zhang")

var bio = {
    'name': 'Nengyun Zhang',
    'role': 'Web Developer',
    'contacts': {
        'mobile': '720-393-0168',
        'email': 'nengyun.zhang@gmail.com',
        'github': 'canigithub',
        'location': 'Tucson',
    },
    'welcomeMsg': 'es balabala si?',
    'skills': ['Java', 'Python', 'C++/C', 'Matlab'],
    'bioPic': '../images/fry.jpg'
}


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
    new School('CSU', 'Fort Collins, CO', 'BS', 'ECE', 2014, null),
    new School('UofA', 'Tucson, AZ', 'MS', 'ECE', 2016, null)
    ],
    'onlineCourses': [
    new Course('Alg', 'Princeton', 2016, null),
    new Course('ML', 'UofWash', 2016, null),
    new Course('IR', 'UIUC', 2016, null)
    ]
}


var Job = function(employer, title, location, dates, descrpt) {
    this.employer = employer;
    this.title = title;
    this.location = location;
    this.dates = dates;
    this.descrpt = descrpt;
}


var work = {
    'jobs': [
    new Job('CSU', 'Student', 'Fort Collins, CO', 2014, 'si?'),
    new Job('UofA', 'TA', 'Tucson, AZ', 'In progress', 'da.')
    ]
}


var Project = function(title, dates, descrpt, images) {
    this.title = title;
    this.dates = dates;
    this.descrpt = descrpt;
    this.images = images;
}

var projects = {
    'projects': [
    new Project('DB', '2016', 'Implement DB', null),
    new Project('Clustering', '2016', 'Find Community Structure in Social Networks', null)
    ]
}


if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace('%data%', skill);
        $('#skills').append(formattedSkill);
    });
}

// console.log(work.jobs.length);

work.jobs.forEach(function(job) {

    // # -> id
    $('#workExperience').append(HTMLworkStart);
    var formattedEntry= [];
    for (entry in job) {
        switch (entry) {
            case 'employer':
                formattedEntry.push(HTMLworkEmployer.replace('%data%', job[entry]));
                break;
            case 'title':
                formattedEntry.push(HTMLworkTitle.replace('%data%', job[entry]));
                break;
            case 'location':
                formattedEntry.push(HTMLworkDates.replace('%data%', job[entry]));
                break;
            case 'dates':
                formattedEntry.push(HTMLworkLocation.replace('%data%', job[entry]));
                break;
            case 'descrpt':
                formattedEntry.push(HTMLworkDescription.replace('%data%', job[entry]));
                break;
            default:
                console.log('something wrong');
        }
    }

    // . -> class
    // :last: the most recent elem of the class created
    $('.work-entry:last').append(formattedEntry.join(''));
});




















