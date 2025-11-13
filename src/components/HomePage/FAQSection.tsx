"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="faq-accordion">
      <Accordion type="single" collapsible className="w-[953px] mx-auto flex flex-col gap-[20px]">

        <AccordionItem value="item-1">
          <AccordionTrigger className="text-rg h6">How do I upload a new study document?</AccordionTrigger>
          <AccordionContent className="text-rg h6">
            To upload, click “Add Document” from the dashboard or within a study folder. Enter metadata such as Document Type, Study Number, and Lifecycle State, then attach your file.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-rg h6">How is CAPA linked to an issue?</AccordionTrigger>
          <AccordionContent className="text-rg h6">
            Each issue can trigger one or more CAPA actions. You can view and track these in the CAPA Tracker tab, where status updates (Open, In Progress, Closed) and evidence are logged.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-rg h6">How do I track quality trends across studies?</AccordionTrigger>
          <AccordionContent className="text-rg h6">
            Go to the Trend Analytics dashboard. Use filters for Study, Severity, or Vendor to view patterns in issues, CAPA frequency, or audit findings through charts and heatmaps.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-rg h6">What happens after I reject a document?</AccordionTrigger>
          <AccordionContent className="text-rg h6">
            Rejected documents return to the Submitter with comments explaining the reason. They can revise and resubmit for review. The action history is automatically captured in the Audit Trail.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-rg h6">How does Vault manage document versions?</AccordionTrigger>
          <AccordionContent className="text-rg h6">
            Each time you upload an updated file, Vault automatically creates a new version while preserving the previous one for traceability.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </section>
  );
}