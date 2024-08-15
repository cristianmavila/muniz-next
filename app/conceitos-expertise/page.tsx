import Footer from "@/components/Footer";
import Header from "@/components/Header";

const LayoutConceitos = () => {
  return (
    <div className="bg-white min-h-screen px-4">
      <Header />
      <div className="xl:container mx-auto relative overflow-hidden mb-16">
        <h1 className="text-2xl md:text-3xl text-titleIndice font-medium mt-10 mb-5">
          Conceitos & Expertise
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutConceitos;
