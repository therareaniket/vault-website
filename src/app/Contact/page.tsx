import ContactCustomerSupport from "@/components/ContactUsPage/ContactCustomerSupport";
import ContactHero from "@/components/ContactUsPage/ContactHero";
import ContactSection from "@/components/ContactUsPage/ContactSection";
import { fetchGraphQL } from "@/lib/graphql";

type ContactData = {
    page: {
        contactpage: {
            contactHeroTitle: string;
            contactHeroSubtitle: string;

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
                    contactHeroTitle
                    contactHeroSubtitle

                    phoneNumber
                    email
                    location
                }
            }
        }`)

    const ContactFetch = Contact.page.contactpage;

    return(
        <>
            <ContactHero contactHeroTitle={ContactFetch.contactHeroTitle} contactHeroSubtitle={ContactFetch.contactHeroSubtitle} />

            <ContactCustomerSupport />

            <ContactSection phoneNumber={ContactFetch.phoneNumber} email={ContactFetch.email} location={ContactFetch.location} />
        </>
    );
}
