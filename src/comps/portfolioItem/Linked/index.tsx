import Link from "next/link";

interface LinkedProps {
  link: string;
  linkText: string;
  newtab: boolean;
}

const Linked = (props: LinkedProps) => {
  return (
    <>
      {props.newtab ? (
        <Link href={props.link} target="_blank">
          {props.linkText}
        </Link>
      ) : (
        <Link href={props.link}>{props.linkText}</Link>
      )}
    </>
  );
};

export default Linked;
