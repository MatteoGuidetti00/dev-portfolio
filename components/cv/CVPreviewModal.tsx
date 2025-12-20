"use client";

import { FC, useRef, useEffect } from "react";
import CVTemplate from "./CVTemplate";
import { useGenerateCV } from "@/hooks/useGenerateCV";
import styles from "./CVPreviewModal.module.scss";

interface CVPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVPreviewModal: FC<CVPreviewModalProps> = ({ isOpen, onClose }) => {
  const cvRef = useRef<HTMLDivElement>(null);
  const { generatePDF, isGenerating } = useGenerateCV();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleDownload = async () => {
    if (cvRef.current) {
      await generatePDF(cvRef.current);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>CV Preview</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.preview}>
          <div className={styles.cvWrapper}>
            <CVTemplate ref={cvRef} />
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelButton} onClick={onClose}>
            Close
          </button>
          <button
            className={styles.downloadButton}
            onClick={handleDownload}
            disabled={isGenerating}
          >
            {isGenerating ? "Generating..." : "Download PDF"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVPreviewModal;
