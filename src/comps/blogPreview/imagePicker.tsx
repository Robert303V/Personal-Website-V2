import amalfi from "../../../public/blog/LemonLand.jpg";
import roma from "../../../public/blog/Roma.jpg";
import chamonix from "../../../public/blog/PinkPeaks.jpg";
import albania from "../../../public/blog/WaterFall.jpg";

const ImagePicker = (image: any) => {
  if (image == "amalfi") {
    return amalfi;
  }
  if (image == "roma") {
    return roma;
  }
  if (image == "chamonix") {
    return chamonix;
  }
  if (image == "albania") {
    return albania;
  }
  return "";
};

export default ImagePicker;
