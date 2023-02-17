import axios from 'axios'


export const cards = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "random",
        desc: "서울시 마포구 서교동 450"
    },

    {
        id: 2,
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "random",
        desc: "서울시 마포구 서교동 450"

    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "random",
        desc: "서울시 마포구 서교동 450"

    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "random",
        desc: "서울시 마포구 서교동 450"

    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "random",
        desc: "서울시 마포구 서교동 450"

    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "random",
        desc: "서울시 마포구 서교동 450"
    },
]


export const getMainCards = async (filter) => {
    if (filter === "all") {
        return new Promise((resolve) => { resolve(cards) })
    }

    return new Promise((resolve) => {
        resolve([
            cards[Math.floor(Math.random() * cards.length)]
        ])
    })
}

export const uploadImageS3 = async (image) => {
    // TODO: upload image to s3 and get link
    return "dummy link"
}

export const getImageCompareResult = async (url) => {
    // TODO: send real API request
    return "D"
}
