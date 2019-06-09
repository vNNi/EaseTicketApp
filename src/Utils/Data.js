import cinema from '../Assets/Images/cinema.jpg';
import futebol from '../Assets/Images/futebol.jpg';
import teatro from '../Assets/Images/teatro.jpg';
import metro from '../Assets/Images/metro.jpg';
import show from '../Assets/Images/show.jpg';
import tecnologia from '../Assets/Images/tecnologia.jpg';

export const categories = {
   Categorias:{
       name: 'Categorias',
       items:[
           {
               id: 1,
               name: 'Cinema',
               img: `${cinema}`,
               url: '',
           },
           {
               id: 2,
               name: 'Futebol',
               img: `${futebol}`,
               url: '',
           },
           {
                id: 3,
                name: 'Teatro',
                img: `${teatro}`,
                url: '',
            },
            {
                id: 4,
                name: 'Metrô',
                img: `${metro}`,
                url : '',
            },
            {
                id: 5,
                name: 'Show',
                img: `${show}`,
                url: '',
            },
            {
                id: 6,
                name: 'Tecnologia',
                img: `${tecnologia}`,
                url: '',
            }
       ],
   }
};

export const recomendations = [
    {
        id: 1,
        name: 'Mais vistos',
        items: [
            {
                id: 1,
                name: 'The Avengers',
                description: 'O filme do ano com 20% OFF. Não perca!',
                img: 'https://picsum.photos/60/91',
                rating: 4,
            },
            {
                id: 3,
                name: 'Toy Story 4',
                description: 'Filme animado sobre brinquedos com interações!',
                img: 'https://picsum.photos/60/90',
                rating: 5,
            },
            {
                id: 4,
                name: 'Toy Story 4',
                description: 'Filme animado sobre brinquedos com interações!',
                img: 'https://picsum.photos/60/92',
                rating: 2,
            },
            {
                id: 5,
                name: 'Toy Story 4',
                description: 'Filme animado sobre brinquedos com interações!',
                img: 'https://picsum.photos/60/93',
                rating: 1,
            }
        ],
    },
    {
        name: 'Mais comprados',
        items: [
            {
                id: 1,
                name: 'Avatar !',
                description: 'Filme com maior bilheteria do mês!',
                img:'',
                rating: 4,
            },
            {
                id: 2,
                name: 'Detetive Pokemón',
                description: 'Novidade que surpreendeu os telespectadores',
                img: 'https://picsum.photos/63/90',
                rating: 5,
            },
            {
                id: 3,
                name: 'Toy Story 4',
                description: 'Filme animado sobre brinquedos com interações!',
                img: 'https://picsum.photos/60/80',
                rating: 3.5,
            },
            {
                id: 4,
                name: 'Toy Story 4',
                description: 'Filme animado sobre brinquedos com interações!',
                img: 'https://picsum.photos/60/70',
                rating: 2,
            },
            {
                id: 5,
                name: 'Toy Story 4',
                description: 'Filme animado sobre brinquedos com interações!',
                img: 'https://picsum.photos/60/30',
                rating: 4,
            }
        ], 
    },
    {
        name: 'Mais votados',
        items: [
            {
                id: 1,
                name: 'Homem Aranha - Longe do lar',
                description: 'O filme do ano com 20% OFF. Não perca!',
                img:'https://picsum.photos/62/90',
                rating: 4,
            },
            {
                id: 2,
                name: 'Anabelle',
                description: 'Filme animado sobre brinquedos com interações!',
                img: 'https://picsum.photos/61/90',
                rating: 5,
            },
            {
                id: 3,
                name: 'Toy Story 4',
                description: 'Filme animado sobre brinquedos com interações!',
                img: 'https://picsum.photos/60/20',
                rating: 1,
            },
            {
                id: 4,
                name: 'Toy Story 4',
                description: 'Filme animado sobre brinquedos com interações!',
                img: 'https://picsum.photos/60/10',
                rating: 2,
            }
        ],
    }
];