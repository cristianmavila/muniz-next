import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Form from "@/components/Form";

const LayoutContact = () => {
  return (
    <div className="bg-white min-h-screen px-4">
      <Header />
      <div className="container relative overflow-hidden mb-16 text-xl text-titleIndice min-h-[calc(100vh-350px)]">
        <h1 className="text-2xl md:text-3xl text-titleIndice font-medium mt-10 mb-9">Contato</h1>
        <div className="flex flex-col gap-3">
          <p>
            <a href="mailto:muniz@jorgemuniz.com.br" title="muniz@jorgemuniz.com.br">
              muniz@jorgemuniz.com.br
            </a>
          </p>
          <p>55 51 99501 1151</p>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutContact;
