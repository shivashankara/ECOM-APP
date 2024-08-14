import ImageGallery from "../../../node_modules/react-image-gallery";

export default function ProductImageGallery() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/1000/600/",
      thumbnail: "https://picsum.photos/250/150/",
    },
    {
      original: "https://picsum.photos/id/1/1000/600/",
      thumbnail: "https://picsum.photos/id/1/250/150/",
    },
  ];

  return <ImageGallery items={images} showNav={false} useBrowserFullscreen={false} showPlayButton={false}  />;
}
