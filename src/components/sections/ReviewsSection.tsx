export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="font-serif text-3xl md:text-4xl text-forest text-center mb-16"
          data-aos="fade-up"
        >
          Wat gasten zeggen
        </h2>
        {/*
          PRE-LAUNCH ACTION:
          1. Go to https://elfsight.com/google-reviews-widget/
          2. Connect Danny's Google Business Profile → copy the app class name
          3. Replace the class below with e.g. "elfsight-app-abc123..."
          4. Add to layout.tsx <head>:
             <script src="https://static.elfsight.com/platform/platform.js" defer />
        */}
        <div
          className="elfsight-app-REPLACE_WITH_DANNY_APP_ID"
          data-elfsight-app-lazy
          data-aos="fade-up"
        />
      </div>
    </section>
  )
}
