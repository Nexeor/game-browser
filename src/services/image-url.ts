// Return a url for a cropped (600 x 400) version of the inputted media url 
const getCroppedImageUrl = (url : string ) => {
    const index = url.indexOf('media/') + 'media/'.length; // Get the image routing
    // Splice together the URL with cropped routing and return
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index); 
}

export default getCroppedImageUrl