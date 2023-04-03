import tfcImage from '../assets/images/front-example-tfc.png'
import recipeAppImage from '../assets/images/recipe-app.png'
import diceyImage from '../assets/images/dicey.png'

import Venus from '../components/Venus'
import Mars from '../components/Mars'
import Uranus from '../components/Uranus'

const projects = [
    {
        image: tfcImage,
        link: 'https://github.com/gammarkin/Try-Futebol-Clube',
        description: 'uma página front-end para um clube de futebol',
        title: 'Try Futebol Clube app',
        planet: Uranus,
    },
    {
        image: recipeAppImage,
        link: 'https://github.com/gammarkin/recipe-app',
        description: 'Um aplicativo de receitas',
        title: 'Recipe App',
        planet: Mars,
    },
    {
        image: diceyImage,
        link: 'https://github.com/gammarkin/dicey',
        description: 'um bot para o discord feito com discord.js para o sistema de ordem paranormal.',
        title: 'Dicey bot',
        planet: Venus,
    }
]

export default projects
