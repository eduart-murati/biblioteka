// SearchBar.tsx (input me ikonë dhe clear button)
import { useRef } from "react";
import type { ChangeEvent } from "react";

interface Props {
  searchText: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit?: (value: string) => void;
}

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20px"
    height="20px"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#6B7280",
      pointerEvents: "none",
    }}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ClearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16px"
    height="16px"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function SearchBar({ searchText, onSearchChange, onSearchSubmit }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref.current && onSearchSubmit) onSearchSubmit(ref.current.value);
  };

  const handleClear = () => {
    onSearchChange("");
    if (onSearchSubmit) onSearchSubmit("");
    ref.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", position: "relative", marginBottom: "1rem" }}>
      <SearchIcon />
      <input
        ref={ref}
        value={searchText ?? ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
        placeholder="Kërko libra..."
        style={{
          width: "100%",
          borderRadius: "999px",
          padding: "10px 40px 10px 40px",
          border: "1px solid #D1D5DB",
          backgroundColor: "#F3F4F6",
          color: "#1F2937",
          fontSize: "1rem",
          boxSizing: "border-box",
        }}
      />
      {searchText && (
        <button
          type="button"
          onClick={handleClear}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#6B7280",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ClearIcon />
        </button>
      )}
    </form>
  );
}
