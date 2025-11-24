import ContactCustomerSupport from "@/components/ContactUsPage/ContactCustomerSupport";
import ContactHero from "@/components/ContactUsPage/ContactHero";
import ContactSection from "@/components/ContactUsPage/ContactSection";
import { fetchGraphQL } from "@/lib/graphql";

type ContactData = {
    page: {
        contactpage: {
            phoneNumber: string;
            email: string;
            location: string;
        }
    }
    
}

export default async function Contact () {

    const Contact = await fetchGraphQL<ContactData>(`
        query {
            page(id: "/contact-us", idType: URI) {
                contactpage {
                    phoneNumber
                    email
                    location
                }
            }
        }`)

    const ContactFetch = Contact.page.contactpage;

    return(
        <>
            <ContactHero />

            <ContactCustomerSupport />

            <ContactSection phoneNumber={ContactFetch.phoneNumber} email={ContactFetch.email} location={ContactFetch.location} />
        </>
    );
}
