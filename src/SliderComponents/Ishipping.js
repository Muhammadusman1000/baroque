import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Ishipping() {
  return (
    <div className="w-[70%] mx-auto mt-[15vh]">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <p className="text-large">EXPECTED DELIVERY TIME:</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="w-[45%] ">
            <div className="ml-5">
              <p className="text-sm">
                (PAKISTAN) UNSTITCHED DISPATCH TIME : WITHIN 1 WEEK. (PAKISTAN)
                STITCHED DISPATCH TIME : WITHIN 2 TO 3 WEEKS. (PAKISTAN)
                PRIORITY STITCHING : DISPATCH TIME 1 WEEK.
              </p>

              <br />
              <p className="text-sm">
                (INTERNATIONAL) UNSTITCHED DISPATCH TIME : WITHIN 2 WEEKS.
                (INTERNATIONAL) STITCHED DISPATCH TIME : WITHIN 3 TO 5 WEEKS.
                (INTERNATIONAL) PRIORITY STITCHING : DISPATCH TIME 2 WEEKS.
              </p>
              <br />
              <p className="text-sm">
                CUSTOMIZE STITCHING (LOCAL & INTERNATIONAL) : 1 WEEK EXTRA.
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="font-bold text-2xl">
            SHIPPING CHARGES:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="w-5/6">
            <div className="ml-5">
              <li>Within Pakistan: Free</li>
              <li>Free International Shipping Above PKR 150,000</li>
              <li>
                Outside Pakistan: Shipping charges will be calculated at the
                time of checkout based on the size of package and destination.
              </li>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="font-bold text-2xl">
            CUSTOMS AND DUTIES:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="ml-5">
              Your order may be required to pay customs and import duties upon
              arrival of the goods into your country. Baroque is not responsible
              for any taxes or duties the customs office may charge you, and
              payment is necessary to release your order from customs. Customers
              may be charged customs and duties by their country upon delivery
              of their order which they will have to pay in order to receive the
              package. We do not know a certain amount as it is charged by the
              delivery destination and not by us so it is not under our control.
              If the package has already been shipped and customer refuses to
              pay the charges, Baroque has every right to get the package back
              and deduct the following charges from the refund;
            </p>
            <br />
            <p className="ml-5">
              1. Initial shipping paid with the order. <br />
              <br />
              2. Return shipping charges.
              <br />
              <br /> 3. Any tax/duties charged to Baroque upon return. <br />
              Please know that if the customer fails to respond on time and the
              package is marked abandoned & destroyed at the destination then no
              refund claims can be made by the customer.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>PRIVACY & POLICY:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Information is collected on this site by baroque.pk (Baroque) will
              take all measures to protect your personal information. Any
              personal information received will only be used to fill your
              order. We will not sell or redistribute your information to
              anyone. Any information you provide will be governed by this
              privacy policy and our terms and conditions. We may collect two
              types of information via this website: information you
              specifically provide to us, and automatic information associated
              with your use of this site. Information you specifically provide
              to us includes any information you enter into a form or send to us
              via e-mail. Examples of this information include information you
              enter when placing an order or setting up an account. Automatic
              information associated with your use of this site includes any
              information arising from your use of this site which you do not
              specifically provide. Examples of this information include your IP
              address, the type of web browser you are using, and the speed of
              your web connection. We will protect your data and not sell it any
              cost please feel free to contact us at info@baroque.pk
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default Ishipping;
