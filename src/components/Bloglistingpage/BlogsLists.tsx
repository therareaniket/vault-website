"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import HmBlogArrow from "../HomePage/HmBlogArrow";
import Link from "next/link";

export default function BlogLists() {
    return(
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
                                <Link href="/Blog" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/blog-1-final.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Karan Bhatt</p>

                                                    <p>Data Visualization</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">Integrating DhatuVault with EDC, CTMS, and eCOA Systems</p>

                                            <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p>
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link href="#" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/blog-2-final.webp" alt="blog" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Ishita Rao</p>

                                                    <p>Compliance & Security</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">5 Ways Vault CTMS Reduces Study Startup Time</p>

                                            <p>Learn proven strategies for streamlining site activation, document management.</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="#" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/blog-3-final.webp" alt="blog" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Dev Malhotra</p>

                                                    <p>AI & Automation</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">From Protocol to Archive: End-to-End Trial Oversight in Action</p>

                                            <p>Watch how DhatuVault supports every phase of a clinical trial—from design to closeout.</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="#" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/blog-4-final.webp" alt="blog" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Amit Sinha</p>

                                                    <p>Data Visualization</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">Smart TMF Management: A Day in the Life with DhatuVault</p>

                                            <p>Follow a clinical operations lead through a typical day using DhatuVault’s TMF tools.</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </TabsContent>

                        <TabsContent value="compliance">
                            <div className="blog-list">
                                <Link href="#" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/blog-2-final.webp" alt="blog" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Ishita Rao</p>

                                                    <p>Compliance & Security</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">5 Ways Vault CTMS Reduces Study Startup Time</p>

                                            <p>Learn proven strategies for streamlining site activation, document management.</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </TabsContent>

                        <TabsContent value="ai_etmf">
                            <div className="blog-list">
                                <Link href="#" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/blog-3-final.webp" alt="blog" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Dev Malhotra</p>

                                                    <p>AI & Automation</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">From Protocol to Archive: End-to-End Trial Oversight in Action</p>

                                            <p>Watch how DhatuVault supports every phase of a clinical trial—from design to closeout.</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </TabsContent>

                        <TabsContent value="integrations">
                            <div className="blog-list">
                                <Link href="/Blog" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/blog-1-final.webp" alt="blog-1" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Karan Bhatt</p>

                                                    <p>Data Visualization</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">Integrating DhatuVault with EDC, CTMS, and eCOA Systems</p>

                                            <p>Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </TabsContent>

                        <TabsContent value="inspection_rediness">
                            <div className="blog-list">
                                <Link href="#" className="block">
                                    <div className="the-blog">
                                        <div className="blog-image">
                                            <Image src="/images/blogspage/blog-4-final.webp" alt="blog" width={493} height={237} className="site-radius-10"></Image>

                                            <div className="blog-author btn-bg">
                                                <div className="name-designation">
                                                    <p>Amit Sinha</p>

                                                    <p>Data Visualization</p>
                                                </div>

                                                <p>27 October 2025</p>
                                            </div>

                                            <HmBlogArrow />
                                        </div>

                                        <div className="blog-glimps-cont">
                                            <p className="h5">Smart TMF Management: A Day in the Life with DhatuVault</p>

                                            <p>Follow a clinical operations lead through a typical day using DhatuVault’s TMF tools.</p>
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