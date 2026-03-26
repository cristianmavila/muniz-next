import SocialLinks from "@/components/SocialLinks";

const Footer = ({ socialLinksClassName }: { socialLinksClassName?: string }) => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className={socialLinksClassName}>
        <SocialLinks />
      </div>
      <div className="p-4 text-white bg-black text-center text-[8px] md:text-xs w-full font-normal flex flex-col items-center justify-center">
        <p>{year} | Jorge Muniz &amp; Crédito | TODOS OS DIREITOS RESERVADOS</p>
        <p>
          <a href="mailto:muniz@jorgemuniz.com.br" title="muniz@jorgemuniz.com.br">
            muniz@jorgemuniz.com.br
          </a>{" "}
          |{" "}
          <a href="tel:55 51 99501 1151" title="55 51 99501 1151">
            55 51 99501 1151
          </a>{" "}
          | Porto Alegre BRASIL
        </p>
      </div>
    </>
  );
};

export default Footer;
