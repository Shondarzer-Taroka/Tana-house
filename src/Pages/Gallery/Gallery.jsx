import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "https://i.ibb.co/fv6TT7J/bl1.jpg", width: 800, height:  600 },
  { src: "https://i.ibb.co/t46gbjy/bl2.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/xHNSNNY/bl3.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/0Zm7VjC/bl4.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/Srq4GRN/bl5.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/8rtL0s7/bl6.jpg", width: 1300, height: 900 },
  { src: "https://i.ibb.co/0CbtmML/bl7.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/Dfj20jD/bl8.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/vzsT8xr/bl9.jpg", width: 1200, height: 900 },
  { src: "https://i.ibb.co/8K4B6fm/bl10.jpg", width: 1600, height: 900 },
  { src: "https://i.ibb.co/H4LPwWj/bl11.jpg", width: 1000, height: 900 },
  { src: "https://i.ibb.co/N2gSBy3/bl12.jpg", width: 1000, height: 900 },
];
const Gallery = () => {
    return (
          <>
          <h1 className="text-3xl font-bold text-center my-7">Our Gallery</h1>
        <PhotoAlbum layout="rows" photos={photos} />
     </>);
};

export default Gallery;