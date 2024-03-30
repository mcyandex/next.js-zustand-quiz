import Header from "@/components/header";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-white dark:bg-dark-blue py-20 w-full h-full transition">
      <MaxWidthWrapper className="flex justify-end">
        <Header />
      </MaxWidthWrapper>

      {children}
    </div>
  );
};

export default RootLayout;
