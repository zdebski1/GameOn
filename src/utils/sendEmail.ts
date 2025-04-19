export async function sendEmail(
  to: string,
  from: string,
  subject: string,
  body: string
) {

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: to,
  from: from,
  subject: subject,
  text: body
}
sgMail
  .send(msg)
  .then(() => {
    console.log(`Email sent to: ${to} from ${from}`)
  })
}
