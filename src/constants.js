const social_media_links = [
    {name: "Email", link: "mailto:president@phoenix.berkeley.edu", image: 'email.png'},
    {name: "Facebook", link: "https://www.facebook.com/ucbpcg/", image: "facebook.png"},
    {name: "Instagram", link: "https://www.instagram.com/pcgberkeley/", image: "instagram.png"},
    {name: "LinkedIn", link: "https://www.linkedin.com/company/uc-berkeley-phoenix-consulting-group", image: "linkedin.png"},
    {name: "Medium", link: "https://medium.com/@phoenixconsulting", image: "medium.png"}

]

const count_up_objs = [
    {number: 4, description: "Projects every semester"},
    {number: 32, description: "Deliverables completed so far"},
    {number: 33, description: "Active members and 70+ alumni"},
    {number: 1, description: "Phoenix family"},
]

const curr_sem_projs = [
    {name: "Ambry Genetics",
    description: 
        `Ambry is a market leader in genetic testing for hereditary cancers, 
        cardiovasicular disease, neurodevelopmental disorders, epilepsy, and rare diseases. Our project this semester involves
        corporate strategy and partnerships.`},
    {name: "Clarigent Health",
    description: 
        `Clarigent Health develops artificial intelligence algorithms that detect mental health risks. 
        We're excited to work with them to develop market and commercialization strategies.`},
    {name: "Mental Health America",
    description:
        `Founded in 1909, Mental Health America is the nation's leading mental health nonprofit and is more relevant
        today than ever. Our project will assess partnerships, optimize content, and support their long-term mission.`},
    {name: "The Cedars-Sinai Accelerator",
    description:
        `The Cedars-Sinai Accelerator is a startup incubator affiliated with one of the largest hospital systems in
        California. We are taking on a DEI-focused project that will impact the acclerator's startup sourcing and evaluation.`}
]

const home_carousel_testimonials = [
    {testimonial:
        `Their insights generated many in-depth discussions within our group 
        which helped us approach our work more effectively.`,
        author: "Kaiser Permanente"},
    {testimonial: 
        `Phoenix was my closest friend group in college and I can honestly say that 
        knowing every one of them made me a better person.`, 
        author: "Kate Tan (Berkeley '20), Stanford Engineering"},
    {testimonial: 
        `We would not hesitate to work with Phoenix Consulting again given the right circumstances.`, 
        author: "Amgen"},
    {testimonial: 
        `Phoenix Consulting gave me the approach required to effectively solve real industry problems.`, 
        author: "Andrew Nam (Berkeley '19), Google & Accenture Labs"},
    {testimonial: 
        `Phoenix Consulting did an excellent job by assisting Advent Access in our product development 
        processes as well as in conducting market research.`,
        author: "Advent Access"}
]

const phoenix_role_cards = [
    {position: "New Analysts", description: `New Analysts come from all different backgrounds, majors, and years. Many don't have "business" experience—and that's ok! 
    In addition to their first project, new analysts participate in our New Member Education Program (NMEP), 
    designed to develop members who can identify and solve healthcare problems. 
    `},
    {position: "Senior Analysts", description: `Senior analysts and associates are the driving force 
    behind our client projects. They take the lead on work-streams, provide input to project leads, and 
    often push their specific expertise—whether technical or something else—in project workflows. 
    `},
    {position: "Project Managers", description: `If senior analysts and associates are the driving force, project 
    managers are the masterminds. They translate client specifications into deliverables, 
    coordinate analysts to leverage their skills, and determine the overall direction of each project. 
    PMs usually have 3-4 semesters of project experience.
    `},
    {position: "Principals", description: `Similar to project managers, principals are senior members with 3-4 
    semesters of project experience. They are the PM’s alter ego, advising 
    them on every decision. Principals also lead our non client-side projects.
    `},
    {position: "Executives", description: `Executive board members support the rest of the club and drive its growth. 
    They plan recruitment, projects, and socials. They also look for ways to improve Phoenix’s output, 
    reach, and member development.
    `
    },
    {position: "Alumni", description: `Our alumni are graduates, but they aren't forgotten. Those around come out 
    frequently to retreats and socials. Unless you’re George or Andrew, in which case you’re graduated and forgotten. 
    `}
]

const alumni_companies = [
    {name: "apple", pic: "apple.png"},
    {name: "amazon", pic: "Amazon.png"},
    {name: "amgen", pic: "amgen.png"},
    {name: "accenture", pic: "accenture.png"},
    {name: "bain", pic: "bain.png"},
    {name: "bcg", pic: "bcg.png"},
    {name: "gatesfoundation", pic: "gatesfoundation.png"},
    // {name: "columbia", pic: "columbia.png"},
    {name: "genentech", pic: "genentech.png"},
    {name: "google", pic: "google.png"},
    {name: "goldman", pic: "goldman.png"},
    {name: "janestreet", pic: "janestreet.png"},
    {name: "johnsonandjohnson", pic: "johnsonandjohnson.png"},
    {name: "mayoclinic", pic: "mayoclinic.png"},
    {name: "morganstanley", pic: "morganstanley.png"},
    {name: "neuralink", pic: "neuralink.png"},
    {name: "roche", pic: "roche.png"},
    {name: "houseofreps", pic: "houseofreps.png"},
    {name: "verily", pic: "verily.png"}
]

const recruitment_events = [
    {event: "Infosession 1", dateTime: "Thursday, 1/21 6-8pm"},
    {event: "Office Hours", dateTime: "Friday, 1/22 11-4pm"},
    {event: "Women's Event", dateTime: "Monday, 1/25 6-8pm"},
    {event: "Infosession 2", dateTime: "Tuesday, 1/26 6-8pm"},
    {event: "Office Hours", dateTime: "Wednesday, 1/27 6-8pm"},
    {event: "Case Workshop", dateTime: "Thursday, 1/28 6-8pm"},
    {event: "Application Due", dateTime: "Friday, 1/29 5pm"},
    {event: "First Round Interviews", dateTime: "Sunday, 1/31"},
    {event: "Meet Phoenix", dateTime: "Tuesday, 2/2"},
    {event: "Group Interviews", dateTime: "Wednesday, 2/2"}
]

export { social_media_links };
export { count_up_objs };
export { curr_sem_projs };
export { home_carousel_testimonials };
export { phoenix_role_cards };
export { alumni_companies };
export { recruitment_events };