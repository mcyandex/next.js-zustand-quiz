import Header from "@/components/molecules/header";
import ImageBackground from "@/components/atoms/image-background";
import MaxWidthWrapper from "@/components/atoms/max-width-wrapper";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-dark-blue xs:py-10 md:py-12 w-full h-full min-h-screen transition relative">
      {/* BACKGROUND PATTERN  */}
      <ImageBackground />
      <MaxWidthWrapper className="flex justify-end xs:mb-10 lg:mb-2 xs:px-5 md:px-0">
        <Header />
      </MaxWidthWrapper>

      <main className="h-full xl:h-auto flex items-center justify-center xl:mt-16 2xl:mt-32">{children}</main>
    </div>
  );
};

export default RootLayout;
