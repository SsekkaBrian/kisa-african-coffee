import { ArrowUpRight, Mail, MapPin, Phone, UserRound } from "lucide-react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { brand } from "./config/brand";
import { buyerSteps, galleryItems, impactStats, offers, qualityPoints } from "./data/siteContent";

function Card({ children, className = "" }) {
  return <div className={`border border-soil/10 bg-white p-6 shadow-sm ${className}`}>{children}</div>;
}

function IconCard({ icon: Icon, title, body }) {
  return (
    <Card className="h-full">
      <div className="mb-5 grid h-12 w-12 place-items-center bg-palm text-millet">
        <Icon size={22} />
      </div>
      <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-soil/72">{body}</p>
    </Card>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-millet font-body text-soil">
      <Navbar />
      <Hero />

      <Section id="story" eyebrow="Brand Story" title="Premium Ugandan coffee with a purpose beyond the bag.">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="bg-ink p-8 text-millet shadow-warm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ochre">Uganda to global markets</p>
            <p className="mt-4 font-display text-4xl font-semibold">{brand.name}</p>
            <p className="mt-6 leading-8 text-millet/72">
              The brand name remains controlled from one central config file while final legal registration is pending.
              The public story now leads with premium Ugandan coffee, export credibility, and a warm connection to foundation impact.
            </p>
          </div>
          <div className="space-y-6 text-lg leading-8 text-soil/78">
            <p>
              {brand.name} is being shaped as a premium Ugandan coffee brand for serious buyers. Its first target
              export market is {brand.targetMarket}, and its product range is designed to support wholesale, retail,
              hospitality, gifting, and partnership conversations.
            </p>
            <p>
              The foundation mission gives the brand its deeper reason for existing. Under director {brand.director},
              coffee is positioned as a sustainable commercial arm for {brand.foundationName}, supporting education,
              skills development, scholarships, community outreach, and vulnerable children and families.
            </p>
          </div>
        </div>
      </Section>

      <Section id="quality" eyebrow="Coffee Origin / Quality" title="Coffee from Central and Western Uganda, presented for international buyer confidence." className="bg-white">
        <div className="grid gap-5 md:grid-cols-3">
          {qualityPoints.map((point) => (
            <IconCard key={point.title} {...point} />
          ))}
        </div>
      </Section>

      <Section id="products" eyebrow="Products" title="A flexible product range for buyers, partners, and supporters.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {offers.map((offer) => (
              <div key={offer} className="border-l-4 border-clay bg-white p-6 text-lg font-semibold leading-7 text-ink shadow-sm">
                {offer}
              </div>
            ))}
          </div>
          <div className="bg-palm p-8 text-millet sm:p-10">
            <p className="font-display text-3xl font-semibold">Built beyond a single SKU.</p>
            <p className="mt-5 leading-8 text-millet/75">
              The range can support trade conversations around green beans while also giving supporters and retail
              partners approachable formats such as roasted beans, ground coffee, pods, and gift packs.
            </p>
          </div>
        </div>
      </Section>

      <Section id="impact" eyebrow="Foundation Impact" title="A commercial coffee arm supporting the mission of Kisa Foundation Uganda." className="bg-ink text-millet" tone="dark">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-lg leading-8 text-millet/75">
              The foundation connection is not treated as decoration. It gives the coffee business a practical purpose:
              creating a sustainable commercial channel that can support education, skills development, scholarships,
              community outreach, and vulnerable children and families through {brand.foundationName}.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div key={stat.value} className="border border-millet/15 p-6">
                <p className="font-display text-2xl font-semibold text-ochre">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-millet/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="export" eyebrow="Export / Wholesale Buyers" title={`Built for serious buyer conversations, starting with ${brand.targetMarket}.`}>
        <div className="grid gap-5 md:grid-cols-3">
          {buyerSteps.map((step) => (
            <IconCard key={step.title} {...step} />
          ))}
        </div>
      </Section>

      <Section id="gallery" eyebrow="Gallery Placeholder" title="A future home for real origin, product, export, and foundation photography." className="bg-white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div key={item} className="group relative min-h-44 overflow-hidden bg-ink">
              <img
                src="/coffee-origin-hero.png"
                alt=""
                className="h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-75"
                style={{ objectPosition: `${25 + index * 9}% center` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <p className="absolute bottom-5 left-5 font-display text-xl font-semibold text-millet">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact / Request Quote" title="Request product details, samples, or a wholesale conversation.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="bg-ink p-8 text-millet sm:p-10">
            <p className="max-w-2xl text-lg leading-8 text-millet/76">
              Contact {brand.director} for export, wholesale, product, or partnership inquiries. Share your buyer type,
              target market, product interest, and timing so the next conversation can be practical from the start.
            </p>
            <a href={`mailto:${brand.email}`} className="mt-8 inline-flex items-center gap-2 bg-ochre px-6 py-4 font-semibold text-ink transition hover:bg-millet">
              {brand.quoteCta}
              <ArrowUpRight size={18} />
            </a>
          </div>
          <Card className="space-y-6">
            <div className="flex gap-4">
              <UserRound className="mt-1 text-clay" size={20} />
              <div>
                <p className="font-semibold text-ink">Director</p>
                <p className="text-soil/70">{brand.director}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 text-clay" size={20} />
              <div>
                <p className="font-semibold text-ink">Email</p>
                <a className="text-soil/70 hover:text-clay" href={`mailto:${brand.email}`}>{brand.email}</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 text-clay" size={20} />
              <div>
                <p className="font-semibold text-ink">Phone / WhatsApp</p>
                <p className="text-soil/70">{brand.whatsapp}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-1 text-clay" size={20} />
              <div>
                <p className="font-semibold text-ink">Location</p>
                <p className="text-soil/70">{brand.country}</p>
              </div>
            </div>
            <div className="border-t border-soil/10 pt-5">
              <p className="font-semibold text-ink">Coffee Regions</p>
              <p className="mt-2 text-soil/70">{brand.regions.join(" and ")}</p>
            </div>
          </Card>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
