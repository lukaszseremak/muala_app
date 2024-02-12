import * as React from "react";

interface FeedbackTemplateProps {
  content: string;
  name: string;
  email: string;
}

export const FeedbackTemplate: React.FC<Readonly<FeedbackTemplateProps>> = ({
  content, name, email
}) => (
  <div>
    <h1 className="text-center">Name: {name}</h1>
    <h1 className="text-center">Email: {email}</h1>
    <h1 className="text-center">Content: {content}</h1>
  </div>
);

interface ReportMualaTemplateProps {
  local_name: string;
  city: string;
  url: string;
}

export const ReportMualaTemplate: React.FC<
  Readonly<ReportMualaTemplateProps>
> = ({ local_name, city, url }) => (
  <div>
    <h1 className="text-center">Nazwa lokalu: {local_name}</h1>
    <h1 className="text-center">Miasto: {city}</h1>
    <h1 className="text-center">Link do filmu: {url}</h1>
  </div>
);
