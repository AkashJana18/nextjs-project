import React from "react";
import {
  Html,
  Button,
  Head,
  Preview,
  Section,
  Row,
  Heading,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
      </Head>
      <Preview>Heres your verification code : {otp}</Preview>
      <Section>
        <Row>
          <Heading>Hello {username}</Heading>
        </Row>
        <Row>
            <Text>
                Thank you for registering. Please use the following verification code :
            </Text>
        </Row>
        <Row>
            <Text>{otp}</Text>
        </Row>
        <Row>
            <Text>
                If you did not request this code, please ignore the email.
            </Text>
        </Row>
      <Button href="https://localhost:3000.com" style={{ color: "#61dafb" }}>
        Verify
      </Button>
      </Section>
    </Html>
  );
}
