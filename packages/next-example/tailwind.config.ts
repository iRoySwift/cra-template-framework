import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(circle,  #d4d4d4 1%,transparent 1%)",
                // "radial-gradient(transparent 1%, var(--tw-gradient-stops) 1%)",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                "tw-priamry": "hsl(var(--primary))",
                "tw-info": "hsl(var(--info))",
                "tw-error": "var(--error)",
                "tw-success": "var(--success)",
                "tw-warning": "var(--warning)",
                "tw-bkg": "var(--bkg)",
                "tw-bkg-hover": "var(--bkg-hover)",
                "tw-bkg-hover-2": "var(--bkg-hover-2)",
                // "th-bkg-active": "var(--bkg-active)",
                "tw-border": "var(--border)",
                "tw-fgd-1": "var(--fgd-1)",
                "tw-fgd-2": "var(--fgd-2)",
                "tw-fgd-3": "var(--fgd-3)",
                "tw-link-active": "var(--link-active)",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                ripple: {
                    "0%": {
                        transform: "scale(0)",
                        opacity: "0.1",
                    },
                    "100%": {
                        transform: "scale(10)",
                        opacity: "0.3",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                ripple: "ripple 550ms ease-in-out forwards",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
