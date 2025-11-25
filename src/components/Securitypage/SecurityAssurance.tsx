    "use client"
    import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
    import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
    import Link from "next/link";
    import { ChevronDown } from "lucide-react";

    type AssuranceProps = {
        globalComplianceTitle: string;
        globalComplianceSubtitle: string;
        fda21Details: string;
        euAnnexDetails: string;
        hipaaDetails: string;
        gdprDetails: string;
        cdscoDetails: string;
    }

    export default function SecurityAssurance({globalComplianceTitle, globalComplianceSubtitle, fda21Details, euAnnexDetails, hipaaDetails, gdprDetails, cdscoDetails }:AssuranceProps) {
        return(
            <>
                <section className="section">
                    <div className="container">
                        <div className="assrnc-headings">
                            <h2 className="h3">{globalComplianceTitle}</h2>

                            <p className="h6 text-rg">{globalComplianceSubtitle}</p>
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

                                            <p>{fda21Details}</p>
                                            
                                            <Link href="#" className="secondry-btn assrnc-explor-btn site-radius-10"><p className="text-md text-center">Explore</p></Link>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="eu-annex-11">
                                        <div className="assrnc-tab-details">
                                            <h4>EU Annex 11</h4>

                                            <p>{euAnnexDetails}</p>
                                            
                                            <Link href="#" className="secondry-btn assrnc-explor-btn site-radius-10"><p className="text-md text-center">Explore</p></Link>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="hippa">
                                        <div className="assrnc-tab-details">
                                            <h4>HIPAA</h4>

                                            <p>{hipaaDetails}</p>
                                            
                                            <Link href="#" className="secondry-btn assrnc-explor-btn site-radius-10"><p className="text-md text-center">Explore</p></Link>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="gdpr">
                                        <div className="assrnc-tab-details">
                                            <h4>GDPR</h4>

                                            <p>{gdprDetails}</p>
                                            
                                            <Link href="#" className="secondry-btn assrnc-explor-btn site-radius-10"><p className="text-md text-center">Explore</p></Link>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="cdsco">
                                        <div className="assrnc-tab-details">
                                            <h4>CDSCO</h4>

                                            <p>{cdscoDetails}</p>
                                            
                                            <Link href="#" className="secondry-btn assrnc-explor-btn site-radius-10"><p className="text-md text-center">Explore</p></Link>
                                        </div>
                                    </TabsContent>
                                </div>
                            </Tabs>
                        </div>

                        <Accordion type="single" collapsible className="w-full assrnc-lists-mobile" defaultValue="item-1" >
                            <AccordionItem value="item-1" className="assr-acc-item relative">
                                <AccordionTrigger> <h3 className="h5">FDA 21 CFR Part 11</h3> </AccordionTrigger>
                                <ChevronDown style={{ color: "var(--white)" }}  className="assr-acc-arrow wf-acc-arrow transition-transform duration-300 ml-auto" />

                                <AccordionContent className="flex flex-col gap-4 text-balance assr-acc-cont">
                                    <p>{fda21Details}</p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="assr-acc-item">
                                <AccordionTrigger> <h3 className="h5">EU Annex 11</h3> </AccordionTrigger>
                                <ChevronDown style={{ color: "var(--white)" }}  className="assr-acc-arrow wf-acc-arrow transition-transform duration-300 ml-auto" />

                                <AccordionContent className="flex flex-col gap-4 text-balance assr-acc-cont">
                                    <p>{euAnnexDetails}</p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="assr-acc-item">
                                <AccordionTrigger> <h3 className="h5">HIPAA</h3> </AccordionTrigger>
                                <ChevronDown style={{ color: "var(--white)" }}  className="assr-acc-arrow wf-acc-arrow transition-transform duration-300 ml-auto" />

                                <AccordionContent className="flex flex-col gap-4 text-balance assr-acc-cont">
                                    <p>{hipaaDetails}</p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="assr-acc-item">
                                <AccordionTrigger> <h3 className="h5">GDPR</h3> </AccordionTrigger>
                                <ChevronDown style={{ color: "var(--white)" }}  className="assr-acc-arrow wf-acc-arrow transition-transform duration-300 ml-auto" />

                                <AccordionContent className="flex flex-col gap-4 text-balance assr-acc-cont">
                                    <p>{gdprDetails}</p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="assr-acc-item">
                                <AccordionTrigger> <h3 className="h5">CDSCO</h3> </AccordionTrigger>
                                <ChevronDown style={{ color: "var(--white)" }}  className="assr-acc-arrow wf-acc-arrow transition-transform duration-300 ml-auto" />

                                <AccordionContent className="flex flex-col gap-4 text-balance assr-acc-cont">
                                    <p>{cdscoDetails}</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>
            </>
        );
    }

