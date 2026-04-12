import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz</a> ©{year}
        </p>
        <p>
          Korzystając z tej strony, przyjmujesz na siebie nieodwołalne zobowiązanie do bezzwłocznego i osobistego powiadomienia właściciela o każdym dostrzeżonym błędzie, literówce lub nieścisłości w treści notatek, uznając, że zaniechanie tego obowiązku stanowi rażące naruszenie warunków użytkowania serwisu pod rygorem pełnej odpowiedzialności cywilno-moralnej.
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
