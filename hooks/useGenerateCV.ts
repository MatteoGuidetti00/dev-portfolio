import { useState, useCallback } from "react";
import { getProfile } from "@/data/profile";

export const useGenerateCV = (locale: string = "en") => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = useCallback(async (element: HTMLElement) => {
    setIsGenerating(true);

    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const profile = getProfile(locale);
      const filename = `${profile.name.replace(/\s+/g, "_")}_CV.pdf`;

      const opt = {
        margin: [10, 0, 10, 0] as [number, number, number, number], // top, left, bottom, right in mm
        filename,
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
        },
        jsPDF: {
          unit: "mm" as const,
          format: "a4" as const,
          orientation: "portrait" as const,
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] as const },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  }, [locale]);

  return { generatePDF, isGenerating };
};
