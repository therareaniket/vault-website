import Image from "next/image"
import Link from "next/link"
import HmBlogArrow from "@/components/HomePage/HmBlogArrow"
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const BlogDetailPage = () => {
    return (
        <div className="blog-detail-main">
            <div className="container">

                <div className="blog-breadcrumb-wrap">
                    <Breadcrumb>
                        <BreadcrumbList>

                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    How AI-Powered Vault Technology is Transforming Clinical Trial Management in 2025
                                </BreadcrumbPage>
                            </BreadcrumbItem>

                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="blog-section-detail-wrap">

                    <div className='blog-section-dtae-text'>
                        <p className='text-14 text-rg'>23 October 2025</p>

                        <p className='link-padding text-14 text-rg blog-btn'>Data Visualization</p>
                    </div>
                    <h1 className='h3 text-md'>How AI-Powered Vault Technology is Transforming Clinical Trial Management in 2025</h1>

                    <p className='h6 text-rg'>Discover how Vault intelligent automation and AI agents are revolutionizing study oversight, risk-based monitoring, and regulatory compliance across global trials.</p>
                </div>
                <div className='blog-detail-image-wrap'>

                    <Image className="blog-detail-hero-img site-radius-10" src="/images/blogDetailPage/blog-detail-hero-img.webp" alt="svg-1" width={1670} height={800} />
                </div>

                <div className="blog-detail-questions-section">
                    <div className="blg-detail-icons">
                        <Image className="" src="/images/blogDetailPage/facebookIcon.svg" alt="svg-1" width={28} height={28} />

                        <Image className="" src="/images/blogDetailPage/instagramIcon.svg" alt="svg-1" width={28} height={28} />

                        <Image className="" src="/images/blogDetailPage/twitterIcon.svg" alt="svg-1" width={28} height={28} />
                    </div>

                    <div className="blog-detail-questions">
                        <div>
                            <h2 className='h6 text-sb'>How does AI automation improve study oversight?</h2>

                            <p className='text-18 text-rg blog-detail-para-padding'>AI agents within Vault systems monitor trial data in real time, flagging anomalies, protocol deviations, and compliance risks—allowing sponsors and CROs to act proactively rather than reactively.</p>
                        </div>

                        <div>
                            <h2 className='h6 text-sb'>Can AI reduce the burden of risk-based monitoring?</h2>

                            <p className='text-18 text-rg blog-detail-para-padding'>Yes. AI models analyze historical and real-time data to identify high-risk sites or data points, enabling targeted monitoring and reducing unnecessary site visits and manual reviews.</p>
                        </div>

                        <div>
                            <h2 className='h6 text-sb'>What makes AI-powered Vaults ideal for global regulatory compliance?</h2>

                            <p className='text-18 text-rg blog-detail-para-padding'>These systems automatically align documentation and workflows with regional regulations (e.g., FDA, EMA, PMDA), generate audit-ready reports, and maintain full traceability through intelligent version control and timestamped logs.</p>
                        </div>

                        <div>
                            <h2 className='h6 text-sb'>AI Adoption in Clinical Trials Surges in 2025</h2>

                            <p className='text-18 text-rg blog-detail-para-padding'>AI adoption in clinical trials has surged dramatically in 2025, with over 75% of new studies now integrating AI technologies—up from just 30% in 2022, according to CTDSU.</p>
                        </div>
                    </div>
                </div>

                {/* <div className="blog-detail-cards section">
                    <h2 className="h3 text-md">Read What’s Next</h2>
                    <div className="blog-detail-section-cards">

                        <div className="hm-blog-card hm-blog-card-2 blog-detail-section-card-1">
                            <div className="hm-blog-card-text hm-blog-card-text-2">
                                <div className="hm-blog-text-wrap">
                                    <h3 className="h5 text-md">
                                        5 Ways DhatuVault CTMS Reduces Study Time
                                    </h3>
                                    <HmBlogArrow />
                                </div>
                                <p className="text-18 text-rg">
                                    Learn proven strategies for streamlining site activation, document management.
                                </p>
                            </div>

                            <div className="hm-blogs-links">
                                <Link href="#" className="link-padding text-rg text-14">
                                    Compliance & Security
                                </Link>
                                <p className="text-14 text-rg text-grey">27 October 2025</p>
                            </div>

                            <Image
                                className="home-blog-img-2 site-radius-20"
                                src="/images/HomePage/hm-blog-img-2.webp"
                                alt="CTMS Study Startup"
                                width={493}
                                height={237}
                            />
                        </div>

                        <div className="hm-blog-card hm-blog-card-3 blog-detail-section-card-2">
                            <div className="hm-blog-card-text hm-blog-card-text-3">
                                <div className="hm-blog-text-wrap">
                                    <h3 className="h5 text-md">
                                        The Complete Guide to DhatuVault Integration
                                    </h3>
                                    <HmBlogArrow />
                                </div>
                                <p className="text-18 text-rg">
                                    Explore how Vault unified integration hub connects EDC, eTMF, CRM.
                                </p>
                            </div>

                            <div className="hm-blogs-links">
                                <Link href="#" className="link-padding text-rg text-14">
                                    AI & Automation
                                </Link>
                                <p className="text-14 text-rg text-grey">14 September 2025</p>
                            </div>

                            <Image
                                className="home-blog-img-3 site-radius-20"
                                src="/images/HomePage/hm-blog-img-3.webp"
                                alt="Integration"
                                width={493}
                                height={237}
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default BlogDetailPage