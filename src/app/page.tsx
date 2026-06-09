"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, CheckCircle, Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="mediumLarge"
      background="noiseDiagonalGradient"
      cardStyle="gradient-mesh"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Josef Kiermaier"
          navItems={[
            { name: "Start", id: "#hero" },
            { name: "Über Uns", id: "#about" },
            { name: "Leistungen", id: "#features" },
            { name: "Spezialgebiete", id: "#specialties" },
            { name: "Preise", id: "#pricing" },
            { name: "Referenzen", id: "#social-proof" },
            { name: "FAQs", id: "#faq" },
            { name: "Kontakt", id: "#contact" }
          ]}
          button={{ text: "Jetzt anfragen", href: "#contact" }}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Elektroinstallationen mit Handwerk und Zuverlässigkeit"
          description="Wir bieten professionelle Elektroinstallationen, Wartung und Reparaturen für Privat- und Gewerbeobjekte. Mit jahrelanger Erfahrung und modernem Know-how sind wir Ihr vertrauenswürdiger Partner vor Ort."
          background={{ variant: "plain" }}
          testimonials={[
            { name: "Andreas Schmidt", handle: "@Hausbesitzer_München", testimonial: "Schnelle und saubere Arbeit, genau wie besprochen. Josef Kiermaier ist absolut empfehlenswert für Elektroinstallationen!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/annoyed-young-caucasian-man-pulling-collar-his-turtleneck-sweater-looking-camera-with-one-eye-closed-isolated-orange-background-with-copy-space_141793-78073.jpg", imageAlt: "Andreas Schmidt testimonial" },
            { name: "Martina Weber", handle: "@Immobilien_GmbH", testimonial: "Die Wartung unserer Gewerbeobjekte läuft dank diesem Team reibungslos. Immer pünktlich und zuverlässig.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/business-woman-portrait_93675-133097.jpg", imageAlt: "Martina Weber testimonial" },
            { name: "Familie Meier", handle: "@GlücklicheKunden", testimonial: "Neue Steckdosen installiert und alles perfekt erklärt. Wir fühlen uns sicher und gut beraten.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/wind-farms-fields_23-2149154408.jpg", imageAlt: "Familie Meier testimonial" },
            { name: "Thomas Huber", handle: "@Bauprojekt_Leiter", testimonial: "Auch bei komplexen Bauvorhaben immer ein kompetenter Ansprechpartner. Die Zusammenarbeit war hervorragend.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-good-looking-smiling-friendly-female-trainee-ready-tackle-assignments-smiling-broadly-feeling-lucky-day-work-self-assured-encouraged-achieve-success-goal-white-wall_176420-35567.jpg", imageAlt: "Thomas Huber testimonial" },
            { name: "Sophie Berger", handle: "@SmartHome_Expertin", testimonial: "Mein Smart Home wurde einwandfrei integriert. Der Service ist top, ich bin begeistert!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/pensive-smiling-man-surfing-net-smartphone_1262-5281.jpg", imageAlt: "Sophie Berger testimonial" }
          ]}
          testimonialRotationInterval={5000}
          useInvertedBackground={false}
          buttons={[{ text: "Kostenlos anfragen", href: "#contact" }]}
          buttonAnimation="slide-up"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/happy-builder-man-construction-vest-safety-helmet-looking-camera-smiling-cheerfully-standing-orange_141793-109139.jpg", alt: "Customer 1" },
            { src: "http://img.b2bpic.net/free-photo/real-professional-smiling-businesswoman-looking-confident-determined-face-expression-standing-suit-white-background_1258-122910.jpg", alt: "Customer 2" },
            { src: "http://img.b2bpic.net/free-photo/half-length-shot-cheerful-senior-man-smiles-happily-with-white-teeth-wears-optical-glasses-sweater-isolated-brown-wall_273609-44148.jpg", alt: "Customer 3" },
            { src: "http://img.b2bpic.net/free-photo/close-up-smiley-man-therapy_23-2148928793.jpg", alt: "Customer 4" }
          ]}
          avatarText="Trusted by hundreds of happy customers"
          imageSrc="http://img.b2bpic.net/free-photo/male-electrician-works-switchboard-using-electrical-connection-cable_169016-51895.jpg"
          imageAlt="Elektriker bei der Arbeit am Sicherungskasten"
          mediaAnimation="slide-up"
          imagePosition="right"
          fixedMediaHeight={true}
        />
      </div>
      <div id="about" data-section="about">
        <AboutMetric
          title="Über Uns: Ihr Spezialist für Elektroinstallationen"
          metrics={[
            { icon: Sparkles, label: "Jahre Erfahrung", value: "25+" },
            { icon: CheckCircle, label: "Zufriedene Kunden", value: "500+" },
            { icon: Award, label: "Abgeschlossene Projekte", value: "1000+" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>
      <div id="features" data-section="features">
        <FeatureCardEight
          title="Unsere Kernleistungen im Überblick"
          description="Von der Planung bis zur Wartung – wir decken alle Bereiche der modernen Elektrotechnik ab."
          features={[
            { title: "Professionelle Elektroplanung", description: "Wir erstellen maßgeschneiderte Konzepte für Ihre Elektroinstallationen, von der ersten Idee bis zur finalen Umsetzung.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-designer-working-layout_53876-15340.jpg", imageAlt: "Elektroplanung und Design" },
            { title: "Moderne Lichtsysteme", description: "Innovative Beleuchtungslösungen für Wohn- und Geschäftsräume, die Funktion und Ästhetik perfekt vereinen.", imageSrc: "http://img.b2bpic.net/free-photo/mid-shot-woman-looking-phone_23-2148751529.jpg", imageAlt: "Moderne Lichtinstallation" },
            { title: "Zuverlässige Reparaturen & Wartung", description: "Schnelle und effektive Fehlerbehebung sowie präventive Wartung, um die Langlebigkeit Ihrer Anlagen zu gewährleisten.", imageSrc: "http://img.b2bpic.net/free-photo/woman-engineer-checks-electrical-panel-using-digital-schematic-technical-inspection_169016-71057.jpg", imageAlt: "Elektroreparatur und Wartung" }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="specialties" data-section="specialties">
        <ProductCardOne
          title="Unsere Spezialgebiete"
          description="Entdecken Sie die Vielfalt unserer Expertise in verschiedenen elektrischen Anwendungen für Ihr Zuhause oder Unternehmen."
          products={[
            { id: "s1", name: "Smart Home Integration", price: "Individuell", imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-relaxing-home_23-2150639943.jpg", imageAlt: "Smart Home System" },
            { id: "s2", name: "Sicherungskasten Upgrade", price: "Ab 500€", imageSrc: "http://img.b2bpic.net/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cab_169016-1474.jpg", imageAlt: "Moderner Sicherungskasten" },
            { id: "s3", name: "E-Ladestationen", price: "Ab 800€", imageSrc: "http://img.b2bpic.net/free-photo/car-charger-electric-vehicle-charging-station_107420-94928.jpg", imageAlt: "E-Auto Ladestation" },
            { id: "s4", name: "Energieeffizienzberatung", price: "Ab 150€", imageSrc: "http://img.b2bpic.net/free-photo/female-planning-environment-projects_23-2148829334.jpg", imageAlt: "Energieeffizienzsymbol" },
            { id: "s5", name: "Außenbeleuchtung", price: "Ab 300€", imageSrc: "http://img.b2bpic.net/free-photo/light-bulb-lamp_74190-1179.jpg", imageAlt: "Gartenbeleuchtung" },
            { id: "s6", name: "Gewerbeinstallationen", price: "Auf Anfrage", imageSrc: "http://img.b2bpic.net/free-photo/female-engineer-using-tablet-near-electrical-panel-technical-room-engineer-digital-monitoring_169016-71694.jpg", imageAlt: "Gewerbliche Elektroinstallation" }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          titleSegments={[{ type: "text", content: "Unsere Spezialgebiete" }]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Transparente Preisgestaltung für Ihre Projekte"
          description="Wählen Sie das passende Leistungspaket für Ihre Anforderungen. Alle Pakete sind anpassbar."
          plans={[
            { id: "p1", name: "Basis Installation", price: "299€", features: ["Standard Installationen", "Bis zu 3 Steckdosen/Lichter", "12 Monate Garantie", "An- und Abfahrt inklusive"], buttons: [{ text: "Jetzt anfragen", href: "#contact" }] },
            { id: "p2", name: "Komfort Paket", price: "599€", badge: "Beliebt", badgeIcon: Sparkles, features: ["Umfassende Installationen", "Bis zu 8 Steckdosen/Lichter", "24 Monate Garantie", "Smart Home Beratung", "Priorisierter Support"], buttons: [{ text: "Jetzt anfragen", href: "#contact" }] },
            { id: "p3", name: "Premium Service", price: "Ab 999€", features: ["Komplette Neuinstallationen", "Unbegrenzte Komponenten", "36 Monate Garantie", "Exklusive Beratung", "Notfall-Service 24/7"], buttons: [{ text: "Jetzt anfragen", href: "#contact" }] }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Unsere Partner und Referenzen"
          description="Wir sind stolz darauf, mit führenden Unternehmen und Einrichtungen zusammenzuarbeiten, um höchste Standards zu gewährleisten."
          names={["Immobilien AG", "Bauunternehmen X", "Stadthaus Verwaltung", "Grüner Wohnen", "Smart Solutions", "EnergieEffizienz GmbH", "LichtDesign Studios"]}
          textboxLayout="default"
          useInvertedBackground={true}
          speed={40}
          showCard={true}
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Häufig gestellte Fragen"
          sideDescription="Finden Sie hier schnelle Antworten auf die wichtigsten Fragen rund um unsere Elektroinstallationen und Dienstleistungen."
          faqs={[
            { id: "q1", title: "Welche Arten von Elektroinstallationen bieten Sie an?", content: "Wir bieten ein breites Spektrum an Dienstleistungen, darunter Neuinstallationen, Sanierungen, Wartung, Reparaturen, Smart Home Integration und Installation von E-Ladestationen für private und gewerbliche Kunden." },
            { id: "q2", title: "Sind Ihre Elektriker zertifiziert und versichert?", content: "Ja, all unsere Elektriker sind voll ausgebildete Fachkräfte mit den entsprechenden Zertifizierungen und langjähriger Erfahrung. Unser Unternehmen ist umfassend versichert, um Ihnen höchste Sicherheit zu gewährleisten." },
            { id: "q3", title: "Wie erhalte ich ein Angebot für mein Projekt?", content: "Sie können uns ganz einfach über unser Kontaktformular, telefonisch oder per E-Mail erreichen. Wir vereinbaren gerne einen Termin für eine kostenlose Beratung und erstellen Ihnen ein unverbindliches Angebot." },
            { id: "q4", title: "Bieten Sie auch Notfall-Services an?", content: "Für unsere Bestandskunden bieten wir einen Notfall-Service an. Bitte kontaktieren Sie uns bei dringenden Anliegen direkt telefonisch." }
          ]}
          faqsAnimation="slide-up"
          textPosition="left"
          useInvertedBackground={false}
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Dank Josef Kiermaier habe ich jetzt ein modernes Smart Home. Die Installation war tadellos und der Service superfreundlich. Absolut empfehlenswert!"
          rating={5}
          author="Laura Fischer, Smart Home Enthusiastin"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/businessman-with-bicycle-summer-city_1157-38211.jpg", alt: "Sarah Müller" },
            { src: "http://img.b2bpic.net/free-photo/stylish-businessman-with-arms-crossed_23-2147708158.jpg", alt: "Max Schmidt" },
            { src: "http://img.b2bpic.net/free-photo/smiling-mature-family-couple-visiting-daughter_1398-4698.jpg", alt: "Lena Schneider" },
            { src: "http://img.b2bpic.net/free-photo/skilled-businessman-his-office-desk-working-report-writing_482257-107893.jpg", alt: "Felix Weber" },
            { src: "http://img.b2bpic.net/free-photo/happy-businesswoman-her-coworkers-clapping-hands-meeting-office_637285-207.jpg", alt: "Anna Maier" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Kontaktieren Sie uns"
          title="Lassen Sie uns Ihr nächstes Projekt besprechen"
          description="Wir freuen uns darauf, Ihnen ein unverbindliches Angebot zu unterbreiten und alle Ihre Fragen zu beantworten."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/view-vibrant-city-night_52683-100068.jpg"
          imageAlt="Elektriker mit Werkzeugkasten und Bauplänen"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Ihre E-Mail-Adresse"
          buttonText="Jetzt anfragen"
          termsText="Durch das Klicken auf 'Jetzt anfragen' bestätigen Sie die Zustimmung zu unseren Geschäftsbedingungen."
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoText="Josef Kiermaier Elektroinstallationen"
          columns={[
            { title: "Leistungen", items: [{ label: "Smart Home", href: "#specialties" }, { label: "Reparaturen", href: "#features" }, { label: "Lichtsysteme", href: "#features" }, { label: "E-Ladestationen", href: "#specialties" }] },
            { title: "Unternehmen", items: [{ label: "Über Uns", href: "#about" }, { label: "Referenzen", href: "#social-proof" }, { label: "FAQs", href: "#faq" }, { label: "Preise", href: "#pricing" }] },
            { title: "Kontakt", items: [{ label: "Anfrage", href: "#contact" }, { label: "Impressum", href: "#" }, { label: "Datenschutz", href: "#" }] }
          ]}
          copyrightText="© 2024 Josef Kiermaier Elektroinstallationen. Alle Rechte vorbehalten."
        />
      </div>
    </ThemeProvider>
  );
}
