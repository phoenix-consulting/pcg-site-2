const social_media_links = [
    {name: "Email", link: "mailto:president@phoenix.berkeley.edu", image: 'email.png'},
    {name: "Facebook", link: "https://www.facebook.com/ucbpcg/", image: "facebook.png"},
    {name: "Instagram", link: "https://www.instagram.com/pcgberkeley/", image: "instagram.png"},
    {name: "LinkedIn", link: "https://www.linkedin.com/company/uc-berkeley-phoenix-consulting-group", image: "linkedin.png"},
    {name: "Medium", link: "https://medium.com/@phoenixconsulting", image: "medium.png"}

]

const count_up_objs = [
    {number: 4, description: "Projects every semester"},
    {number: 36, description: "Deliverables completed so far"},
    {number: 33, description: "Active members and 70+ alumni"},
    {number: 1, description: "Phoenix family"},
]

const curr_sem = {
    in_caps: "FALL 2021", 
    capitalized: "Fall 2021",
    phoenix_in: "PHOENIX IN FALL 2021"
}

const curr_sem_projs = [
    {name: "Client: Pfizer",
    description: 
        `Pfizer is a multinational pharmaceutical company that develops medications and therapeutic treatments for various diseases. Recently, they've played a large part in slowing the spread of COVID-19 through the launch of their vaccine.`},
    {name: "Client: Lifespan Biolabs",
    description: 
        `Lifespan Biolabs is an emerging biotech startup incubator located in the Bay Area focused on helping entrepreneurs successfully grow their ideas into businesses.`},
    {name: "Client: Bighat Biosciences",
    description:
        `Bighat Biosciences uses a combination of traditional wet lab research techniques and machine learning to construct novel antibodies for use in curing today's most challenging diseases.`},
    {name: "Client: American Bone Health",
    description:
        `American Bone Health is a nonprofit organization focused on spreading awareness about osteoporosis and other bone-related illnesses. We'll be working to ensure that they can have the greatest impact for the longest time.`}
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
    {position: "New Analysts", description: `New Analysts come from all different backgrounds, majors, and years. Many don't have much experience—and that's ok! 
    In addition to their first project, new analysts participate in our New Member Education Program (NMEP), 
    designed to develop thinkers who can identify and solve healthcare problems. 
    `},
    {position: "Senior Analysts", description: `Senior analysts and associates are the driving force 
    behind our client projects. They take the lead on work-streams, provide input to project leads, and 
    often push their specific expertise—whether technical, bio-related, or something else—in project workflows. 
    `},
    {position: "Project Managers", description: `If senior analysts and associates are the driving force, project 
    managers are the masterminds behind our client projects. They translate client specifications into deliverables, 
    coordinate analysts to leverage their skills, and determine the overall direction of each project. 
    PMs usually have 3-4 semesters of project experience.
    `},
    {position: "Principals", description: `Similar to project managers, principals are senior members with 3-4 
    semesters of project experience. They are the PM’s alter ego, disconfirming their biases and advising 
    them on every decision. Principals also lead our non client-side projects. This semester, they're building
    a healthcare accelerator and expanding our public presence.`},
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
    {name: "amazon", pic: "amazon.png"},
    {name: "amgen", pic: "amgen.png"},
    {name: "accenture", pic: "accenture.png"},
    {name: "bain", pic: "bain.png"},
    {name: "bcg", pic: "bcg.png"},
    {name: "gatesfoundation", pic: "gatesfoundation.png"},
    // {name: "forbes", pic: "forbes.jpg"},
    {name: "genentech", pic: "genentech.png"},
    {name: "google", pic: "google.png"},
    {name: "goldman", pic: "goldman.png"},
    {name: "janestreet", pic: "janestreet.png"},
    {name: "johnsonandjohnson", pic: "johnsonandjohnson.png"},
    // {name: "mayoclinic", pic: "mayoclinic.png"},
    {name: "morganstanley", pic: "morganstanley.png"},
    {name: "nasa", pic: "nasa.png"},
    {name: "neuralink", pic: "neuralink.png"},
    {name: "roche", pic: "roche.png"},
    {name: "houseofreps", pic: "houseofreps.png"},
    {name: "verily", pic: "verily.png"}
]

