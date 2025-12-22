import Image from "next/image"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"

const AIinETMF_01 = () => {
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
                                <BreadcrumbLink href="/Blogs">Blogs</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    How AI is Transforming eTMF for Modern Clinical Trials
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="blog-section-detail-wrap">
                    <div className='blog-section-dtae-text'>
                        <p className='text-14 text-rg'>20 December 2025</p>
                        <p className='link-padding text-14 text-rg blog-btn'>AI in eTMF</p>
                    </div>

                    <h1 className='h3 text-md'>How AI is Transforming eTMF for Modern Clinical Trials</h1>
                    <p className='text-18 text-rg'>The Electronic Trial Master File (eTMF) is the digital backbone of clinical documentation, replacing traditional paper-based systems and enabling sponsors and CROs to manage all essential trial documents in a compliant, secure repository.</p>
                </div>

                <div className='blog-detail-image-wrap'>
                    <Image className="blog-detail-hero-img site-radius-10" src="/images/aiEtmfBlogs/ai-etmf-blog-1.webp" alt="svg-1" width={1670} height={800} />
                </div>

                <div className="blog-detail-questions-section">
                    <div className="blg-detail-icons">
                        <Image src="/images/blogDetailPage/facebookIcon.svg" alt="svg-1" width={28} height={28} />
                        <Image src="/images/blogDetailPage/instagramIcon.svg" alt="svg-1" width={28} height={28} />
                        <Image src="/images/blogDetailPage/twitterIcon.svg" alt="svg-1" width={28} height={28} />
                    </div>

                    <div className="blog-detail-questions">
                        <div className="blog-inner-section-padding">
                            <h2 className='h6 text-sb'>AI's Role in eTMF</h2>

                            <p className='text-18 text-rg'>Artificial Intelligence (AI) is reshaping how eTMF systems operate by automating previously manual and error-prone tasks:</p>

                            <ul>
                                <li className='text-18 text-rg li-padding-top'><b>Auto-classification & indexing:</b> AI algorithms can identify document types and place them in the correct folders, drastically reducing manual filing time.</li>
                                <li className='text-18 text-rg li-padding-top'><b>Metadata extraction:</b> With AI, key data such as dates, study site identifiers, and document versions are automatically extracted and tagged for quick retrieval.</li>
                            </ul>
                        </div>

                        <div className="blog-inner-section-padding">
                            <h2 className='h6 text-sb'>Benefits for Trial Teams</h2>

                            <ul>
                                <li className='text-18 text-rg li-padding-top'><b>Operational efficiency:</b> Automating document workflows improves productivity and shortens timelines.</li>
                                <li className='text-18 text-rg li-padding-top'><b>Metadata extraction:</b> AI-driven validation ensures inspection-ready documentation by checking signatures, dates, and completeness.</li>
                                <li className='text-18 text-rg li-padding-top'><b>Reduced errors:</b> Machine learning helps avoid misfilings — a common audit risk.</li>
                            </ul>
                        </div>

                        <div className="blog-inner-section-padding">
                            <h2 className='h6 text-sb'>Conclusion</h2>

                            <p>AI adds speed, accuracy, and compliance assurance to eTMF systems — enabling trial teams to focus on scientific outcomes instead of paperwork.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AIinETMF_01