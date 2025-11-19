"use client"

export default function ESignProcess() { 
    return(
        <>
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="esign-headings">
                        <h2 className="h3">eSign Ceremony for Secure and Effortless Approvals</h2>

                        <p className="h6 text-rg">Streamline document signing with compliant, traceable electronic workflows that ensure authenticity, audit readiness, and regulatory confidence.</p>
                    </div>

                    <div className="esign-process-list">
                        <div className="esign-process site-radius-20" style={{ backgroundColor: "var(--blue-light)", }}>
                            <h3 className="h5">Signature request initiated</h3>
                        </div>

                        <div className="esign-process site-radius-20" style={{ backgroundColor: "var(--red-light)", }}>
                            <h3 className="h5">Identity verified</h3>
                        </div>
                        <div className="esign-process site-radius-20" style={{ backgroundColor: "var(--green-light)", }}>
                            <h3 className="h5">Signature applied with timestamp</h3>
                        </div>
                        <div className="esign-process site-radius-20" style={{ backgroundColor: "var(--yellow-light)", }}>
                            <h3 className="h5">Audit trail logged</h3>
                        </div>
                        <div className="esign-process site-radius-20" style={{ backgroundColor: "var(--purple-light)", }}>
                            <h3 className="h5">Document locked</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}