import { Inter, PT_Sans_Caption } from "next/font/google";
import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const ptSansCation = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-pt-sans-caption",
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.className} ${ptSansCation.className} relative flex min-h-screen font-inter flex-col bg-gray-700`}
    >
      <Header />
      <main className="flex-1 flex flex-col mt-10 mb-12">{children}</main>
      <Footer />
    </div>
  );
};
