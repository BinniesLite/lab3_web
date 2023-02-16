// create a interface for the work arrays of object
export interface Work {
    id: number,
    title: string;
    description: string;
    date: string;
    image: string;
}

import project1 from '../assets/project_1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg'; 

export const works: Work[] = [
    {
        id: 1,
        title: 'Text Visualizer using TensorFlo',
        // create a random description
        description: 'Project 1 description woah this is not fun at all omg what Am I doing, this isnt fun at all omg help me please somebody save me alredy',
        date: 'July 2019',
        image: project1,
    },
    {
        id: 2,
        title: 'Music generalizer and product description',
        description: 'Project 1 description',
        date: 'December 2023',
        image: project2,
    },
    {
        id: 3,
        title: 'Google SEO',
        description: 'Web generation and text summarization',
        date: 'December 2023',
        image: project3,
    },
    {
        id: 4,
        title: 'Networking with AI Content',
        description: 'Random content generator',
        date: 'January 2020',
        image: project4,
    },
    {
        id: 5,
        title: 'Fill with the unfillable void',
        description: 'This is the unfillable void of the human psychology heart',
        date: 'June 2020',
        image: project1,
    }
]