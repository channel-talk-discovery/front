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

const BASE_URL = "http://13.125.129.137"
// const BASE_URL = "http://localhost:8080"


export const getMainCards = async (filter) => {
    let category = undefined

    if (filter === "date") {
        category = "couple"
    } else if (filter === "surprise") {
        category = "surprise"
    } else if (filter === "alone") {
        category = "alone"
    }

    if (category) {
        const response = await axios.get(`${BASE_URL}/place?category=${category}`)
        return response.data.data
    }

    const response = await axios.get(`${BASE_URL}/place`)
    return response.data.data
}

export const uploadImage = async (image) => {
    let formData = new FormData()
    formData.append("imgUpload", image)

    const response = await axios.post(`${BASE_URL}/upload`, formData,
        { headers: { "Content-Type": "multipart/form-data" } })

    return response.data.fileInfo
}

let demo_cnt = 0

export const getImageCompareResult = async (placeId, uploadImageUrl) => {
    // TODO: send real API request
    demo_cnt += 1

    if (demo_cnt === 1) {
        return "fail"
    }

    return "B"

    const response = axios.post(`${BASE_URL}/deepAI/image-similarity`, {
        placeId,
        uploadImageUrl: `${BASE_URL}/uploads/${uploadImageUrl}`,
    })
    console.log(response.data)
    return "D"
}
