import SocialLinks from "@/components/SocialLinks";

const Footer = ({ socialLinksClassName }: { socialLinksClassName?: string }) => {
  return (
    <>
      <div className={socialLinksClassName}>
        <SocialLinks />
      </div>
      <div className="p-4 mt-4 text-white bg-black text-center text-[8px] md:text-base w-full">
        <p>2024 | Jorge Muniz &amp; Crédito | TODOS OS DIREITOS RESERVADOS</p>
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
