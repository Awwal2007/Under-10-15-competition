// email-config.js
export function initEmailJs() {
  emailjs.init({
    publicKey: "mUDxb9BbnKtsGIjMI",
    blockHeadless: true,
    limitRate: {
      id: 'app',
      throttle: 10000
    }
  });
}

export async function sendApprovalEmail(email, name) {
  try {
    await emailjs.send("service_jfovoso", "template_wcipsts", {
      to_name: name,
      to_email: email,
    });
    return true;
  } catch (error) {
    console.error("Email error:", error);
    throw new Error("Failed to send approval email");
  }
}