export function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="section-title">
      <span className="section-number">{number}.</span>
      {title}
      <div className="section-divider"></div>
    </h2>
  )
}
