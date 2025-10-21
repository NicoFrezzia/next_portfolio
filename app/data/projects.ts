type Project = {
  title: string
  descriptionPreview: string
  description: string
  tags: string[]
  live?: string
  github: string
  image?: string
  featured?: boolean
  inDevelopment?: boolean
}

const projects: Project[] = [
  {
    title: 'Portfolio Website (Currently Viewing)',
    descriptionPreview: 'A personal site built with Next.js and Tailwind CSS to showcase my work and writing.',
    description: 'A personal site built with Next.js and Tailwind CSS to showcase my work and writing.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    live: '/projects',
    github: 'https://github.com/NicoFrezzia/next_portfolio',
    image: '',
    featured: true,
    inDevelopment: false,
  },
  {
    title: 'Python Security Camera',
    descriptionPreview: 'This program uses Python and OpenCV to capture video, detect faces and bodies in real time, and automatically...',
    description: 'This program uses Python and OpenCV to capture video, detect faces and bodies in real time, and automatically record when motion is detected. The video is saved with a timestamp, and the recording stops after a few seconds of no detection. The user can stop the process by pressing q.',
    tags: ['Python', 'OpenCV', 'DateTime', 'Haar Cascade Classifiers'],
    github: 'https://github.com/NicoFrezzia/Security-Camera',
    image: 'securtycamera.png',
    featured: true,
    inDevelopment: true,
  },
  {
    title: 'API Pokédex',
    descriptionPreview: 'I created a Pokédex web page using the PokéAPI with HTML, CSS...',
    description: 'I created a Pokédex web page using the PokéAPI with HTML, CSS, and vanilla JavaScript. Users can browse a list of Pokémon, and the background color changes dynamically based on the selected Pokémon’s type. This project showcases my ability to work with APIs and create interactive, user-focused features.',
    tags: ['JavaScript','Pokédex API', 'CSS', 'HTML', 'Vanilla'],
    github: 'https://nicofrezzia.github.io/Pokedex/',
    image: 'Pokedex.png',
    featured: false,
    inDevelopment: true,
  },

]

export default projects
