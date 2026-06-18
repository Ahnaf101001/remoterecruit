import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import JobBoardMockup from './components/JobBoardMockup'
import MembershipMockup from './components/MembershipMockup'
import ProfileMockup from './components/ProfileMockup'
import CTASection from './components/CTASection'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div id="top" className="bg-white">
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink focus:shadow-lg"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />

        <div id="features">
          <FeatureSection
            id="global-reach"
            eyebrow="Global Reach"
            title="The First Fully Global Job Board, Anywhere, Ever"
            body="RemoteRecruit connects candidates with opportunities around the world. With today's remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be."
            mockup={<JobBoardMockup />}
          />

          <FeatureSection
            id="fee-free"
            eyebrow="Actually Fee Free"
            title="Fee-Free Forever"
            body="We don't charge you fees and we don't put up paywalls. We're the bridge that connects job opportunities with the best candidates, with no middleman involved."
            mockup={<MembershipMockup />}
            reverse
          />

          <FeatureSection
            id="custom-profile"
            eyebrow="Custom Profile"
            title="Showcase Your Talent"
            body="Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates."
            mockup={<ProfileMockup />}
          />
        </div>

        <CTASection />

        <FAQ />

        <Pricing />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  )
}
