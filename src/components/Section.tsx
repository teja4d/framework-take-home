import React from "react";
import Button from "../elements/Button";
import Accordion from "./Accordion";
import valley from "../assets/image_3.jpg";
import road from "../assets/road.png";
import house from "../assets/house.png";
import dining from "../assets/dining.png";
import sofa from "../assets/sofa.png";
import snow from "../assets/snow.png";
import interior from "../assets/interior.png";
import chair from "../assets/chairs.png";
import { SectionHeading, SectionImage, SectionContent, Subheading, SectionText } from "../elements/SectionItems";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

const Section: React.FC = () => {
  const accordionItems: AccordionItem[] = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur ? ",
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolor
        </p>
      ),
    },
    { title: "Lorem ipsum dolor sit amet, consectetur ?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolor</p> },
    {
      title: "Lorem ipsum dolor sit amet, consectetur ? ",
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor ?
        </p>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur ? ",
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        </p>
      ),
    },
  ];

  return (
    <section className="container mx-auto mt-20">
      <SectionHeading>
        Lorem ipsum dolor sit amet consectetur consectetur adipisicing eli
      </SectionHeading>
      <SectionImage src={valley} alt="hello" />
      <section className="mt-20">
        <SectionContent>
          <Subheading>Subheading</Subheading>
          <h1 className="text-2xl lg:text-4xl my-4 text-start">
            Lorem ipsum dolor sit amet consectetur Volutpat integer a morbi accumsan.
          </h1>
          <SectionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quibusdam, quas, voluptatem fugiat quos dolorum
            consequuntur.
          </SectionText>
          <div className="text-start mt-10">
            <Button />
          </div>
        </SectionContent>
      </section>
      <section className="my-20">
        <div className="flex flex-wrap gap-4 justify-between overflow-hidden">
          <div className="block lg:flex gap-4 w-full">
            <img
              className="w-full h-[200px] lg:h-auto mb-4 lg:mb-0"
              src={road}
              alt=""
            />
            <img className="w-full h-[200px] lg:h-auto " src={house} alt="" />
          </div>
          <div className="block lg:flex gap-4 w-full">
            <img
              className="w-full h-[200px] lg:h-auto "
              src={interior}
              alt=""
            />
          </div>
          <div className="block lg:flex gap-4 w-full">
            <img
              className="w-full h-[200px] lg:h-auto lg:my-0 mb-4 lg:mb-0"
              src={sofa}
              alt=""
            />
            <img className="w-full h-[200px] lg:h-auto " src={snow} alt="" />
          </div>
          <div className="block lg:flex  gap-4 w-full">
            <img
              className="w-full h-[200px] lg:h-auto mb-4 lg:mb-0"
              src={dining}
              alt=""
            />
            <img
              className="w-full h-[200px] lg:h-auto mb-4 lg:mb-0"
              src={chair}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="mx-0 lg:mx-auto w-full lg:w-4/5">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl lg:text-5xl text-start my-4">Heading text here...</h1>
            <SectionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, quibusdam.
            </SectionText>
          </div>
          <div className="mx-auto my-8">
            <Accordion items={accordionItems} />
          </div>
          <div className="text-start my-8">
            <Button />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Section;
