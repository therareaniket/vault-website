"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import HmBlogArrow from "../HomePage/HmBlogArrow";
import Link from "next/link";

export default function BlogLists() {
    return (
        <>
            <section className="section blogs-listing" style={{ paddingTop: 0 }}>
                <div className="container">
                    <Tabs defaultValue="all">
                        <div className="scrollauto-div overflow-x-auto whitespace-nowrap no-scrollbar">
                            <TabsList className="blog-tablist site-radius-10">
                                <TabsTrigger className="blog-category-select" value="all">All</TabsTrigger>
                                <TabsTrigger className="blog-category-select" value="compliance">Compliance</TabsTrigger>
                                <TabsTrigger className="blog-category-select" value="ai_etmf">AI in eTMF</TabsTrigger>
                                <TabsTrigger className="blog-category-select" value="integrations">Integrations</TabsTrigger>
                                <TabsTrigger className="blog-category-select" value="inspection_rediness">Inspection Rediness</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="all">
                            <div className="blog-list">
                                <Link href="/Blog/understanding-regulatory-compliance-in-clinical-trials" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/BlogListing-img-1.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Compliance</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">Understanding Regulatory Compliance in Clinical Trials: A Complete Guide </p>

                                            <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/Blog/navigating-21-cfr-part-11-in-clinical-data-systems" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/BlogListing-img-2.webp" alt="blog" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Compliance</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5"> Navigating 21 CFR Part 11 in Clinical Data Systems</p>

                                            <p>Learn proven strategies for streamlining site activation, document management.</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/Blog/hippa-clinical-research" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/BlogListing-img-3.webp" alt="blog" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Compliance</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">HIPAA & Clinical Research: Protecting PHI in Trial Settings</p>

                                            <p>Watch how DhatuVault supports every phase of a clinical trial—from design to closeout.</p>
                                        </div>
                                    </div>
                                </Link>

                                {/* Integrations Blogs*/}
                                <Link href="/Blog/integrating-eTMF-with-other-eclinical-systems" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/integrationBlogs/integrations-blog-1.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Integrations with eTMF</p>
                                                </div>

                                                <p>11 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">Why Integrating eTMF with Other eClinical Systems Matters</p>

                                            {/* <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p> */}
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/Blog/how-to-achieve-seamless-ETMF-integration" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/integrationBlogs/integrations-blog-2.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Integrations with eTMF</p>
                                                </div>

                                                <p>11 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">How to Achieve Seamless eTMF Integration — Tips & Best Practices</p>

                                            {/* <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p> */}
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/Blog/real-world-benefits-of-integrated-ETMF" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/integrationBlogs/integrations-blog-3.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Integrations with eTMF</p>
                                                </div>

                                                <p>11 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">Real-World Benefits of Integrated eTMF: Use Cases & Success Stories</p>

                                            {/* <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p> */}
                                        </div>
                                    </div>
                                </Link>


                                {/* Readiness Blogs */}
                                <Link href="/Blog/what-is-inspection-readiness-and-why-ETMF-is-key" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/readinessBlogs/readiness-blog-1.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Inspection Rediness</p>
                                                </div>

                                                <p>11 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">What is Inspection Readiness — and Why eTMF Is Key</p>

                                            {/* <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p> */}
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/Blog/how-to-keep-your-ETMF-inspection-ready" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/readinessBlogs/readiness-blog-2.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Inspection Rediness</p>
                                                </div>

                                                <p>11 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">How to Keep Your eTMF Inspection-Ready — Best Practices</p>

                                            {/* <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p> */}
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/Blog/how-integration-ETMF-good-practices-make-inspection-readiness" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/readinessBlogs/readiness-blog-3.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Inspection Rediness</p>
                                                </div>

                                                <p>11 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">How Integration + eTMF + Good Practices Make Inspection-Readiness</p>

                                            {/* <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p> */}
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </TabsContent>

                        <TabsContent value="compliance">
                            <div className="blog-list">
                                <Link href="/Blog/understanding-regulatory-compliance-in-clinical-trials" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/BlogListing-img-1.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Compliance</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">Understanding Regulatory Compliance in Clinical Trials: A Complete Guide </p>

                                            <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/Blog/navigating-21-cfr-part-11-in-clinical-data-systems" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/BlogListing-img-2.webp" alt="blog" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Compliance</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">Navigating 21 CFR Part 11 in Clinical Data Systems</p>

                                            <p>Learn proven strategies for streamlining site activation, document management.</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/Blog/hippa-clinical-research" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/BlogListing-img-3.webp" alt="blog" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Compliance</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">HIPAA & Clinical Research: Protecting PHI in Trial Settings</p>

                                            <p>Watch how DhatuVault supports every phase of a clinical trial—from design to closeout.</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </TabsContent>

                        <TabsContent value="ai_etmf">
                            <div className="blog-list">
                                {/* <Link href="#" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/blog-3-final.webp" alt="blog" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>AI & Automation</p>
                                                </div>

                                                <p>10 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">How AI Is Redefining eTMF Management in Clinical Trials</p>

                                            <p>Watch how DhatuVault supports every phase of a clinical trial—from design to closeout.</p>
                                        </div>
                                    </div>
                                </Link> */}
                            </div>
                        </TabsContent>

                        <TabsContent value="integrations">
                            <div className="blog-list">
                                <Link href="/Blog/integrating-eTMF-with-other-eclinical-systems" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/integrationBlogs/integrations-blog-1.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Integrations with eTMF</p>
                                                </div>

                                                <p>11 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">Why Integrating eTMF with Other eClinical Systems Matters</p>

                                            {/* <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p> */}
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/Blog/how-to-achieve-seamless-ETMF-integration" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/integrationBlogs/integrations-blog-2.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Integrations with eTMF</p>
                                                </div>

                                                <p>11 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">How to Achieve Seamless eTMF Integration — Tips & Best Practices</p>

                                            {/* <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p> */}
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/Blog/real-world-benefits-of-integrated-ETMF" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/integrationBlogs/integrations-blog-3.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Integrations with eTMF</p>
                                                </div>

                                                <p>11 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">Real-World Benefits of Integrated eTMF: Use Cases & Success Stories</p>

                                            {/* <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </TabsContent>

                        <TabsContent value="inspection_rediness">
                            <div className="blog-list">
                                <Link href="/Blog/what-is-inspection-readiness-and-why-ETMF-is-key" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/readinessBlogs/readiness-blog-1.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Inspection Rediness</p>
                                                </div>

                                                <p>11 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">What is Inspection Readiness — and Why eTMF Is Key</p>

                                            {/* <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p> */}
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/Blog/how-to-keep-your-ETMF-inspection-ready" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/readinessBlogs/readiness-blog-2.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Inspection Rediness</p>
                                                </div>

                                                <p>11 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">How to Keep Your eTMF Inspection-Ready — Best Practices</p>

                                            {/* <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p> */}
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/Blog/how-integration-ETMF-good-practices-make-inspection-readiness" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/readinessBlogs/readiness-blog-3.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Smit Shah</p>

                                                    <p>Inspection Rediness</p>
                                                </div>

                                                <p>11 December 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">How Integration + eTMF + Good Practices Make Inspection-Readiness</p>

                                            {/* <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    );
}