const research_institutions = [
    // {name: "columbia", pic: "columbia.png"},
    // {name: "stanford", pic: "stanford.png"},
    {name: "hms", pic: "hms.png"},
    {name: "stanfordmed", pic: "stanfordmed.png"},
    {name: "mayoclinic", pic: "mayoclinic.png"},
    {name: "ucsf", pic: "ucsf.png"},
    {name: "gladstone", pic: "gladstone.png"},
    // {name: "nasaames", pic: "nasaames.png"},
    {name: "igi", pic: "igi.png"},
    // {name: "lbl", pic: "lbl.png"},
]

const sponsors_and_affiliates = [
    {
        name: "haas",
        pic: "haas.png"
    },
    {
        name: "berkeng",
        pic: "berkeng.png"
    },
    {
        name: "scet",
        pic: "scet.png"
    },
    {
        name: "zs",
        pic: "zs.png"
    },
    {
        name: "extreme",
        pic: "extreme.png"
    }
]

const projects_carousel = [
    {img: "", name: "Kaiser Permanente", 
    testimonial: `"In a short 12 week period, they quickly immersed themselves in understanding 
    our complex organization, the key issues to address and met all milestones and deliverables. 
    Their insights generated many in-depth discussions within our group which helped us approach 
    our work more effectively."`},
    {img: "", name: "Cadence Health", testimonial: `"We worked with Phoenix during a key time of growth for our business. 
    I had high expectations—which were nonetheless exceeded—and the quality of work 
    was on par with industry consultants with years of professional experience. Their contributions have been 
    strong and actionable, and we are using the results of the work to inform key strategic decisions."`},
    {img: "", name: "Amgen", testimonial: `"Our experience with the Phoenix Consulting team was very positive. They helped us define the business case for the novel use of augmented reality 
    technology in both clinical trials and the commercial market. I was impressed by the amount of work they put in, 
    and the thoughtful, research-supported arguments they put forth. 
    We would not hesitate to work with Phoenix Consulting again."`},
    {img: "", name: "Advent Access", testimonial: `"Phoenix Consulting did an excellent job by assisting Advent 
    Access in our product development processes as well as in conducting market research. We were impressed by 
    their ability to quickly generate insights to key issues in the complex dialysis market landscape. 
    They have made valuable contributions to our business development and we are very satisfied with the 
    overall result."`},
]

const services_info = [
    {
        service: "Corporate Strategy",
        description: `Phoenix has assisted `


    }
]

const project_timeline = [
    {
        stage: "First Contact",
        description: `Our account managers and external vice president review interested clients and 
        source new projects.`
    },
    {
        stage: "Scoping",
        description: `Our external team hands off contact to a project manager, 
        who will scope and timeline the project while balancing Phoenix resources and client business needs.`
    },
    {
        stage: "Kickoff",
        description: `After we’ve welcomed our new members at a retreat, we staff our projects and start work!`
    },
    {
        stage: "Midterm Check-In",
        description: `After 5-6 weeks, project managers will schedule a formal presentation to 
        update clients on our progress and rescope if necessary.`
    },
    {
        stage: "Final Deliverable",
        description: `Our projects wrap up around week 12-13 with an on site deliverable. Project managers 
        stay in contact with the client to gather feedback, plan follow up, and ensure successful handoff 
        of all materials.`
    }
]

