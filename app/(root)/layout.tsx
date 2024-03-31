import Header from "@/components/header";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    
    <div className="bg-white dark:bg-dark-blue xs:py-8 md:py-20 w-full h-full transition relative">
      {/* BACKGROUND PATTERN  */}
      <div
        className="w-full h-full absolute top-0 left-0 bg-transparent"
        style={{
          backgroundImage:
            "url('/assets/images/pattern-background-desktop-light.svg')"
        }}
      />

      <MaxWidthWrapper className="flex justify-end mb-20 xs:px-10 md:px-0">
        <Header />
      </MaxWidthWrapper>

      {children}
    </div>
  );
};

export default RootLayout;
