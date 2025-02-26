const copyToClipboard = (
  e: MouseEvent & { currentTarget: HTMLButtonElement; target: Element },
) => {
  if (typeof document === "undefined") return;
  const btn = e.target.closest("button") as HTMLButtonElement;
  const clip = btn.dataset.clip;

  if (clip?.length) {
    navigator.clipboard.writeText(clip);
    alert(`Copied Icon Component to clipboard:\n${clip}`);
  }
};

export default copyToClipboard;
