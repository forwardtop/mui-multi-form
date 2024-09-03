import React from "react";
import { Box, Typography } from "@mui/material";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { APASectionTitles } from "../../constants/sectionTitles";

const TermsAndConditions = () => {
  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
      {sectionTitle(
        APASectionTitles.termsAndConditions.number,
        APASectionTitles.termsAndConditions.title
      )}
      <Typography
        variant="body1"
        color="secondary.main"
        sx={{ marginLeft: "3.5rem", fontWeight: "bold", fontSize: "14px" }}
      >
        General Information
      </Typography>
      <Box sx={{ paddingLeft: "3.5rem" }}>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p>
            <b>5.1)</b>
          </p>
          <p style={{ marginLeft: "1rem" }}>
            Under this debit authority you authorise UC8 Australia Pty Ltd
            (“UC8”) to withdraw from your credit card or your bank account, as
            specified above, the amount each month equal to and not more than,
            the invoiced amount of all goods and services supplied by UC8.
          </p>
        </Typography>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p>
            <b>5.2)</b>
          </p>
          <p style={{ marginLeft: "1rem" }}>
            UC8 will endeavor to make the automatic payments, but accepts no
            responsibility for making them. UC8 shall not incur liability for
            refusing or omitting to make all or any payments or for late payment
            or for failing to follow your instructions.
          </p>
        </Typography>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p>
            <b>5.3)</b>
          </p>
          <p style={{ marginLeft: "1rem" }}>
            This authority is subject to any current or future agreement between
            you and UC8 in relation to your account.
          </p>
        </Typography>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p>
            <b>5.4)</b>
          </p>
          <p style={{ marginLeft: "1rem" }}>
            UC8 may in its absolute discretion determine the order of payments
            of any moneys under this authority or any other form of withdrawal
            request.
          </p>
        </Typography>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p>
            <b>5.5)</b>
          </p>
          <p style={{ marginLeft: "1rem" }}>
            UC8 may terminate this authority as to future payments, at any time
            or times (a) by notice in writing, or (b) without notice, if (i) you
            are in default under this agreement or arrangement with UC8; or (ii)
            the payee advises UC8 that no further payment is required.
          </p>
        </Typography>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p>
            <b>5.6)</b>
          </p>
          <p style={{ marginLeft: "1rem" }}>
            This authority will remain in effect for the active life of services
            provided by UC8.
          </p>
        </Typography>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p>
            <b>5.7)</b>
          </p>
          <p style={{ marginLeft: "1rem" }}>
            You acknowledge that these terms and conditions are subject to
            change without notice.
          </p>
        </Typography>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p>
            <b>5.8)</b>
          </p>
          <p style={{ marginLeft: "1rem" }}>
            UC8 may, at its description, charge a credit card surcharge of 1.5%
            on the transaction amount for Master Card & Visa Card & 1.9% for
            American Express.
          </p>
        </Typography>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p>
            <b>5.9)</b>
          </p>
          <p style={{ marginLeft: "1rem" }}>
            Should your card details or expiry date change, you must notify UC8
            before the next billing period commences so UC8 can process the
            correct details.
          </p>
        </Typography>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <p>
            <b>5.10)</b>
          </p>
          <p style={{ marginLeft: "1rem" }}>
            This debit authority will remain in effect until you notify UC8 by
            written consent, changing your card type and/or card details; or
            expiry date.
          </p>
        </Typography>
      </Box>
    </Box>
  );
};

export default TermsAndConditions;
