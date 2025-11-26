"use client"
import React, { useState, useEffect } from "react";

type AboutRolesProps = {
    rolesTitle: string;
    rolesSubtitle: string;
}

const ROLES = [
    { id: 1, bgClass: "cro-bg-img", title: "CROs", subTitle: "As a Clinical Research Organization, your success depends on flawless collaboration with sponsors, research sites, and regulatory stakeholders. DhatuVault empowers CRO teams with unified workflows designed to simplify document management, streamline site communications, and accelerate trial execution." },
    { id: 2, bgClass: "labs-bg-img", title: "Labs", subTitle: "Clinical laboratories play a crucial role in the success of every clinical trial. With DhatuVault, lab teams can securely integrate critical test data directly into trial management systems—all while ensuring the highest standards of regulatory compliance." },
    { id: 3, bgClass: "sites-bg-img", title: "Sites", subTitle: "Sites are at the frontline of clinical trials, responsible for patient recruitment, retention, and protocol adherence. DhatuVault equips site staff with tailored workflows for efficient patient tracking, seamless data entry, and smooth study operations—all from an intuitive, secure platform." }
];
const ACTIVE_ROLE = { id: 0, bgClass: "sponsor-bg-img", title: "Sponsor", subTitle: "Sponsors drive the vision and execution of clinical trials across the globe. DhatuVault provides sponsors with a centralized platform for monitoring complex studies, ensuring regulatory compliance, and making data-driven decisions in real time." };

function useIsMobile(maxWidth = 400) {
    const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= maxWidth : false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= maxWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [maxWidth]);

    return isMobile;
}

export default function AboutRoles({rolesTitle, rolesSubtitle}: AboutRolesProps) {

    const [activeRole, setActiveRole] = useState(ACTIVE_ROLE);
    const [clickRoles, setClickRoles] = useState(ROLES);
    const isMobile = useIsMobile(400);

    const handleRoleClick = (clickedRoleId: number) => {
        const clickedRole = clickRoles.find(role => role.id === clickedRoleId);
        if (clickedRole) {
            setClickRoles([
                ...clickRoles.filter(role => role.id !== clickedRoleId),
                activeRole
            ]);
            setActiveRole(clickedRole);
        }
    };

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="abt-roles-headings">
                        <h2 className="h3">{rolesTitle}</h2>

                        <p className="h6 text-rg">{rolesSubtitle}</p>
                    </div>

                    <div className="abt-user-roles">
                    <div className="abt-roles-wrapper text-white">
                        <div className="hgltd-role">
                            <div className={`role active-role site-radius-20 ${activeRole.bgClass}`}>
                                <div className="role-content btn-bg site-radius-20">
                                    <h3 className="h4 text-rg">{activeRole.title}</h3>

                                    <p className="h5 text-rg" style={{ marginBottom: 0 }}>{activeRole.subTitle}</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="click-roles">
                            {clickRoles.map(role => (
                                <div key={role.id} className={`role site-radius-20 ${role.bgClass}`} onClick={() => handleRoleClick(role.id)} style={{ cursor: "pointer" }}>
                                <div className="role-content btn-bg">
                                    <p className="">{role.title}</p>

                                    {isMobile && (
                                        <p className="h5 text-rg" style={{ marginBottom: 0 }}>{role.subTitle}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                        </div> */}

                        <div className="click-roles">
                            {clickRoles.map(role => (
                                <div
                                    key={role.id}
                                    className={`role site-radius-20 ${role.bgClass}`}
                                    {...(!isMobile ? { onClick: () => handleRoleClick(role.id) } : {})}
                                    style={{
                                        cursor: isMobile ? "default" : "pointer"
                                    }}
                                >
                                    <div className="role-content btn-bg">
                                        <p className="">{role.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* I AM DONE */}

                        <div className="hgltd-role i-am-hidden-role">
                            <div className={`role active-role site-radius-20 ${activeRole.bgClass}`}>
                                <div className="role-content btn-bg site-radius-20">
                                    <h3 className="h4 text-rg">{activeRole.title}</h3>

                                    <p className="h5 text-rg" style={{ marginBottom: 0 }}>{activeRole.subTitle}</p>
                                </div>
                            </div>
                        </div>

                        <div className="click-roles ">
                            {clickRoles.map(role => (
                                <div
                                    key={role.id}
                                    className={`role site-radius-20 ${role.bgClass} i-am-hidden-role`}
                                    {...(!isMobile ? { onClick: () => handleRoleClick(role.id) } : {})}
                                    style={{
                                        cursor: isMobile ? "default" : "pointer"
                                    }}
                                >
                                    <div className="role-content btn-bg">
                                        <p className="">{role.title}</p>
                                        {isMobile && (
                                            <p className="h5 text-rg" style={{ marginBottom: 0 }}>{role.subTitle}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}