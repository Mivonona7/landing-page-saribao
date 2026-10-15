type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${centered ? " section-heading-centered" : ""}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
