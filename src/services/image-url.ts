import noImage from '../assets/missing_image_placeholder.webp'

// Return a url for a cropped (600 x 400) version of the inputted media url 
const getCroppedImageUrl = (url : string ) => {
    // If the API doesn't return an image, use placeholder
    if (url === null) return noImage
    
    const index = url.indexOf('media/') + 'media/'.length; // Get the image routing
    // Splice together the URL with cropped routing and return
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index); 
}

export default getCroppedImageUrl