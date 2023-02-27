import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className=" w-full border-b-[1px] border-t-[1px] border-black h-auto p-0 py-1"
          onClick={() => handleOpen(1)}
        >
          PRODUCT TYPE
        </AccordionHeader>

        <AccordionBody className="flex justify-between  h-auto">
          <div className=" flex-cols h-auto ml-2">
            <div className="flex  w-full">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2 text-left ">
                UNSTICHED
                <span className="ml-2">(18)</span>
              </p>
            </div>

            <div className="flex w-full">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                Unstiched
                <span className="ml-2">(3)</span>
              </p>
            </div>

            <div className="flex  w-full">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2 ">
                Unstiched Chiffon
                <span className="ml-2">(20)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                Unstiched Velvet
                <span className="ml-2">(15)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                Velvet
                <span className="ml-2">(2)</span>
              </p>
            </div>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          className="border-b-[1px] border-black h-auto p-0 py-1"
          onClick={() => handleOpen(2)}
        >
          PRICE
        </AccordionHeader>
        <AccordionBody className="flex w-[90%] mx-auto">
          <input
            type="number"
            placeholder="From"
            className="border-[1px] w-3/6 border-black h-10 p-2"
          />
          <input
            type="number"
            placeholder="To"
            className="border-[1px] w-3/6 border-black p-2"
          />
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          className="border-b-[1px] border-black h-auto p-0 py-1"
          onClick={() => handleOpen(3)}
        >
          SIZE
        </AccordionHeader>
        <AccordionBody className="h-auto">
          <div className=" flex-cols h-auto ml-2">
            <div className="flex  w-full">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2 text-left ">
                XS
                <span className="ml-2">(18)</span>
              </p>
            </div>

            <div className="flex w-full">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                S<span className="ml-2">(3)</span>
              </p>
            </div>

            <div className="flex  w-full">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2 ">
                M<span className="ml-2">(20)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                L<span className="ml-2">(15)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                XL
                <span className="ml-2">(2)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                Custom Size
                <span className="ml-2">(2)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                Default
                <span className="ml-2">(2)</span>
              </p>
            </div>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader
          className="border-b-[1px] border-black h-auto p-0 py-1"
          onClick={() => handleOpen(4)}
        >
          FABRIC TYPE
        </AccordionHeader>
        <AccordionBody>
          <div className=" flex-cols h-auto ml-2">
            <div className="flex  w-full">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2 text-left ">
                CHIFFON
                <span className="ml-2">(18)</span>
              </p>
            </div>

            <div className="flex w-full">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                CHIFFON<span className="ml-2">(3)</span>
              </p>
            </div>

            <div className="flex  w-full">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2 ">
                Chiffon<span className="ml-2">(20)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                JAQUARED<span className="ml-2">(15)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                KHADDAR
                <span className="ml-2">(2)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                LAWN
                <span className="ml-2">(2)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                NET
                <span className="ml-2">(2)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                NET
                <span className="ml-2">(2)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                VELVET
                <span className="ml-2">(2)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                Velvet
                <span className="ml-2">(2)</span>
              </p>
            </div>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 5}
        icon={<Icon id={5} open={open} className="border-b-[1px]" />}
      >
        <AccordionHeader
          className="border-b-[1px] border-black h-auto p-0 py-1"
          onClick={() => handleOpen(5)}
        >
          PIECES
        </AccordionHeader>
        <AccordionBody>
          <div className=" flex-cols h-auto ml-2">
            <div className="flex w-full">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                2<span className="ml-2">(3)</span>
              </p>
            </div>

            <div className="flex  w-full">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2 ">
                3<span className="ml-2">(20)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                2 PIECE<span className="ml-2">(15)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                2 Piece
                <span className="ml-2">(2)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                3 Piece
                <span className="ml-2">(2)</span>
              </p>
            </div>

            <div className="flex ">
              <input type="checkbox" className="my-1" />
              <p className="my-1 ml-2">
                3 Piece
                <span className="ml-2">(2)</span>
              </p>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
