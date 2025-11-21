"use client";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

type FAQProps = {
    faqTitle: string;
    faqSubtitle: string;

    faqList: {
        question1: string;
        answer1: string;
        question2: string;
        answer2: string;
        question3: string;
        answer3: string;
        question4: string;
        answer4: string;
        question5: string;
        answer5: string;
    }
}

const HomeFAQ = ({faqTitle, faqSubtitle, faqList}:FAQProps) => {
    return (
        <section className='section'>
            <div className="container">
                <div className="home-faq-wrapper">
                    <div className="hm-faq-head">
                        <h2 className='text-sb'>{faqTitle}</h2>

                        <p className='h6 text-rg'>{faqSubtitle}</p>
                    </div>

                    <div className='hm-faq-accordion'>
                        {/* <FAQSection /> */}
                        <section className="faq-accordion">
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-[953px] mx-auto flex flex-col gap-[20px]">

                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-rg h6">{faqList.question1}</AccordionTrigger>
                                    <AccordionContent className="text-rg h6">{faqList.answer1}</AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-rg h6">{faqList.question2}</AccordionTrigger>
                                    <AccordionContent className="text-rg h6">{faqList.answer2}</AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-rg h6">{faqList.question3}</AccordionTrigger>
                                    <AccordionContent className="text-rg h6">{faqList.answer3}</AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-rg h6">{faqList.question4}</AccordionTrigger>
                                    <AccordionContent className="text-rg h6">{faqList.answer4}</AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger className="text-rg h6">{faqList.question5}</AccordionTrigger>
                                    <AccordionContent className="text-rg h6">{faqList.answer5}</AccordionContent>
                                </AccordionItem>

                            </Accordion>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFAQ