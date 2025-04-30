export default function ArrowRight({ color = "#e0e5eb" }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.58754 3.58748C5.81535 3.35967 6.18469 3.35967 6.4125 3.58748L10.4125 7.58748C10.6403 7.81529 10.6403 8.18463 10.4125 8.41244L6.4125 12.4124C6.18469 12.6402 5.81535 12.6402 5.58754 12.4124C5.35974 12.1846 5.35974 11.8153 5.58754 11.5875L9.17506 7.99996L5.58754 4.41244C5.35974 4.18463 5.35974 3.81529 5.58754 3.58748Z"
        fill={color}
      />
    </svg>
  );
}
