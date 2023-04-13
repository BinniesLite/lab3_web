import prof from '../assets/other_prof.png';
import mahdi from '../assets/imgs/mahdi.png';

// create an interface for the events array of objects
export interface Events {
    year?: string,
    eventsList: EventList[]
}
interface EventOrganizer {
  organizerName?: string;
  organizerTitle?: string;
  organizerImg?: string;
}

export interface EventList {
    id?: number;
    eventTitle: string;
    eventDescription: string,
    eventOrganizer?: EventOrganizer[],
    eventDate?: string,
    eventLocation?: string;
    eventSpeaker?: EventSpeaker[];
    eventTablePrivate?: EventTable[];
    eventTableOpen?: EventTable[];
  }

export interface EventSpeaker {
    name?: string;
    speakerTitle?: string;
}

export interface EventTable {
    date_time?: string;
    topic?: string;
    speaker?: string;
    session_chair?: string;
}


export const events: Events[] = [
    {
        year: '2023',
        eventsList:  [
            {
                id: 1, 
                eventDate: "March 13, 2023 & March 15, 2023",
                eventSpeaker: [
                    {
                      name: "Dr. Mehdi Norouzi",
                      speakerTitle: "Associate Professor at UC"
                    },
                    {
                      name: "Dr. Jenq-Haur Wang",
                      speakerTitle: "Professor at NTUT"
                    },
                    {
                      name: "Zh-Ting Yeh",
                      speakerTitle: "MS student at UC"
                    },
                    {
                      name: "Jia-Bin Chang",
                      speakerTitle: "MS student at UC"
                    },
                    {
                      name: "Jeshmitha Gunuganti",
                      speakerTitle: "MSc student at UC"
                    },
                    {
                      name: "Shuo-Yuan Liu",
                      speakerTitle: "MS student at NTUT"
                    },
                    {
                      name: "Yen-Tsang Wu",
                      speakerTitle: "PhD student at NTUT"
                    }
                  ],
                eventTitle: 'The Second Sequence Modeling Workshop– Natural Language and Video Processing',
                eventDescription: 'Announcement of the world leading technology - March 13, 2023 & March 15, 2023',
                eventOrganizer: [
            
                    {
                      organizerName: "Dr. Jenq-Haur Wang",
                      organizerTitle: "Professor at NTUT",
                      organizerImg: prof
                    }
                ],
                eventLocation: 'National Taipei University of Technology(NTUT), Taipei, Taiwan',
                eventTablePrivate: [
                        {
                            date_time: '',
                            topic: 'Opening',
                            speaker: 'Prof. Mehdi Norouzi (University of Cincinnati, USA)',
                            session_chair: 'Prof. Jenq-Haur Wang (NTUT, Taiwan)'
                        },
                        {
                            date_time: 'March 15, 2023, 13:00-15:00 (Taipei time), 1:00-3:00 (Cincinnati time)',
                            topic: 'Introduction of the Teams and Participants',
                            speaker: 'Prof. Jenq-Haur Wang (NTUT, Taiwan) and Prof. Mehdi Norouzi (University of Cincinnati, USA)',
                            session_chair: ''
                        },
                        {
                            date_time: '',
                            topic: 'Shot-based Video Summarization',
                            speaker: 'Zh-Ting Yeh, MSc student at UC (University of Cincinnati, USA)',
                            session_chair: 'Prof. Jenq-Haur Wang (NTUT, Taiwan)'
                        },
                        {
                            date_time: '',
                            topic: 'Fact-checked news recommendation',
                            speaker: 'Kai Yang, MS student at NTUT',
                            session_chair: ''
                        },
                        {
                            date_time: '',
                            topic: 'Discussion panel with all students on the cross-attention model and evaluation metrics (Correlation coefficients)',
                            speaker: 'Speakers & Participants',
                            session_chair: ''
                        },
                        {
                            date_time: 'March 15, 2023, 15:00-17:00 (Taipei time), 3:00-5:00 (Cincinnati time)',
                            topic: 'Video Scene Boundary Identification – TELNET',
                            speaker: 'Jia-bin Chang, MSc student at UC, Chia-Yang Wu, Visiting Scholar at UC',
                            session_chair: 'Prof. Mehdi Norouzi (University of Cincinnati, USA)'
                        },
                        {
                            date_time: '',
                            topic: 'Rumor detection with transformers',
                            speaker: 'Prof. Jenq-Haur Wang (NTUT, Taiwan)',
                            session_chair: ''
                        },
                        {
                            date_time: '',
                            topic: 'Discussion panel with all students on the model and evaluation metrics (Overflow and Coverage)',
                            speaker: 'Speakers & Participants',
                            session_chair: ''
                        },
                        {
                            date_time: 'March 15, 2023, 17:00-17:30 (Taipei time), 5:00-5:30 (Cincinnati time)',
                            topic: 'BREAK',
                            speaker: '',
                            session_chair: ''
                        },
                        {
                        date_time: "March 15, 2023, 17:30-19:30 (Taipei time), 5:30-7:30 (Cincinnati time)",
                        topic: "Unsupervised Key-Frame Extraction",
                        speaker: "Jeshmitha Gunuganti, MSc student at UC",
                        session_chair: "Prof. Mehdi Norouzi (University of Cincinnati, USA)"
                        },
                        {
                            date_time: "",
                            topic: "Fake news detection using graph neural networks",
                            speaker: "Yen-Tsang Wu, PhD student at NTUT",
                            session_chair: "Prof. Mehdi Norouzi (University of Cincinnati, USA)"

                        },
                        {
                            date_time: "",
                            topic: "Discussion panel with all students on unsupervised models including graph-based models such as SUM- Graph and the advantages of Graph Attention Networks.",
                            speaker: "Speakers & Participants",
                            session_chair: "Prof. Mehdi Norouzi (University of Cincinnati, USA)"
                        },
                ],
                eventTableOpen: [
                    {
                        date_time: "March 13, 2023, 9:00-10:30 (Taipei time), 21:00-22:30 (Cincinnati time)",
                        topic: "Shot-Module -1 (minus one): Python in a glance!\n\u2022 Introduction to Google Colab\n\u2022 Setup a function library on Colab integrating with Google Drive\n\u2022 Review Data Types, Control Flow in Python\n\u2022 Motivation for Numpy Array, and transition to Pandasbased Video Summarization",
                        session_chair: "students with minimal programming background\nfrom all Engineering and Non-Engineering tracks"
                        },
                        {
                        date_time: "March 13, 2023, 10:30-12:00 (Taipei time), 22:30-00:00 (Cincinnati time)",
                        topic: "Module 0 (Zero): Machine learning Simplified!\n\u2022 Supervised Learning; Regression, Classification\n\u2022 Unsupervised Learning; Clustering\n\u2022 Unsupervised/Supervised Pipeline - Explainable AI\n\u2022 Motivating Deep Neural Networks",
                        session_chair: "students with Python programming knowledge\nfrom all Engineering and Non-Engineering tracks who want to\nknow the basics of Machine Learning"
                        },
                        {
                        date_time: "March 13, 2023, 12:00-13:00 (Taipei time), 00:00-1:00 (Cincinnati time)",
                        topic: "BREAK",
                        session_chair: ""
                        },
                        {
                        date_time: "March 13, 2023, 13:00-16:00 (Taipei time), 1:00-4:00 (Cincinnati time)",
                        topic: "Module one: Image/Short clip representation\n\n\u2022 Traditional feature extraction methods\n\u2022 Text supervision \u2013 CLIP,\n\u2022 Motivating Image Generation; OpenAI Dall-E-2, Google\nImagen",
                        session_chair: "students with limited Machine learning\nknowledge from all Engineering and Non-Engineering tracks\nwho want to know the basics of Image/Video Processing"
                        },
                        {
                        date_time: "March 13, 2023, 16:00-19:00 (Taipei time), 4:00-7:00 (Cincinnati time)",
                        topic: "Module two: Video Structure Analysis\n\u2022 Traditional temporal segmentation models \u2013 Visual Features;\nDatasets, Challenges, and Transformers\n\u2022 Traditional Key-Frame extraction \u2013 Visual Features; Datasets,\nChallenges, and Transformers\n\u2022 Diverging to Language Models; GPT and ChatGPT\n\u2022 Recent Video Summarization Trends: Merger of Dense Caption\nGenerators with Visual Feature-based summarizers",
                        session_chair: "students with Machine learning knowledge who\nare interested in Sequence Modeling"
                        }
                        ]
            },
            { 
                id: 2,
                eventDate: "Dec 15, 2022 - Dec. 16, 2022",
                eventTitle: "Sequence Modeling Workshop– Natural Language and Video Processing",
                eventLocation: "Virtual",
                eventSpeaker: [
                  { name: 'Dr. Mehdi Norouzi', speakerTitle: 'Associate Professor at UC' },
                  { name: 'Dr. Jenq-Haur Wang', speakerTitle: 'Professor at NTUT' },
                  { name: 'Zh-Ting Yeh', speakerTitle: 'MS student at UC' },
                  { name: 'Jia-Bin Chang', speakerTitle: 'MS student at UC' },
                  { name: 'Jeshmitha Gunuganti', speakerTitle: 'MSc student at UC' },
                  { name: 'Mabon Ninan', speakerTitle: 'Undergraduate student at UC' },
                  { name: 'Jay Kothari', speakerTitle: 'Undergraduate student at UC' },
                  { name: 'Shuo-Yuan Liu', speakerTitle: 'MS student at NTUT' },
                  { name: 'Yen-Tsang Wu', speakerTitle: 'PhD student at NTUT' }
                ],
                eventOrganizer: [
                  {
                    organizerName: "Dr. Jenq-Haur Wang",
                    organizerTitle: "Professor at NTUT",
                    organizerImg: prof
                  },
                  {
                    organizerName: "Dr. Mehdi Norouzi",
                    organizerTitle: "Professor at University of Cincinnati",
                    organizerImg: mahdi
                  },
                ],
                eventDescription: 'Announcement of the world leading technology - Dec 15, 2022 - Dec. 16, 2022',
                eventTableOpen: [
                  {
                    date_time: "Dec. 15, 2022, 8:00-11:00 (Cincinnati time), 21:00-24:00 (Taipei time)",
                    topic: "Introduction of the Teams and Participants",
                    speaker: "Prof. Jenq-Haur Wang (NTUT, Taiwan) and Prof. Mehdi Norouzi (University of Cincinnati, USA)",
                    session_chair: "Prof. Mehdi Norouzi (University of Cincinnati, USA)"
                  },
                  {
                    date_time: "Dec. 15, 2022, 8:00-11:00 (Cincinnati time), 21:00-24:00 (Taipei time)",
                    topic: "Introduction to Video Summarization, Recent Trends",
                    speaker: "Dr. Norouzi (University of Cincinnati, USA)"
                  },
                  {
                    date_time: "Dec. 15, 2022, 8:00-11:00 (Cincinnati time), 21:00-24:00 (Taipei time)",
                    topic: "Subjectiveness of the annotations",
                    speaker: "Jay Kothari, Honor student at UC"
                  },
                  {
                    date_time: "Dec. 15, 2022, 8:00-11:00 (Cincinnati time), 21:00-24:00 (Taipei time)",
                    topic: "Recommending fact-checked news with veracity classification",
                    speaker: "Kai Yang, MS student at NTUT"
                  },
                  {
                    date_time: "Dec. 15, 2022, 19:00-22:00 (Cincinnati time),Dec. 16, 2022, 08:00-11:00 (Taipei time)",
                    topic: "Video Scene Boundary Identification – TELNET",
                    speaker: "Jia-bin Chang, MSc student at UC, Chia-Yang Wu, Visiting Scholar at UC",
                    session_chair: "Prof. Jenq-Haur Wang (NTUT, Taiwan)"
                  },
                  {
                    date_time: "Dec. 15, 2022, 19:00-22:00 (Cincinnati time),Dec. 16, 2022, 08:00-11:00 (Taipei time)",
                    topic: "Recommender Systems based on Generative Adversarial Networks and Mutual Information Maximization",
                    speaker: "Shuo-Yuan Liu (NTUT, Taiwan)"
                  },
                  {
                    date_time: "Dec. 15, 2022, 19:00-22:00 (Cincinnati time),Dec. 16, 2022, 08:00-11:00 (Taipei time)",
                    topic: "Acount management system and anomaly detection",
                    speaker: "Jia-Xin Lin, MS student at NTUT"
                  },
                  {
                    date_time: "Dec. 16, 2022, 8:00-11:00 (Cincinnati time), 21:00-24:00 (Taipei time)",
                    topic: "Unsupervised Video Summarization using Graph Attention",
                    speaker: "Jeshmitha Gunuganti, MSc student at UC",
                    session_chair: "Prof. Mehdi Norouzi (University of Cincinnati, USA)"
                  }, 
                  {
                    date_time: '',
                    topic: 'Multimodal feature fusion for rumor detection with transformers',
                    speaker: 'Prof. Jenq-Haur Wang (NTUT, Taiwan)',
                    session_chair: ''
                  },
                  {
                    date_time: '',
                    topic: 'Improving CFSV2 Climate Forecasting Based on Deep Learning',
                    speaker: 'Chih-Chieh Yu, MS student at NTUT',
                    session_chair: ''
                  },
                  {
                    date_time: 'Dec. 16, 2022, 19:00-22:00 (Cincinnati time), Dec. 17, 2022, 08:00-11:00 (Taipei time)',
                    topic: 'Shot-based Video Summarization',
                    speaker: 'Zh-Ting Yeh, MSc student at UC',
                    session_chair: 'Prof. Mehdi Norouzi (University of Cincinnati, USA)'
                  },
                  {
                    date_time: '',
                    topic: 'Fake news detection using graph neural networks',
                    speaker: 'Yen-Tsang Wu, PhD student at NTUT',
                    session_chair: ''
                  },
                  {
                    date_time: '',
                    topic: 'Discussions on future research collaboration plans',
                    speaker: 'Prof. Mehdi Norouzi (University of Cincinnati, USA)',
                    session_chair: ''
                  }
                ]
            }
                ]
            
            }

]
    

