import React from "react";
import { Box, Typography } from "@mui/material";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { CIFSectionTitles } from "../../constants/sectionTitles";

const PersonalDirectorGuarantee = () => {
  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
    {sectionTitle(
        CIFSectionTitles.personalGuarantee.number,
        CIFSectionTitles.personalGuarantee.title,
      )}
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ marginLeft: "3.5rem", fontWeight: "bold", fontSize: "14px" }}
        >
          I/WE (also referred to as the “Guarantor/s”) UNCONDITIONALLY AND
          IRREVOCABLY
        </Typography>
      <Box sx={{ paddingLeft: "3.5rem" }}>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p>1. </p>
          <p style={{ marginLeft: "1rem" }}>
            GUARANTEE the due and punctual payment to the Seller of all monies
            which are now owing to the Seller by the Client and all further sums
            of money from time to time owing to the Seller by the Client in
            respect of goods and services supplied or to be supplied by the
            Seller to the Client or any other liability of the Client to the
            Seller, and the due observance and performance by the Client of all
            its obligations contained or implied in any contract with the
            Seller, including but not limited to the Terms & Conditions of Trade
            signed by the Client and annexed to this Guarantee and Indemnity. If
            for any reason the Client does not pay any amount owing to the
            Seller the Guarantor will immediately on demand pay the relevant
            amount to the Seller. In consideration of the Seller agreeing to
            supply the goods to the Client, the Guarantor charges all of its
            right, title and interest (joint or several) in any land, realty or
            other assets capable of being charged, owned by the Guarantor now or
            in the future, to secure the performance by the Guarantor of its
            obligations under these terms and conditions (including, but not
            limited to, the payment of any money) and the Guarantor acknowledges
            that this personal guarantee and indemnity constitutes a security
            agreement for the purposes of the Personal Property Securities Act
            2009 (“PPSA”) and unequivocally consents to the Seller registering
            any interest so charged. The Guarantor irrevocably appoints the
            Seller and each director of the Seller as the Guarantor’s true and
            lawful attorney/s to perform all necessary acts to give effect to
            this clause including, but not limited to, signing any document on
            the Guarantor’s behalf which the Seller may reasonably require to:
            (a) register a financing statement or financing change statement in
            relation to a security interest on the Personal Property Securities
            Register; (b) register any other document required to be registered
            by the PPSA or any other law; or (c) correct a defect in a statement
            referred to in clause 1(a) or 1(b).
          </p>
        </Typography>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p>2.</p>
          <p style={{ marginLeft: "1rem" }}>
            <b>HOLD HARMLESS AND INDEMNIFY the Seller</b> on demand as a
            separate obligation against any liability (including but not limited
            to damages, costs, losses, and legal fees calculated on a solicitor
            and own client basis) incurred by, or assessed against, the Seller
            in connection with:
            <br />
            (a) the supply of goods and/or services to the Client; or
            <br />
            (b) the recovery of monies owing to the Seller by the Client
            including the enforcement of this Guarantee and Indemnity, and
            including but not limited to the Seller’s nominees contract default
            fee and legal costs; or
            <br />
            (c) monies paid by the Seller with the Client’s consent in
            settlement of a dispute that arises or results from a dispute
            between, the Seller, the Client, and a third party or any
            combination thereof, over the supply of goods and/or services by the
            Seller to the Client.
          </p>
        </Typography>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p
            style={{
              marginLeft: "1.7rem",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <b>I/WE FURTHER ACKNOWLEDGE AND AGREE THAT</b>
            <br></br>
          </p>
        </Typography>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p style={{ marginTop: "0px", marginBottom: "0px" }}>3.</p>
          <p
            style={{
              marginLeft: "1rem",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            I/We have received, read and understood the Seller’s Terms and
            Conditions prior to entering into this Guarantee and Indemnity and
            agree to be bound by those Terms and Conditions.
          </p>
        </Typography>
        <span
          variant="body1"
          color="secondary.main"
          style={{ fontSize: "14px", display: "flex" }}
        >
          4.
          <p
            style={{
              marginLeft: "1rem",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            This Guarantee and Indemnity shall constitute an unconditional and
            continuing Guarantee and Indemnity and accordingly shall be
            irrevocable and remain in full force and effect until the whole of
            monies owing to the Seller by the Client and all obligations herein
            have been fully paid, satisfied, and performed.
          </p>
        </span>

        <span
          variant="body1"
          color="secondary.main"
          style={{ fontSize: "14px", display: "flex" }}
        >
          5.
          <p
            style={{
              marginLeft: "1rem",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            No granting of credit, extension of further credit, or granting of
            time and no waiver, indulgence or neglect to sue on the Seller’s
            part (whether in respect of the Client or any one or more of any
            other Guarantor(s) or otherwise) and no failure by any named
            Guarantor to properly execute this Guarantee and Indemnity shall
            impair or limit the liability under this Guarantee and Indemnity of
            any Guarantor. Without affecting the Client’s obligations to the
            Seller, each Guarantor shall be a principal debtor and liable to the
            Seller accordingly.
          </p>
        </span>
        <span
    style={{
      fontSize: "14px",
      display: "flex",
      textAlign: "justify",
    }}
  >
    <span style={{ display: 'inline-block', minWidth: '1rem' }}>6.</span>
    <span
      style={{
        display: 'inline-block',
        width: 'calc(100% - 3rem)',
        marginLeft: '1rem',
        textAlign: 'justify',
      }}
    >
      If any payment received or recovered by the Seller is avoided by law such
      payment shall be deemed not to have discharged the liability of the
      Guarantor, and the Guarantor and the Seller shall each be restored to the
      position in which they would have been had no such payment been made.
    </span>
  </span>

  <span
    style={{
      fontSize: "14px",
      display: "flex",
      textAlign: "justify",
    }}
  >
    <span style={{ display: 'inline-block', minWidth: '1rem' }}>7.</span>
    <span
      style={{
        display: 'inline-block',
        width: 'calc(100% - 3rem)',
        marginLeft: '1rem',
        textAlign: 'justify',
      }}
    >
      The term “Guarantor” whenever used in this Guarantee and Indemnity shall,
      if there is more than one person named as Guarantor, mean and refer to
      each of them individually and all of them together unless the context
      otherwise requires, and the obligations and agreements on the part of the
      Guarantor contained in this Guarantee and Indemnity shall bind them
      jointly and severally.
    </span>
  </span>

  <span
    style={{
      fontSize: "14px",
      display: "flex",
      textAlign: "justify",
    }}
  >
    <span style={{ display: 'inline-block', minWidth: '1rem' }}>8.</span>
    <span
      style={{
        display: 'inline-block',
        width: 'calc(100% - 3rem)',
        marginLeft: '1rem',
        textAlign: 'justify',
      }}
    >
      I/We have been advised to obtain independent legal advice before executing
      this Guarantee and Indemnity. I/we understand that I/we am/are liable for
      all amounts owing (both now and in the future) by the Client to the
      Seller.
    </span>
  </span>

  <span
    style={{
      fontSize: "14px",
      display: "flex",
      textAlign: "justify",
    }}
  >
    <span style={{ display: 'inline-block', minWidth: '1rem' }}>9.</span>
    <span
      style={{
        display: 'inline-block',
        width: 'calc(100% - 3rem)',
        marginLeft: '1rem',
        textAlign: 'justify',
      }}
    >
      I/we irrevocably authorise the Seller to obtain from any person or company
      any information which the Seller may require for credit reference
      purposes. I/We further irrevocably authorise the Seller to provide to any
      third party, in response to credit references and enquiries about me/us or
      by way of information exchange with credit reference agencies, details of
      this Guarantee and Indemnity and any subsequent dealings that I/we may
      have with the Seller as a result of this Guarantee and Indemnity being
      actioned by the Seller.
    </span>
  </span>

  <span
    style={{
      fontSize: "14px",
      display: "flex",
      textAlign: "justify",
    }}
  >
    <span style={{ display: 'inline-block', minWidth: '1rem' }}>10.</span>
    <span
      style={{
        display: 'inline-block',
        width: 'calc(100% - 3rem)',
        marginLeft: '1rem',
        textAlign: 'justify',
      }}
    >
      The above information is to be used by the Seller for all purposes in
      connection with the Seller considering this Guarantee and Indemnity and
      the subsequent enforcement of the same.
    </span>
  </span>

  <span
    style={{
      fontSize: "14px",
      display: "flex",
      textAlign: "justify",
    }}
  >
    <span style={{ display: 'inline-block', minWidth: '1rem' }}>11.</span>
    <span
      style={{
        display: 'inline-block',
        width: 'calc(100% - 3rem)',
        marginLeft: '1rem',
        textAlign: 'justify',
      }}
    >
      Each Guarantor agrees to grant UC8 Australia Pty Ltd (“UC8”) a charge over
      the whole of the Guarantor’s present and future undertaking, property, and
      assets (including, without limitation, all of the Guarantor’s legal and
      beneficial interests in freehold and leasehold land) as security for any
      amount owed by the Customer or the Guarantor to UC8, and each Guarantor
      acknowledges UC8 may lodge caveats or take any other action to enforce
      UC8’s security over the charged property.
    </span>
  </span>

  <span
    style={{
      fontSize: "14px",
      display: "flex",
      textAlign: "justify",
    }}
  >
    <span style={{ display: 'inline-block', minWidth: '1rem' }}>12.</span>
    <span
      style={{
        display: 'inline-block',
        width: 'calc(100% - 3rem)',
        marginLeft: '1rem',
        textAlign: 'justify',
      }}
    >
      Each Guarantor acknowledges the Guarantor has had an opportunity to obtain
      independent legal and financial advice in relation to this Guarantee and
      Indemnity.
    </span>
  </span>
      </Box>
    </Box>
  );
};

export default PersonalDirectorGuarantee;
