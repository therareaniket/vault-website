"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import Link from "next/link";

export default function SecurityAssurance() {
    return(
        <>
            <section className="section">
                <div className="container">
                    <div className="assrnc-headings">
                        <h2 className="h3">Your Assurance of Global Compliance and Control</h2>

                        <p className="h6 text-rg">DhatuVault continuously aligns with evolving FDA, EMA, and GxP frameworks to safeguard your digital records through automated validation, governance, and traceability.</p>
                    </div>

                    <div className="assrnc-lists">
                        <Tabs defaultValue="fda-21-cfr" className="assrnc-compli-tabs-wrapper">
                            <TabsList className="assrnc-compli-tablist">
                                <TabsTrigger value="fda-21-cfr" className="assrnc-compli-tab">
                                    <h3 className="h5"><i className="icon-compliance"></i>FDA 21 CFR Part 11</h3>
                                </TabsTrigger>

                                <TabsTrigger value="eu-annex-11" className="assrnc-compli-tab">
                                    <h3 className="h5"><i className="icon-compliance"></i> EU Annex 11 </h3>
                                </TabsTrigger>

                                <TabsTrigger value="hippa" className="assrnc-compli-tab">
                                    <h3 className="h5"><i className="icon-compliance"></i> HIPAA </h3>
                                </TabsTrigger>

                                <TabsTrigger value="gdpr" className="assrnc-compli-tab">
                                    <h3 className="h5"><i className="icon-compliance"></i> GDPR </h3>
                                </TabsTrigger>

                                <TabsTrigger value="cdsco" className="assrnc-compli-tab">
                                    <h3 className="h5"><i className="icon-compliance"></i> CDSCO </h3>
                                </TabsTrigger>
                            </TabsList>

                            <div className="assrnc-compli-contnt site-radius-20">
                                <TabsContent value="fda-21-cfr">
                                    <div className="assrnc-tab-details">
                                        <h4>FDA 21 CFR Part 11</h4>

                                        <p>21 CFR Part 11 is a U.S. FDA regulation that defines the criteria under which electronic records and electronic signatures are considered trustworthy, reliable, and equivalent to paper records. It ensures that all electronic systems handling regulated data maintain accuracy, security, and traceability.</p>
                                        
                                        <Link href="#" className="secondry-btn assrnc-explor-btn site-radius-10"><p className="text-md text-center">Explore</p></Link>
                                    </div>
                                </TabsContent>

                                <TabsContent value="eu-annex-11">
                                    <div className="assrnc-tab-details">
                                        <h4>EU Annex 11</h4>

                                        <p>Provides comprehensive guidance on computerized systems operating in GMP-regulated environments across the EU. It ensures that all automated processes uphold data integrity, security, and full regulatory compliance throughout their lifecycle.</p>
                                        
                                        <Link href="#" className="secondry-btn assrnc-explor-btn site-radius-10"><p className="text-md text-center">Explore</p></Link>
                                    </div>
                                </TabsContent>

                                <TabsContent value="hippa">
                                    <div className="assrnc-tab-details">
                                        <h4>HIPAA</h4>

                                        <p>Ensures the protection of sensitive patient health information through robust administrative, physical, and technical safeguards. Compliance is mandatory for healthcare providers, insurers, and associated partners to maintain privacy and data security at every level.</p>
                                        
                                        <Link href="#" className="secondry-btn assrnc-explor-btn site-radius-10"><p className="text-md text-center">Explore</p></Link>
                                    </div>
                                </TabsContent>

                                <TabsContent value="gdpr">
                                    <div className="assrnc-tab-details">
                                        <h4>GDPR</h4>

                                        <p>Protects the personal data of EU residents by enforcing strict standards for privacy, transparency, and user control. Organizations must ensure responsible handling of data across collection, processing, and storage to maintain trust and compliance.</p>
                                        
                                        <Link href="#" className="secondry-btn assrnc-explor-btn site-radius-10"><p className="text-md text-center">Explore</p></Link>
                                    </div>
                                </TabsContent>

                                <TabsContent value="cdsco">
                                    <div className="assrnc-tab-details">
                                        <h4>CDSCO</h4>

                                        <p>Serves as India’s primary regulatory authority overseeing drug approvals, clinical trials, and manufacturing compliance. It ensures that all pharmaceuticals meet the highest standards of safety, efficacy, and quality before reaching patients.</p>
                                        
                                        <Link href="#" className="secondry-btn assrnc-explor-btn site-radius-10"><p className="text-md text-center">Explore</p></Link>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>

                    <Accordion type="single" collapsible className="w-full assrnc-lists-mobile" defaultValue="item-1" >
                        <AccordionItem value="item-1" className="assr-acc-item">
                            <AccordionTrigger> <h3 className="h5">FDA 21 CFR Part 11</h3> </AccordionTrigger>

                            <AccordionContent className="flex flex-col gap-4 text-balance assr-acc-cont">
                                <p>21 CFR Part 11 is a U.S. FDA regulation that defines the criteria under which electronic records and electronic signatures are considered trustworthy, reliable, and equivalent to paper records. It ensures that all electronic systems handling regulated data maintain accuracy, security, and traceability.</p>
                                
                                <p></p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="assr-acc-item">
                            <AccordionTrigger> <h3 className="h5">EU Annex 11</h3> </AccordionTrigger>

                            <AccordionContent className="flex flex-col gap-4 text-balance assr-acc-cont">
                                <p>Provides comprehensive guidance on computerized systems operating in GMP-regulated environments across the EU. It ensures that all automated processes uphold data integrity, security, and full regulatory compliance throughout their lifecycle.</p>
                                
                                <p></p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="assr-acc-item">
                            <AccordionTrigger> <h3 className="h5">HIPAA</h3> </AccordionTrigger>

                            <AccordionContent className="flex flex-col gap-4 text-balance assr-acc-cont">
                                <p>Ensures the protection of sensitive patient health information through robust administrative, physical, and technical safeguards. Compliance is mandatory for healthcare providers, insurers, and associated partners to maintain privacy and data security at every level.</p>
                                
                                <p></p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="assr-acc-item">
                            <AccordionTrigger> <h3 className="h5">GDPR</h3> </AccordionTrigger>

                            <AccordionContent className="flex flex-col gap-4 text-balance assr-acc-cont">
                                <p>Protects the personal data of EU residents by enforcing strict standards for privacy, transparency, and user control. Organizations must ensure responsible handling of data across collection, processing, and storage to maintain trust and compliance.</p>
                                
                                <p></p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="assr-acc-item">
                            <AccordionTrigger> <h3 className="h5">CDSCO</h3> </AccordionTrigger>

                            <AccordionContent className="flex flex-col gap-4 text-balance assr-acc-cont">
                                <p>Serves as India’s primary regulatory authority overseeing drug approvals, clinical trials, and manufacturing compliance. It ensures that all pharmaceuticals meet the highest standards of safety, efficacy, and quality before reaching patients.</p>

                                <p></p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </>
    );
}

