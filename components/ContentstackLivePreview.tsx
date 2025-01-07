"use client";

import { initLivePreview } from "@/lib/contentstack";
import React, { useEffect } from "react";

export function ContentstackLivePreview({
  children,
}: {
  children?: React.ReactNode;
}) {
  const livePreviewEnabled =
    process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW === "true";

  livePreviewEnabled &&
    useEffect(() => {
      initLivePreview();
    }, []);

  return <>{children}</>;
}
