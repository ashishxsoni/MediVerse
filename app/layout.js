import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";

// const inter = Inter({ subsets: ["latin"] });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "MediVerse-Doctors Consultation App",
  description: "Connect with doctors anytime, anywhere",
  icons: {
    icon: "/favicon.png", // or /favicon.ico
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            <Footer />
            {/* <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by Ashish Soni</p>
              </div>
            </footer> */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
