const projects = [{
    name: 'Nc News',
    description: 'A full-stack news style web app where users can add, comment, and vote on articles, as well as create new topics. This was built to consolidate my understanding of the syllabus taught at Northcoders. The back end was built with Node JS, Express, Postgres, and Knex JS. I used Mocha and Chai to test all endpoints and edge cases. The front end was built with React.',
    image: require('../assets/laptop-news.png'),
    gitHubLink: 'https://github.com/lloydrhodes87/nc-news-project',
    gitHubLinkBE: 'https://github.com/lloydrhodes87/Lloyd-News',
    liveLink: 'https://nc-news-frontend-lr.herokuapp.com/users'
},
{
    name: 'Fable',
    description: 'Tinder meets IMDB meets your local library. A mobile book-swapping app that allows you to connect with other users from around the globe. You swipe to declare your interest in a book, and when matched with someone, arrange a swap. You can then keep track of your book and where it has travelled around the world, as well as viewing the journey of any of your read books or books you might want to read. I was a front-end specialist on this project. The app was built with React Native and Expo. Queries to the back end were made using Apollo Client and GraphQL. Authentication was handled with Firebase.',
    image: require('../assets/phone-fable-small.png'),
    gitHubLink: 'https://github.com/project-fable/fable',
    liveLink: 'lhttps://www.youtube.com/watch?v=jDqRVf1PC_k'
},
{
    name: 'Distance API',
    description: 'This was built for as a tech test for a job interview. It is a full stack app which uses a google api to give users the distance between two locations. The front end was built in React and the backend was built in Node js using Exress to spin up a server. Please note, the API key was only temporary and provided by the company I was interviewing at',
    image: require('../assets/laptop-distance.png'),
    gitHubLink: 'https://github.com/lloydrhodes87/distance-app',
    gitHubLinkBE: 'https://github.com/lloydrhodes87/distance-api',
    liveLink: 'https://distance-app-lr.herokuapp.com/'
},
{
    name: 'Weather App',
    description: 'This was a front end project, which I completed at Northcoders to practice React. It integrates with a Weather API to fetch forecasts for 5 days and current weather.',
    image: require('../assets/ipad-weather.png'),
    gitHubLink: 'https://github.com/lloydrhodes87/reactography',
    liveLink: 'https://global-weather-lr.herokuapp.com/'
},
{
    name: 'Guitar Practice',
    description: 'This was built using Vue js at the request of a friend to aid him in practicing guitar. The user has lots of different option to vary their practice and work on to test themselves',
    image: require('../assets/laptop-randomizer.png'),
    gitHubLink: 'https://github.com/lloydrhodes87/guitar-practice-randomizer',
    liveLink: 'https://nifty-feynman-2a0323.netlify.com/'
},
{
    name: 'Noughts and Crosses',
    description: 'Classic noughts and crosses. This was built as a first React project at Northcoders',
    image: require('../assets/ipad-game.png'),
    gitHubLink: 'https://github.com/lloydrhodes87/noughts-and-crosses',
    liveLink: 'https://noughtsncrosses.herokuapp.com/'
},
{
    name: 'Emoji Adventure',
    description: 'This is an app to search and filter to find Emojies. It was built at Northcoders as a React / API intergration exercise',
    image: require('../assets/phone-emoji.png'),
    gitHubLink: '',
    liveLink: 'https://emoji-adventure.herokuapp.com/'
},
{
    name: 'Github Search',
    description: 'This was built as a technical test for an interview. It is a simple React interface to search for github repos',
    image: require('../assets/phone-github.png'),
    gitHubLink: 'https://github.com/lloydrhodes87/techTest',
    liveLink: 'https://tech-test-lr.herokuapp.com/'
},

];

export default projects;