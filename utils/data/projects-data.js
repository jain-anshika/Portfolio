import ayla from '/public/image/ayla.jpg';
import MovieMatch from '/public/image/MovieMatch.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Movie Match - Movie Recommendation System',
        description: "We developed Movie Match by collecting data from Kaggle and preprocessing movie data, merging, and cleaning it for analysis. We used text vectorization techniques like bag-of-words and utilized cosine similarity to find similarities between movie vectors, enabling us to identify the top 5 nearest movies for recommendations. Our tech stack includes Python, Streamlit, NLTK (Natural Language Toolkit), Pandas, NumPy, and Scikit-learn.",
        tools: ['Python', 'Streamlit', 'Natural Language Toolkit', 'Pandas', 'AWS S3', 'Scikit-learn', 'Numpy', 'Pandas'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: MovieMatch,
    },
    {
        id: 2,
        name: 'AgriVision - Satellite Imagery Analysis',
        description: 'AgriVision AI uses AI and ML to assess the impact of the 2018 Kerala floods on agriculture by analyzing NDVI data. The project aims to improve disaster preparedness and agricultural planning, focusing on crop damage and recovery. Built with Azure Machine Learning Studio, it offers an efficient solution for analyzing agricultural data.',
        tools: ['Azure Machine Learning Studio', 'Python', 'NDVI Data', 'Pre-trained AI Models', 'JavaScript'],
        role: 'Machine learning model',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Bookflow - Library Management App',
        description: 'BookFlow is a library management app built with React that simplifies book borrowing and returns using QR code scanning. It allows users to check book availability, issue and return books efficiently, and search through the library with smart filters. The app is responsive, supporting both desktop and mobile, and is built with a tech stack including React, Node.js, MySQL, and JWT for security.',
        tools: ['React', 'React Router', 'Material-UI (Mui)', 'Node.js', 'Express', 'Axios', 'MySQL', 'Netlify CLI', 'CSS'],
        code: '',
        role: 'Front End Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Foodverse - Recipe WebApp',
        description: "Foodverse is a recipe website that allows users to search for recipes, view necessary ingredients, and save their favorite dishes to local storage. It caters to vegetarians, meat eaters, and those looking to lose weight. The site is user-friendly and built with modern web technologies.",
        tools: ['React', 'Tailwind', 'React Router', 'JavaScript', 'Node JS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },