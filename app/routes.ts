import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "./about.tsx"),
  route("contact", "./contact/contact.tsx"),
] satisfies RouteConfig;
