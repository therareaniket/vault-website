"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SecurityAssurance() {
    return(
        <>
            <section className="section">
                <div className="container">
                    <div className="assrnc-headings">
                        <h2 className="h3">Your Assurance of Global Compliance and Control</h2>

                        <p className="h6 text-rg">DhatuVault continuously aligns with evolving FDA, EMA, and GxP frameworks to safeguard your digital records through automated validation, governance, and traceability.</p>
                    </div>

                    <div className="-lists">
                        <Tabs defaultValue="fda-21-cfr" className="assrnc-compli-tabs-wrapper">
                            <TabsList className="assrnc-compli-tablist">
                                <TabsTrigger value="fda-21-cfr" className="assrnc-compli-tab">
                                    <p className="h5"><i className="icon-compliance"></i>FDA 21 CFR Part 11</p>
                                </TabsTrigger>

                                <TabsTrigger value="eu-annex-11" className="assrnc-compli-tab">
                                    <p className="h5"><i className="icon-compliance"></i> EU Annex 11 </p>
                                </TabsTrigger>

                                <TabsTrigger value="hippa" className="assrnc-compli-tab">
                                    <p className="h5"><i className="icon-compliance"></i> HIPAA </p>
                                </TabsTrigger>

                                <TabsTrigger value="gdpr" className="assrnc-compli-tab">
                                    <p className="h5"><i className="icon-compliance"></i> GDPR </p>
                                </TabsTrigger>

                                <TabsTrigger value="cdsco" className="assrnc-compli-tab">
                                    <p className="h5"><i className="icon-compliance"></i> CDSCO </p>
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="fda-21-cfr">fda-21-cfr</TabsContent>
                            <TabsContent value="eu-annex-11">eu-annex-11</TabsContent>
                            <TabsContent value="hippa">hippa</TabsContent>
                            <TabsContent value="gdpr">gdpr</TabsContent>
                            <TabsContent value="cdsco">cdsco</TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    );
}