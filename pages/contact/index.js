import Head from "next/head";
import ContactForm from "../../components/Contact/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content="Any questions you have please get in touch"
        />
      </Head>
      <ContactForm />;
    </>
  );
}
