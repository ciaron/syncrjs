import { createFlickr } from "flickr-sdk"

const { flickr } = createFlickr("3e7dd44924b55357971d63965c3b4f86")

const res = await flickr("flickr.photos.getInfo", {
    photo_id: '12345',
})
