import { Metadata } from "next";
import ConfirmationPage from './confirmationPage';

export const metadata: Metadata = {
  title: "Confirmation Page | Free Next.js Template for Startup and SaaS",
  description: "This is Confirmation Details Page for Startup Nextjs Template",
  // other metadata
};

const Confirmation = () => {
  return <ConfirmationPage />;
};

export default Confirmation;
