const BULLET = /^\s*(?:[-*•]|\d+[.)])\s+/;

/**
 * Renders a free-text Job field exactly as staff wrote it in the admin Job
 * editor: a block whose lines are all bullet-style becomes a list, anything else
 * becomes paragraphs (blank-line separated, single line breaks preserved).
 * Plain text only — never HTML.
 */
export function JobContent({ text }: { text: string }) {
  const blocks = text.split(/\n\s*\n/).map(block => block.trim()).filter(Boolean);

  return (
    <>
      {blocks.map((block, index) => {
        const lines = block.split('\n').map(line => line.trim()).filter(Boolean);
        if (lines.length > 1 && lines.every(line => BULLET.test(line))) {
          return <ul key={index}>{lines.map((line, lineIndex) => <li key={lineIndex}>{line.replace(BULLET, '')}</li>)}</ul>;
        }
        return <p key={index} className="whitespace-pre-line">{block}</p>;
      })}
    </>
  );
}
