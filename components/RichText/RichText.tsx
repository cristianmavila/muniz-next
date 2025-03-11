/* eslint-disable @next/next/no-img-element */

// Import React.js dependencies
import React, { ReactElement, ReactNode } from "react";

// Import Next.js dependencies
import Image from "next/image";

// Import functions
import parse, { HTMLReactParserOptions, domToReact } from "html-react-parser";

// Import component dependencies
import { cn } from "@/libs/tailwind";

// Parser options
// @TODO: Add additional HTML element to component types
export const options: HTMLReactParserOptions = {
  replace: (domNode: any) => {
    if (domNode) {
      if (domNode.name === "img") {
        const { src, alt, width = 100, height = 100 } = domNode.attribs;

        return (
          // <Image
          //   src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${src}`}
          //   alt={alt}
          //   width={Number(width)}
          //   height={Number(height)}
          // />

          <div className="group overflow-hidden relative">
            {/* <Image
                {...image}
                alt={name || "image alt"}
                width={image.width}
                height={image.height}
                className={cn(
                  "w-full duration-500 ease-in-out hover:scale-[112%] group-hover:scale-[112%] bg-slate-100",
                  imageClassName
                )}
                quality={100}
              /> */}

            <img
              src={src}
              alt={alt || "image alt"}
              width={Number(width)}
              height={Number(height)}
              className={cn(
                "w-full duration-1000 ease-in-out group-hover:scale-[135%] indent-[100%] whitespace-nowrap overflow-hidden"
              )}
              loading="lazy"
            />
          </div>
        );
      }

      if (domNode.name === "ul") {
        const { class: className } = domNode.attribs;
        return (
          <div
            className={cn(
              "text-sm md:text-lg text-titleIndice [&_span]:whitespace-break-spaces",
              className
            )}
          >
            {domToReact(domNode.children, options)}
          </div>
        );
      }

      if (domNode.name === "li") {
        const { class: className } = domNode.attribs;
        return <span className={cn("", className)}>{domToReact(domNode.children, options)}</span>;
      }

      if (domNode.name === "p") {
        const { class: className } = domNode.attribs;
        return (
          <p className={cn("text-lg md:text-2xl leading-6 md:!leading-9", className)}>
            {domToReact(domNode.children, options)}
          </p>
        );
      }
    }
  },
};

/**
 * Render the RichText component.
 */
export default function RichText({
  attributes,
  children,
  className,
  id,
  style,
  tag,
}: RichTextProps) {
  const option = options;
  const html = parse(String(children), option);
  const Tag = tag;

  return (
    <>
      {Tag ? (
        <Tag {...attributes} id={id || undefined} style={style} className={cn("", className)}>
          {html}
        </Tag>
      ) : (
        html
      )}
    </>
  );
}

export interface RichTextProps {
  /** Optional element attributes. */
  attributes?: {};
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
  /** Optional classNames. */
  className?: string;
  /** Optional element ID. */
  id?: string;
  /** Inline styles. */
  style?: {};
  /** The type of element to render. */
  tag?: keyof JSX.IntrinsicElements | false;
}
