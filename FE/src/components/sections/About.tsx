const About = () => {
  return (
    <section
      id="about"
      className="section bg-gradient-to-br from-white via-slate-50 to-blue-50/40 py-20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-100/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Why Me?
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          A passionate Product Organizer with pragmatic leadership to drive
          community and business goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-blue-100/50 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Organization
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Creating clarity from ambiguity, using proven frameworks for
              predictable project outcomes and team success.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-blue-100/50 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Communication
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Bridging the gap between stakeholders and contributors with
              transparency, clarity, and strategic updates.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-blue-100/50 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Problem Solving
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Proactive identifying risks and implementing new and innovative
              solutions. Rapid learning with deep analytical thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
