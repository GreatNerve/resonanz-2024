import ForgotPasswordForm from "@/components/Form/ForgotPassword/ForgotPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Forgot Password",
};

export default function page() {
  return <ForgotPasswordForm />;
}
