export type ContactDetailId = "address" | "phone" | "email";

export type ContactDetail = {
  id: ContactDetailId;
  label: string;
  value: string;
  description: string;
  href?: string;
};

export const contactDetails: ContactDetail[] = [
  {
    id: "address",
    label: "Visit Us",
    value: "123 Anna Nagar, Chennai",
    description: "Tamil Nadu 600040, India",
  },
  {
    id: "phone",
    label: "Call Us",
    value: "+91 98765 43210",
    description: "We answer during café hours.",
    href: "tel:+919876543210",
  },
  {
    id: "email",
    label: "Email Us",
    value: "hello@brewandbean.com",
    description: "We usually reply within a day.",
    href: "mailto:hello@brewandbean.com",
  },
];

export type OpeningHour = {
  id: string;
  days: string;
  hours: string;
};

export const openingHours: OpeningHour[] = [
  {
    id: "weekdays",
    days: "Monday - Friday",
    hours: "8:00 AM - 10:00 PM",
  },
  {
    id: "weekends",
    days: "Saturday - Sunday",
    hours: "9:00 AM - 11:00 PM",
  },
];

export const openingHoursNote =
  "The kitchen closes 30 minutes before we do, so come a little early for fresh bakes.";

export const cafeLocation = {
  name: "Brew & Bean",
  area: "Anna Nagar",
  city: "Chennai",
  addressLines: ["123 Anna Nagar", "Chennai, Tamil Nadu 600040"],
  landmark: "Opposite Anna Nagar Tower Park, two minutes from the metro station.",
};
