import Link from "next/link";
import Image from "next/image";

interface LinkedImageProps {
  link: string;
  image: any;
  newtab: boolean;
}

const LinkedImage = (props: LinkedImageProps) => {
  return (
    <>
      <Image src={props.image} alt="Project Image" width={300} height={300} />
    </>
  );
};

export default LinkedImage;
