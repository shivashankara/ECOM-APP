import ImageGallery from "../../../node_modules/react-image-gallery";

// import {Magnifier } from "react-image-magnifier";

export default function ProductImageGallery({props}:any) {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      magnifier: "https://picsum.photos/id/1018/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      magnifier: "https://picsum.photos/id/1015/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      magnifier: "https://picsum.photos/id/1019/1000/600/",
    },
    {
      original: "https://picsum.photos/1000/600/",
      thumbnail: "https://picsum.photos/250/150/",
      magnifier: "https://picsum.photos/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1/1000/600/",
      thumbnail: "https://picsum.photos/id/1/250/150/",
      magnifier: "https://picsum.photos/id/1/1000/600/",
    },
  ];


  // const CustomImageMagnifier = ({ item }:any) => {
  //   return (
  //     <Magnifier
  //       imageSrc={item.original}
  //       largeImageSrc={item.original} // optional, defaults to imageSrc
  //       magnifierSize="50%" // size of the magnifier
  //       magnifierBorderSize={2} // size of the magnifier border
  //       magnifierBorderColor="rgba(255, 255, 255, .5)" // color of the magnifier border
  //     />
  //   );
  // };

  return (
    <>
      <ImageGallery
        items={images}
        // renderItem={(item:any)=>(<CustomImageMagnifier item={item} />)}
        showNav={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        showFullscreenButton={true}
      />
      ;
    </>
  );
}
