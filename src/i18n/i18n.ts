import { I18n } from "i18n";
import path from "path";
import fs from "fs";

const translationsDirectory = path.join(__dirname, "translations");

if (!fs.existsSync(translationsDirectory)) {
  fs.mkdirSync(translationsDirectory, { recursive: true });
}

export const i18n = new I18n({
  locales: ["en", "ptBR", "es"],
  defaultLocale: "en",
  directory: translationsDirectory,
});
