import emailjs from "emailjs-com";

const serviceID: string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateID: string = process.env
  .NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const userID: string = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

type sendEmailProps = {
  name: string;
  email: string;
  message: string;
};

const sendEmail = (props: sendEmailProps) => {
  try {
    emailjs.send(serviceID, templateID, props, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        return true;
      },
      (error) => {
        throw new Error("Error Sending Email" + error);
      }
    );
  } catch (err) {
    console.error("Error sending Email: ", err);
    return false;
  }
};

export default sendEmail;