const past_projects = [
    {
        industry: "Medical Devices",
        type: "Sales & Marketing",
        image: "avive.png"
    },
    {
        industry: "Insurtech",
        type: "Product Development",
        image: "clover.png"
    },
    {
        industry: "Hospital Systems",
        type: "DEI Strategy",
        image: "commonspirit.png"
    },
    {
        industry: "Software",
        type: "Market Research",
        image: "enzyme.png"
    },
    {
        industry: "Elderly Care",
        type: "Human Capital",
        image: "hca.png"
    },
    {
        industry: "Medical Devices",
        type: "Sales & Marketing",
        image: "hubly.png"
    },
    {
        industry: "Healthcare",
        type: "Market Research",
        image: "kaiser.png"
    },
    {
        industry: "Hospital Systems",
        type: "Compliance and Innovation",
        image: "lifebridge.png"
    },
    {
        industry: "Medical Devices",
        type: "Operations and Quality",
        image: "medtronic.png"
    },
    {
        industry: "Diagnostics",
        type: "Financial Analysis",
        image: "myriad.png"
    },
    {
        industry: "Diagnostics",
        type: "Financial Analysis",
        image: "pinpoint.png"
    },
    {
        industry: "Humanitarian Nonprofit",
        type: "Data Analysis",
        image: "redcross.png"
    }
]




const recruitment_events = [
    {event: "Infosession 1", dateTime: "Monday, 8/30 8-10pm", 
    description: `Come meet our members and learn about Phoenix! 
    We'd definitely like to meet you, no matter your major, year, or experience level. 
    We'll share with you some of our past projects, socials, trainings, and favorite memories.`},
    {event: "Office Hours", dateTime: "8/30-9/3, 9am-5pm",
    description: `Drop by our Zoom link anytime during the week to ask us questions and get clarity on the application process. We'll
    have a rotating cast of Phoenixers on—we'd be happy to tell you when members who align most with your interests
    will be around.`},
    {event: "Women's Event", dateTime: "Tuesday, 8/31 8-9pm",
    description: `The women of Phoenix will present their experience in business in a slightly smaller setting.`},
    {event: "Infosession 2", dateTime: "Tuesday, 8/31 9-10:30pm",
    description: `Infosession 2 will be very similar to Infosession 1—attend whichever one works best for you! We'll talk about our 
    projects, socials, and memories.`},
    {event: "Case Workshop", dateTime: "Thursday, 9/2 8-10pm",
    description: `The case workshop is highly recommended for all applicants. We'll walk you through some tips and tricks for success on our cases,
    then split into smaller groups and go through an example case together.`},
    {event: "Application Due", dateTime: "Friday, 9/3 5pm",
    description: `Our application involves a couple of short answer questions and uploading a few documents like your resume.
    Check out our recruitment guide and our FAQ for tips.`},
    {event: "First Round Interviews", dateTime: "Sunday, 9/5",
    description: `After we review applications, some candidates will be invited to schedule individual interviews. The interviews
    will have a behavioral and a case component. Check out our recruitment guide for tips on preparation.`},
    {event: "Meet Phoenix", dateTime: "Tuesday, 9/7 7-9:30pm",
    description: `We'll invite successful first round candidates to a virtual social event! This event doesn't
    factor into your candidacy, and it's your chance to meet members in a
    more casual setting. In other words, it's a chance for you to see if we're a good fit for you. `},
    {event: "Group Interviews", dateTime: "Wednesday, 9/8",
    description: `Our final round interviews involve a more complex case than the individual round, one that's hard to
    solve unless you work effectively with your group. For tips on how to prepare, check out our recruitment guide.`}
]

