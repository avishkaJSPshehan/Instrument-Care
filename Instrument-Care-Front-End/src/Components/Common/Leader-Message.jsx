import React, { useRef, useEffect, useState } from "react";

const cards = [
  {
    image: "src/assets/images/dg.jpg",
    title1: "Dr. S.R.S.N.Sudasinghe",
    title2: "Director General",
    title3: "National Science Foundation",
    description:
      "To strengthen the manufacturing community. To support new partnerships and to help manufacturers with emerging technology, To adopt sustainable solutions and transform their interventions allowing production industry in Sri Lanka, which has been lagging behind over the past years we NSF, expect that our initiative will augment the culture of entrepreneurship in our country. It can also provide solutions and learning opportunities to inspire the entrepreneurial minds in our country to build more businesses creating better opportunities. This in return will stimulate more efficient production of higher quality goods and services, on which our nation’s prosperity depends.",
  },
  {
    icon: "📈",
    title: "Growth Forecasting",
    description:
      "Forecast your business growth accurately using data-driven techniques.",
  },
  {
    icon: "💼",
    title: "Investment Strategies",
    description:
      "Explore diverse and smart investment options for small businesses.",
  },
  {
    icon: "🧾",
    title: "Expense Tracking Tips",
    description:
      "Best practices for monitoring and minimizing unnecessary expenses.",
  },
  {
    icon: "🔐",
    title: "Secure Transactions",
    description:
      "How to ensure all your digital transactions are safe and protected.",
  },
  {
    icon: "🕒",
    title: "Time Management for Teams",
    description:
      "Boost productivity by optimizing your team’s daily workflow.",
  },
];

export default function LeaderMessage() {
  const scrollRef = useRef(null);
  const cardRef = useRef(null);

  // Scroll horizontally by 3 cards every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
            });

            // Reset scroll if reached end
            if (
            scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
            scrollRef.current.scrollWidth
            ) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
            }
        }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

  return (
    <section className="relative py-12 px-4 sm:px-6 flex justify-center overflow-hidden">
      {/* Background image with blur overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('src/assets/images/hero-bg-2.png')`, // Replace with your actual image path
        }}
      >
        <div className="w-full h-full backdrop-blur-sm bg-white/50"></div>
      </div>

      {/* Foreground content */}
      <div className="max-w-[1300px] w-full relative z-10">
        <h2 className="text-xl sm:text-5xl font-semibold text-gray-900 mb-6 font-poppins text-center">
          Messages from Leading{" "}
          <span className="text-orange-400">Stakeholders</span>
        </h2>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              className="min-w-[380px] max-w-[380px] min-h-[520px] bg-white shadow-sm rounded-lg p-4 flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-72 bg-gray-100 flex items-center justify-center mb-4">
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title1 || card.title}
                      className="w-full h-72 object-contain"
                    />
                  ) : (
                    <span className="text-5xl">{card.icon}</span>
                  )}
                </div>
                <h3 className="text-md font-semibold text-gray-900 mb-2 leading-snug text-center">
                  {card.title1 && <>{card.title1}<br /></>}
                  {card.title2 && <>{card.title2}<br /></>}
                  {card.title3 && <>{card.title3}<br /></>}
                  {!card.title1 && card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed text-center">
                  {card.description}
                </p>
              </div>
              {/* Uncomment if you want a button again */}
              {/* <div className="mt-6">
                <button className="inline-flex items-center text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-700 px-4 py-2 rounded hover:opacity-90 transition">
                  Read More <span className="ml-2">→</span>
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
