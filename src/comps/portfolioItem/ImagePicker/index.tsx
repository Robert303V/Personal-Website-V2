import ReviewsImg from "../../../../public/portfolio/ReviewsPage.png";
import GamesImg from "../../../../public/portfolio/GamesAndDesigns.png";
import UrbanUnrestImg from "../../../../public/portfolio/UrbanUnrest.png";
import ContainTheStrainImg from "../../../../public/portfolio/ContainTheStrain.png";
import PersonalSiteImg from "../../../../public/portfolio/PersonalWebsite.png";
import EatAndGreet from "../../../../public/portfolio/EatAndGreet.png";

const ImagePicker = (image: any) => {
  if (image == "Reviews") {
    return ReviewsImg;
  }
  if (image == "Games") {
    return GamesImg;
  }
  if (image == "Urban") {
    return UrbanUnrestImg;
  }
  if (image == "Contain") {
    return ContainTheStrainImg;
  }
  if (image == "Personal") {
    return PersonalSiteImg;
  }
  if (image == "Eat") {
    return EatAndGreet;
  }
  return "";
};

export default ImagePicker;
