import axios from 'axios'


export const cards = [
    {
        placeId: 1,
        imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "random",
        mainAddressHint: "서울시 마포구 서교동 450",
        subAddressHint: "논현로",
        uuid: "Yongsan-gu"
    },

    {
        placeId: 2,
        imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "random",
        mainAddressHint: "서울시 마포구 서교동 450",
        subAddressHint: "논현로",
        uuid: "Yongsan-gu"

    },
    {
        placeId: 3,
        imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "random",
        mainAddressHint: "서울시 마포구 서교동 450",
        subAddressHint: "논현로",
        uuid: "Yongsan-gu"

    },
    {
        placeId: 4,
        imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "random",
        mainAddressHint: "서울시 마포구 서교동 450",
        subAddressHint: "논현로",
        uuid: "Yongsan-gu"

    },
    {
        placeId: 5,
        imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "random",
        mainAddressHint: "서울시 마포구 서교동 450",
        subAddressHint: "논현로",
        uuid: "Yongsan-gu"

    },
    {
        placeId: 6,
        imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "random",
        mainAddressHint: "서울시 마포구 서교동 450",
        subAddressHint: "논현로",
        uuid: "Yongsan-gu"
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
