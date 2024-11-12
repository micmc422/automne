import HERO_IMAGE from "@/public/images/eberhard-grossgasteiger-wUWP53W7KbY-unsplash.jpg";
import BALLADES_IMAGE from "@/public/images/johannes-plenio-hvrpOmuMrAI-unsplash.jpg";
import HALLOWEEN_IMAGE from "@/public/images/toa-heftiba-g_o7egVt33E-unsplash.jpg";
import CHAMPIGNONS_IMAGE from "@/public/images/sasha-panarin-yV7fc5OpvkY-unsplash.jpg";
import CHEMINEES_IMAGE from "@/public/images/valeriia-neganova-TNwzGWBqpFc-unsplash.jpg";
import Section from "@/ui/section/Section";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Section image={{ src: HERO_IMAGE, alt: "levée de soleil en automne", copyright: "" }} className="hero">
          <h1>Automne</h1>
          <p className={"subHeader"}>la saison des feuilles</p>
        </Section>
        <section className={"inner-container minimal"}>
          <h2 className="text-medium text-primary uppercase">L’hiver se prépare </h2>
          <p className="text-small text-muted uppercase">(il prend son temps)</p>
        </section>
        <Section image={{ src: BALLADES_IMAGE, alt: "Routes au millieu des bois", copyright: "" }} position="top-right">
          <h2>Balades</h2>
          <p className={"paragraph"}>Avec l&apos;arrivée de l&apos;automne, les températures se font plus fraîches et invitent à ressortir des vêtements confortables et à se lover dans des pulls douillets. Les soirées deviennent plus longues et, pour beaucoup, c’est l’occasion de renouer avec des moments intérieurs, autour d’un feu de cheminée ou d’un bon livre. Cette saison est propice à la contemplation et aux activités introspectives, les paysages automnaux inspirant souvent des moments de réflexion et de créativité.</p>
          <button>Parcourir</button>
        </Section>
        <section className={"inner-container bg-dark flex items-center gap text-medium text-secondary uppercase"}>
          <p>brume</p>
          <p>frimas</p>
          <p>pluie</p>
        </section>
        <Section image={{ src: HALLOWEEN_IMAGE, alt: "Lustres et toiles d'araignées", copyright: "" }} position="bottom-left" >
          <h2>Halloween</h2>
          <p className={"paragraph"}>Avec l&apos;arrivée de l&apos;automne, les températures se font plus fraîches et invitent à ressortir des vêtements confortables et à se lover dans des pulls douillets. Les soirées deviennent plus longues et, pour beaucoup, c’est l’occasion de renouer avec des moments intérieurs, autour d’un feu de cheminée ou d’un bon livre. Cette saison est propice à la contemplation et aux activités introspectives, les paysages automnaux inspirant souvent des moments de réflexion et de créativité.</p>
          <button>Parcourir</button>
        </Section>
        <section className={"inner-container cards"}>
          <div>
            <h2 className="text-medium text-secondary uppercase">magie</h2>
            <p className="paragraph">L&apos;automne est une saison qui ensorcelle par ses couleurs chaudes et ses ambiances douces. Au fil des jours, les arbres se transforment en un tableau de teintes rouges, orangées et dorées, peignant le paysage de nuances chaleureuses. Les feuilles tombent en tourbillonnant, couvrant le sol d’un tapis coloré qui crisse sous les pas. La nature semble en suspens, entre un été terminé et un hiver en approche, offrant un calme bienvenu avant les frimas.</p>
            <button className="secondary">Parcourir</button>
          </div>
          <div>
            <h2 className="text-medium uppercase">Mystère</h2>
            <p className="paragraph">L&apos;automne est une saison qui ensorcelle par ses couleurs chaudes et ses ambiances douces. Au fil des jours, les arbres se transforment en un tableau de teintes rouges, orangées et dorées, peignant le paysage de nuances chaleureuses. Les feuilles tombent en tourbillonnant, couvrant le sol d’un tapis coloré qui crisse sous les pas. La nature semble en suspens, entre un été terminé et un hiver en approche, offrant un calme bienvenu avant les frimas.</p>
            <button>Parcourir</button>
          </div>
          <div>
            <h2 className="text-medium text-primary uppercase">Calme</h2>
            <p className="paragraph">L&apos;automne est une saison qui ensorcelle par ses couleurs chaudes et ses ambiances douces. Au fil des jours, les arbres se transforment en un tableau de teintes rouges, orangées et dorées, peignant le paysage de nuances chaleureuses. Les feuilles tombent en tourbillonnant, couvrant le sol d’un tapis coloré qui crisse sous les pas. La nature semble en suspens, entre un été terminé et un hiver en approche, offrant un calme bienvenu avant les frimas.</p>
            <button className="primary">Parcourir</button>

          </div>
        </section>
        <Section image={{ src: CHAMPIGNONS_IMAGE, alt: "Champignons", copyright: "" }} position="top-right">
          <h2>Champignons</h2>
          <p className={"paragraph"}>Avec l&apos;arrivée de l&apos;automne, les températures se font plus fraîches et invitent à ressortir des vêtements confortables et à se lover dans des pulls douillets. Les soirées deviennent plus longues et, pour beaucoup, c’est l’occasion de renouer avec des moments intérieurs, autour d’un feu de cheminée ou d’un bon livre. Cette saison est propice à la contemplation et aux activités introspectives, les paysages automnaux inspirant souvent des moments de réflexion et de créativité.</p>
          <button>Parcourir</button>
        </Section>
        <section className={"inner-container bg-dark flex items-center gap"}>
          <p className="text-large text-secondary uppercase">cèpes</p>
          <p className="text-large text-secondary uppercase">châtaignes</p>
          <p className="text-large text-secondary uppercase">crépitements</p>
        </section>
        <Section image={{ src: CHEMINEES_IMAGE, alt: "Lustres et toiles d'araignées", copyright: "" }} position="bottom-left" >
          <h2>cheminées</h2>
          <p className={"paragraph"}>Avec l&apos;arrivée de l&apos;automne, les températures se font plus fraîches et invitent à ressortir des vêtements confortables et à se lover dans des pulls douillets. Les soirées deviennent plus longues et, pour beaucoup, c’est l’occasion de renouer avec des moments intérieurs, autour d’un feu de cheminée ou d’un bon livre. Cette saison est propice à la contemplation et aux activités introspectives, les paysages automnaux inspirant souvent des moments de réflexion et de créativité.</p>
          <button>Parcourir</button>
        </Section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
