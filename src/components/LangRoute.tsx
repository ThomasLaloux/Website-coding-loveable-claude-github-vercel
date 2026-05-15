import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { LangProvider } from "@/i18n/LangContext";
import { Lang } from "@/i18n/dictionary";
import Index from "@/pages/Index";

const isLang = (v: string | undefined): v is Lang => v === "en" || v === "fr";

export const LangRoute = () => {
  const { lang } = useParams();
  if (!isLang(lang)) return <Navigate to="/en" replace />;
  return (
    <LangProvider lang={lang}>
      <Index />
    </LangProvider>
  );
};

export const RootRedirect = () => {
  let preferred: Lang = "en";
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "fr" || stored === "en") preferred = stored;
    else if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("fr"))
      preferred = "fr";
  } catch {
    // ignore
  }
  useEffect(() => {}, []);
  return <Navigate to={`/${preferred}`} replace />;
};
