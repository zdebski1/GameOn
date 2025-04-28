import { EmailDto } from "../user/dto";

export async function sendEmail(sendEmailToUserDto: EmailDto) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: sendEmailToUserDto.to,
    from: sendEmailToUserDto.from,
    subject: sendEmailToUserDto.subject,
    text: sendEmailToUserDto.body,
  };
  sgMail.send(msg).then(() => {
    console.log(
      `Email sent to: ${sendEmailToUserDto.to} from ${sendEmailToUserDto.from}`
    );
  });
}
