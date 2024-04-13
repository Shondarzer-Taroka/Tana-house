import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "https://i.ibb.co/jzFwmRx/istockphoto-501619270-612x612.jpg", width: 800, height:  600 },
  { src: "https://i.ibb.co/jzFwmRx/istockphoto-501619270-612x612.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/jzFwmRx/istockphoto-501619270-612x612.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/jzFwmRx/istockphoto-501619270-612x612.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/jzFwmRx/istockphoto-501619270-612x612.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/jzFwmRx/istockphoto-501619270-612x612.jpg", width: 1300, height: 900 },
  { src: "https://i.ibb.co/jzFwmRx/istockphoto-501619270-612x612.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/jzFwmRx/istockphoto-501619270-612x612.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/jzFwmRx/istockphoto-501619270-612x612.jpg", width: 1200, height: 900 },
  { src: "https://i.ibb.co/jzFwmRx/istockphoto-501619270-612x612.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/jzFwmRx/istockphoto-501619270-612x612.jpg", width: 1000, height: 900 },
];
const Gallery = () => {
    return (
        <PhotoAlbum layout="rows" photos={photos} />
    );
};

export default Gallery;