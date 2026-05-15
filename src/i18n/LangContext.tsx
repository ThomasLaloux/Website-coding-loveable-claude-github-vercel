import { createContext, useContext, useEffect, useMemo, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dictionaries, Lang } from "./dictionary";

type Ctx = {
  lang: Lang;
  t: (typeof dictionaries)["en"];
  setLang: (l: Lang) => void;
};

const LangContext = createContext<Ctx | null>(null);

export const LangProvider = ({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    const hash = location.hash || "";
    navigate(`/${l}${hash}`);
  };

  const value = useMemo(
    () => ({ lang, t: dictionaries[lang], setLang }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
