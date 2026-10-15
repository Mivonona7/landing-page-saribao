"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function DemoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const screenshot = siteConfig.screenshots[activeIndex];

  function move(step: number) {
    setActiveIndex(
      (current) =>
        (current + step + siteConfig.screenshots.length) %
        siteConfig.screenshots.length,
    );
  }

  function closeDialog() {
    setModalOpen(false);
    if (dialogRef.current?.open) dialogRef.current.close();
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (modalOpen && !dialog.open) dialog.showModal();
    if (!modalOpen && dialog.open) dialog.close();
  }, [modalOpen]);

  function handleDialogKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDialog();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
  }

  return (
    <div className="demo-gallery">
      <div className="demo-phone-wrap">
        <div className="demo-phone">
          <div className="phone-camera" aria-hidden="true" />
          <Image
            alt={screenshot.alt}
            className="demo-phone-image"
            height={1600}
            priority
            sizes="(max-width: 700px) 72vw, 300px"
            src={screenshot.src}
            width={720}
          />
        </div>
        <div aria-hidden="true" className="demo-float-card">
          <span className="demo-float-icon">✓</span>
          <span><strong>Vos opérations</strong><br />à portée de main</span>
        </div>
      </div>
      <div className="demo-controls">
        <div className="demo-step-controls">
          <button
            aria-label="Capture précédente"
            className="icon-button"
            onClick={() => move(-1)}
            type="button"
          >
            <ArrowLeft size={18} />
          </button>
          <span aria-live="polite" className="demo-counter">
            <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
            <span> / {String(siteConfig.screenshots.length).padStart(2, "0")}</span>
          </span>
          <button
            aria-label="Capture suivante"
            className="icon-button"
            onClick={() => move(1)}
            type="button"
          >
            <ArrowRight size={18} />
          </button>
        </div>
        <div aria-label="Choisir une capture" className="demo-tabs" role="group">
          {siteConfig.screenshots.map((item, index) => (
            <button
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`Afficher la capture : ${item.label}`}
              className={`demo-tab${index === activeIndex ? " is-active" : ""}`}
              key={item.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
        <button
          className="demo-expand"
          onClick={() => setModalOpen(true)}
          type="button"
        >
          <Expand aria-hidden="true" size={15} /> Agrandir la capture
        </button>
      </div>
      <dialog
        aria-label={`Capture d’écran Saribao : ${screenshot.label}`}
        className="demo-dialog"
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        onKeyDown={handleDialogKeyDown}
        onClose={() => setModalOpen(false)}
        ref={dialogRef}
      >
        <div className="dialog-toolbar">
          <span aria-live="polite">{screenshot.label} · {activeIndex + 1}/{siteConfig.screenshots.length}</span>
          <button
            aria-label="Fermer la fenêtre de démonstration"
            className="icon-button dialog-close"
            onClick={closeDialog}
            type="button"
          >
            <X size={20} />
          </button>
        </div>
        <div className="dialog-image-wrap">
          <Image
            alt={screenshot.alt}
            className="dialog-image"
            height={1600}
            sizes="(max-width: 760px) 90vw, 440px"
            src={screenshot.src}
            width={720}
          />
        </div>
        <div className="dialog-controls">
          <button className="icon-button" onClick={() => move(-1)} type="button">
            <ArrowLeft aria-hidden="true" size={18} /><span>Précédente</span>
          </button>
          <button className="icon-button" onClick={() => move(1)} type="button">
            <span>Suivante</span><ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </dialog>
    </div>
  );
}
