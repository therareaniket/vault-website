"use client"
import React, { useState, useEffect } from "react";

const ROLES = [
    { id: 1, bgClass: "cro-bg-img", title: "CROs", subTitle: "Collaborate seamlessly with sponsors and sites while maintaining high-quality documentation." },
    { id: 2, bgClass: "labs-bg-img", title: "Labs", subTitle: "Transmit lab results and sensitive data through secure, encrypted pipelines at every stage, and drive operations." },
    { id: 3, bgClass: "sites-bg-img", title: "Sites", subTitle: "Easily upload essential documents, reduce back-and-forth, and accelerate approval timelines." }
];
const ACTIVE_ROLE = { id: 0, bgClass: "sponsor-bg-img", title: "Sponsor", subTitle: "Gain full visibility into trial progress, ensure audit readiness at every stage, and drive operations." };

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

export default function AboutRoles() {

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
                        <h2 className="h3">Built for Every Role</h2>

                        <p className="h6 text-rg">From sponsors to sites, CROs to labs—Vault empowers every stakeholder in the clinical trial ecosystem</p>
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