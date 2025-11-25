"use client"

type ESignProps = {
    esignCeremonyTitle: string;
    esignCeremonySubtitle: string;
    esignStep1: string;
    esignStep2: string;
    esignStep3: string;
    esignStep4: string;
    esignStep5: string;
}

export default function ESignProcess({esignCeremonyTitle, esignCeremonySubtitle, esignStep1, esignStep2, esignStep3, esignStep4, esignStep5}:ESignProps) { 
    return(
        <>
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="esign-headings">
                        <h2 className="h3">{esignCeremonyTitle}</h2>

                        <p className="h6 text-rg">{esignCeremonySubtitle}</p>
                    </div>

                    <div className="esign-process-list">
                        <div className="esign-process site-radius-20" style={{ backgroundColor: "var(--blue-light)", }}>
                            <h3 className="h5">{esignStep1}</h3>
                        </div>

                        <div className="esign-process site-radius-20" style={{ backgroundColor: "var(--red-light)", }}>
                            <h3 className="h5">{esignStep2}</h3>
                        </div>
                        <div className="esign-process site-radius-20" style={{ backgroundColor: "var(--green-light)", }}>
                            <h3 className="h5">{esignStep3}</h3>
                        </div>
                        <div className="esign-process site-radius-20" style={{ backgroundColor: "var(--yellow-light)", }}>
                            <h3 className="h5">{esignStep4}</h3>
                        </div>
                        <div className="esign-process site-radius-20" style={{ backgroundColor: "var(--purple-light)", }}>
                            <h3 className="h5">{esignStep5}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}