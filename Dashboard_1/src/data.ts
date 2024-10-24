export const images = [
    "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&ga=GA1.1.27395000.1687932970&semt=sph",
    "https://img.freepik.com/free-photo/cheerful-girl-cashmere-sweater-laughs-against-backdrop-blossoming-sakura-portrait-woman-yellow-hoodie-city-spring_197531-17886.jpg?size=626&ext=jpg&ga=GA1.1.27395000.1687932970&semt=sph",
    "https://img.freepik.com/free-photo/adorable-french-lady-posing-heart-shaped-sunglasses_197531-16471.jpg?size=626&ext=jpg&ga=GA1.1.27395000.1687932970&semt=sph",
    "https://img.freepik.com/free-photo/inspired-white-female-model-vintage-sunglasses-looking-away-with-surprised-smile_197531-7233.jpg?size=626&ext=jpg&ga=GA1.1.27395000.1687932970&semt=sph",
    "https://img.freepik.com/free-photo/sensual-adult-female-hat-nature_23-2148135093.jpg?size=626&ext=jpg&ga=GA1.1.27395000.1687932970&semt=sph",
]

interface Company {
    src: string
    title: string
    site: string
}

interface About {
    job: string
    alt: string
}

export interface Users {
    id: number
    company: Company
    status: string
    about: About
    users: string[]
    licence: string
}

export const data: Users[] = [
    {
        id: 1,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Customer",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "80",
    },
    {
        id: 2,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Churned",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "40",
    },
    {
        id: 3,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Customer",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "65",
    },
    {
        id: 4,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Customer",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "24",
    },
    {
        id: 5,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Customer",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "74",
    },
    {
        id: 6,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Customer",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "80",
    },
    {
        id: 7,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Customer",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "55",
    },
    {
        id: 8,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Customer",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "80",
    },
    {
        id: 9,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Churned",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "40",
    },
    {
        id: 10,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Customer",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "65",
    },
    {
        id: 11,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Customer",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "24",
    },
    {
        id: 12,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Customer",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "74",
    },
    {
        id: 13,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Customer",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "80",
    },
    {
        id: 14,
        company: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_u61w6KcHicALqG4KH2SytI7pwacl1W23A&usqp=CAU",
            title: "Catalog",
            site: "catalogapp.io",
        },
        status: "Customer",
        about: {
            job: "Content curating app",
            alt: "Brings all your news into one place",
        },
        users: [...images],
        licence: "55",
    },
]
