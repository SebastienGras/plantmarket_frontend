import React from "react";
import AuthenticatedLayout from "@components/layouts/AuthenticatedLayout";
import PublicLayout from "@components/layouts/PublicLayout";
import useIsPublicRoute from "@hooks/useIsPublicRoute";
import { LayoutProps } from "./types";

const ChoseLayout = ({ children }: LayoutProps) => {
  const isPublicRoute = useIsPublicRoute();

  if (isPublicRoute) {
    // If the route is public, we can return the PublicLayout directly
    return <PublicLayout>{children}</PublicLayout>;
  }

  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
};

export default ChoseLayout;
