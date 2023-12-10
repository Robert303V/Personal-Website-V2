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
      {props.newtab ? (
        <Link href={props.link} target="_blank">
          <Image
            src={props.image}
            alt="Project Image"
            width={300}
            height={300}
          />
        </Link>
      ) : (
        <Link href={props.link}>
          <Image
            src={props.image}
            alt="Project Image"
            width={300}
            height={300}
          />
        </Link>
      )}
    </>
  );
};

export default LinkedImage;
