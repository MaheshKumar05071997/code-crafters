import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Projects | Mahesh Kumar Vishwakarma",
  description:
    "View the portfolio and software projects developed by Mahesh Kumar Vishwakarma, including custom Web Apps, Android Apps, and Business Automation tools.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
