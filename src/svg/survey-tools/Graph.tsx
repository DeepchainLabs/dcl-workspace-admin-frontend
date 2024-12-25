export const Graph: React.FC = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 42 42"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="21" cy="21" r="15.9155" fill="white" />

    <circle
      cx="21"
      cy="21"
      r="15.9155"
      fill="transparent"
      stroke="#4285F4"
      strokeWidth="6"
      strokeDasharray="70 30"
      transform="rotate(-90 21 21)"
      stroke-dashoffset="0"
    />

    <circle
      cx="21"
      cy="21"
      r="15.9155"
      fill="transparent"
      stroke="#EA4335"
      strokeWidth="6"
      strokeDasharray="30 70"
      transform="rotate(-90 21 21)"
      stroke-dashoffset="-70"
    />
  </svg>
);
