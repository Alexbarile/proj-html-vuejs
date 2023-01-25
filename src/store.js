import { reactive } from 'vue'

export const store = reactive({

    // array card info

    cardInfo: [
        {
            title: 'STATISTICAL CONSULTING',
            description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a',
            icon: 'fa-solid fa-chart-line',

        },
        {
            title: 'DIGITAL CONSULTING',
            description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a',
            icon: 'fa-solid fa-volume-high'

        },
        {
            title: 'BANKING CONSULTING',
            description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a',
            icon: 'fa-solid fa-book'
        },
        {
            title: 'ENTERPRISE CONSULTING',
            description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a',
            icon: 'fa-solid fa-bullseye'
        },

    ],

    // array card img

    cardImg: [
        {
            img: '../../public/img/DRY-1-790x592.jpg',
            title: 'Purinky Products',
            subtitle: 'uncategorized'
        },
        {
            img: '../../public/img/221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg',
            title: 'Purinky Products',
            subtitle: 'uncategorized'
        },
        {
            img: '../../public/img/z1el4c4p-790x592.jpg',
            title: 'Purinky Products',
            subtitle: 'uncategorized'
        },
    ],

    // array card name

    cardName: [
        {
            description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed by when I hear the buzz of the little .',
            name: 'Vera Duncan',
            agency: 'Amazon Inc.',
        },
        {
            description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed by when I hear the buzz of the little .',
            name: 'Vera Duncan',
            agency: 'Amazon Inc.',
        },
        {
            description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed by when I hear the buzz of the little .',
            name: 'Vera Duncan',
            agency: 'Amazon Inc.',
        },
    ],

    // array big card

    cardBigCard: [
        {
            img: '../../public/img/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg',
            date: 'july 4, 2019',
            subname: 'by paul',
            title: 'Canadian Consulting Firm acquired by UK Giant',
            description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a ...',
        },
        {
            img: '../../public/img/business-people-working-together-on-project-and-5FHSKBL-1390.jpg',
            date: 'july 4, 2019',
            subname: 'by paul',
            title: 'Canadian Consulting Firm acquired by UK Giant',
            description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a ...',
        },
    ],
})