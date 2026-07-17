export default function LogoMark({ size = 32 }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size}>
      <circle cx="16" cy="16" r="16" fill="#F97316" />
      <path d="M8 22l1.5-6L6 12h5l2.5-4 2.5 4h5l-3.5 4 1.5 6-5.5-3.5L8 22z" fill="white" />
    </svg>
  );
}
