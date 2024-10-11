// src/data/navLink.ts

export interface NavRoute {
  label: string;
  path: string;
}

const Navroutes: NavRoute[] = [
  {
    label: "HomePage",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Pricing",
    path: "/pricing",
  },
];

export default Navroutes;
