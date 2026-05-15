import { Locale, localeLabels } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

const locales: Locale[] = ["ja", "en", "zh", "th"];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
      className="bg-transparent border border-white/20 text-[10px] tracking-[0.15em] uppercase text-universe-silver px-3 py-2 rounded-sm focus:outline-none focus:border-universe-teal cursor-pointer hover:text-universe-teal transition-colors"
      aria-label="Language"
    >
      {locales.map((l) => (
        <option key={l} value={l} className="bg-universe-midnight text-universe-prism">
          {localeLabels[l]}
        </option>
      ))}
    </select>
  );
}
