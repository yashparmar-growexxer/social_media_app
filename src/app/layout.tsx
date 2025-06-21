import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "./globals.css";

// max-w-screen Variants:
// max-w-screen-sm - Sets max-width to 640px (Tailwind's sm breakpoint)
// max-w-screen-md - Sets max-width to 768px (Tailwind's md breakpoint)
// max-w-screen-lg - Sets max-width to 1024px (Tailwind's lg breakpoint)
// max-w-screen-xl - Sets max-width to 1280px (Tailwind's xl breakpoint)
// max-w-screen-2xl - Sets max-width to 1536px (Tailwind's 2xl breakpoint)


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body>
    <div className="flex  items-strech justify-between max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg xxl:max-w-screen-xxl mx-auto">
      <div className="px-2 sm:px-6 xxl:px-8  xl:px-6 lg:px-6  h-screen"><LeftBar/></div>
      <div className=" flex-1  border-x-[1px] ">{children}</div>
      <div className="hidden  flex-1 xxl:flex xl:flex lg:flex md:flex  ml-4 lg:ml-8 xl:ml-8 2xl:ml-8" ><RightBar/></div>
    </div>
  </body>
    </html>
  );
}
