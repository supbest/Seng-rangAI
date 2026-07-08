import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "error": "#ba1a1a",
        "on-primary-container": "#fefcff",
        "on-background": "#1a1c1c",
        "primary-fixed-dim": "#adc6ff",
        "on-surface-variant": "#414751",
        "tertiary-container": "#737479",
        "on-tertiary-container": "#fdfcff",
        "on-secondary-container": "#636264",
        "on-tertiary-fixed-variant": "#45474b",
        "on-secondary": "#ffffff",
        "inverse-on-surface": "#f1f0f5",
        "surface-tint": "#005bc1",
        "on-secondary-fixed": "#1b1b1d",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#e2dfe1",
        "on-primary-fixed": "#001a41",
        "inverse-surface": "#2f3034",
        "surface-dim": "#dad9df",
        "outline": "#717786",
        "primary-container": "#0070eb",
        "on-tertiary": "#ffffff",
        "on-tertiary-fixed": "#1a1c1f",
        "tertiary-fixed-dim": "#c6c6cb",
        "inverse-primary": "#adc6ff",
        "surface-container-highest": "#e3e2e7",
        "on-primary-fixed-variant": "#004493",
        "error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#474649",
        "surface-container": "#eeeeee",
        "on-error-container": "#93000a",
        "primary-fixed": "#d8e2ff",
        "surface-container-low": "#f4f3f8",
        "primary": "#4a90e2",
        "surface": "#f9f9f9",
        "surface-container-high": "#e9e7ed",
        "on-primary": "#ffffff",
        "surface-bright": "#f9f9f9",
        "on-surface": "#1a1c1c",
        "on-error": "#ffffff",
        "tertiary": "#5a5c60",
        "secondary-fixed-dim": "#c8c6c8",
        "background": "#f9f9f9",
        "secondary": "#585f66",
        "outline-variant": "#c1c7d3",
        "tertiary-fixed": "#e2e2e7",
        "secondary-fixed": "#e4e2e4",
        "surface-variant": "#e3e2e7"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "full": "9999px"
      },
      spacing: {
        "margin-desktop": "64px",
        "base": "8px",
        "xs": "4px",
        "lg": "48px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "sm": "12px",
        "md": "24px",
        "xl": "80px"
      },
      fontFamily: {
        "headline-lg-mobile": ["Manrope"],
        "label-sm": ["Inter"],
        "body-md": ["Inter"],
        "display-lg": ["Manrope"],
        "body-lg": ["Inter"],
        "title-md": ["Manrope"],
        "label-md": ["Inter"],
        "headline-lg": ["Manrope"]
      },
      fontSize: {
        "headline-lg-mobile": [
          "24px",
          {
            "lineHeight": "32px",
            "fontWeight": "600"
          }
        ],
        "label-sm": [
          "12px",
          {
            "lineHeight": "16px",
            "fontWeight": "600"
          }
        ],
        "body-md": [
          "16px",
          {
            "lineHeight": "24px",
            "fontWeight": "400"
          }
        ],
        "display-lg": [
          "48px",
          {
            "lineHeight": "56px",
            "letterSpacing": "-0.02em",
            "fontWeight": "700"
          }
        ],
        "body-lg": [
          "18px",
          {
            "lineHeight": "28px",
            "fontWeight": "400"
          }
        ],
        "title-md": [
          "20px",
          {
            "lineHeight": "28px",
            "fontWeight": "600"
          }
        ],
        "label-md": [
          "14px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0.01em",
            "fontWeight": "500"
          }
        ],
        "headline-lg": [
          "32px",
          {
            "lineHeight": "40px",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ]
      }
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