const student_faq = [
    {question: "Why healthcare?",
    answer: `Healthcare is, simply put, one of the most impactful domains around. Improvements save lives. 
    Screw-ups lead to bad pandemics. It's also big. Domestically, we're talking about a $2.6 trillion dollar industry
    that just keeps on growing. Finally, it's full of problems that are about to be solved.  To quote Andressen Horowitz, a leading venture capital firm: 
    "Very rarely—perhaps even just once a generation—an extraordinary event 
    or force comes along that completely transforms a stagnant industry. 
    We are experiencing that moment right now in healthcare."`},
    {question: "What exactly can I expect from a Phoenix project?",
    answer: "Phoenix projects are semester-long consulting engagements with real-world clients. Your team will have 4-6 analysts, a principal, and a project manager. Over the semester, you’ll solve a business problem for your client by developing a set of actionable recommendations. Past deliverables have included go-to-market plans, financial analysis, product designs, and regulatory guides. Each project will give you industry-agnostic skills, deep domain knowledge, and build pieces of a powerful network."},
    {question: "Wait, but I don’t really want to go into consulting. Is Phoenix still a good fit for me?",
    answer: "While we have incredible pipelines into top consulting firms if you change your mind, 80% of Phoenix is just like you. We’re aspiring CEOs, engineers, scientists, doctors, policymakers, and more. We’re not really interested in consulting as a career. Most of us, however, are interested in two other things: finding the success we want and making an impact.",
    answer2: "For the first, Phoenix provides industry-agnostic practice at communication, picking things up fast, and seeing the big picture. Our alumni everywhere from Stanford Med to Neuralink have noted these are common behaviors for success, especially in deeply technical fields. For the second, making an impact takes lots of practice. We believe the best way to practice is to solve healthcare problems where we stand. Since we’re students, solving those problems just happens to be called consulting :)"},
    {question: "So what does Phoenix look for in candidates?",
    answer: "While we appreciate a basic interest in healthcare, we don’t look for specific skill sets or experiences. Instead, our recruitment process gives applicants room to showcase their creativity, analytical thinking, tenacity, and collaboration skills. We’re also a community at heart, so we look for candidates who can be passionate about our mission, contribute socially, and bring diverse perspectives and backgrounds."},
    {question: "What’s the time commitment for analysts?",
    answer: "Time commitments vary based on the analyst, but average 10 hours per week for new analysts. For most Phoenix members, Phoenix is one of their largest—if not largest—extracurricular commitments."},
    {question: "What’s the new analyst experience like?",
    answer: "We’re deeply committed to helping new analysts succeed. We assign new members a buddy as soon as they join and a big later in their first semester. In addition to their first project, most new analysts also participate in our New Member Education Program (NMEP), designed to develop members who can identify and solve healthcare problems. And of course, everyone in Phoenix is out to lend a helping hand whenever needed."},
    {question: "How can I take my best shot at applying?",
    answer: "The best way is to attend one of our info sessions and our case workshop. They’ll give you deep insight into what we’re looking for, room to ask lots of questions, and practice with last semester’s interviews. You’ll also get to meet us—and we’re very excited to meet you! Beyond that, you can reach out for a more in-depth chat with a member by filling out our interest form. Finally, check out our recruitment guide on application and case interviews."}
]
// Note: Last question above has unspecified links embedded into the answer

// First and last questions below have a link in the answer
const company_faq = [
    {question: "What is Phoenix Consulting Group?",
    answer: "We’re a UC Berkeley student organization that consults for health-sector business problems. Our projects create value both for our clients and our analysts. You can find out more about our club on the About page."},
    {question: "What does a Phoenix team look like?",
    answer: "We staff teams consisting of 4-6 analysts, a project manager, and a principal. The project manager and principal communicate with clients and translate business objectives into project objectives. The analysts then fulfill these project objectives through data analysis, market research, and more."},
    {question: "What’s a typical time frame, scope, and cost for a Phoenix project?",
    answer: "Projects generally last one semester (13-14 weeks), with a midterm and final deliverable. Scopes range widely, but we tend to take on projects that are self-contained (we work remotely and asynchronously) and directly add value to clients’ businesses. Costs are benchmarked based on company size and type and project nature. Our external team typically negotiates this once projects are confirmed. Each semester, we take on one entirely pro bono project for a nonprofit organization."},
    {question: "What kinds of clients and projects have you worked with/on in the past?",
    answer: "Past clients span the biotech, healthcare, and life sciences industries, but also include tech companies with health initiatives, nonprofit organizations, and more. Project deliverables have included product mockups, international expansion strategies, drug pipeline analysis, and more. Our members span tech, policy, healthcare, finance, and biology, and Phoenix can take on projects in any of these areas. Feel free to read more about our projects on the Projects page."}
]

export { social_media_links };
export { count_up_objs };
export { curr_sem_projs };
export { curr_sem };
export { home_carousel_testimonials };
export { phoenix_role_cards };
export { alumni_companies };
export { research_institutions };
export { recruitment_events };
export { student_faq };
export { company_faq, projects_carousel, project_timeline, past_projects };
export { sponsors_and_affiliates };