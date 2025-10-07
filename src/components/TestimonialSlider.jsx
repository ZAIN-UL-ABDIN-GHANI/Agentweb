import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    text: "The AI agent instantly simplified my workflow. Meetings, reminders, and notes are handled automatically, leaving me more time to focus on priorities. It feels like having a reliable digital assistant working around the clock.",
    name: "Olivia M.",
    role: "Operations Lead",
    img: "https://i.pravatar.cc/100?img=11",
  },
  {
    text: "I love how seamlessly everything syncs across devices. My schedule, tasks, and updates stay consistent whether I’m on desktop or mobile. It’s like carrying a personal productivity manager everywhere I go.",
    name: "Michael T.",
    role: "Product Designer",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    text: "Before using this tool, I was always chasing deadlines. Now smart reminders and auto-scheduling keep me organized and stress-free. It’s a huge productivity upgrade without adding extra effort to my day.",
    name: "Sophia R.",
    role: "Team Coordinator",
    img: "https://i.pravatar.cc/100?img=13",
  },
  {
    text: "This AI agent saves me hours every week. From managing follow-ups to staying on top of projects, it handles the small stuff so I can concentrate on strategy and bigger business goals.",
    name: "Liam K.",
    role: "Startup Founder",
    img: "https://i.pravatar.cc/100?img=14",
  },
  {
  text: "Integrating this AI agent into our workflow was a game-changer. It anticipates tasks I might forget and provides timely nudges, keeping my team aligned and productive.",
  name: "Emma L.",
  role: "Project Manager",
  img: "https://i.pravatar.cc/100?img=15",
},
{
  text: "The AI assistant helps me prioritize what truly matters. It highlights urgent tasks and automates repetitive ones, which has dramatically reduced my daily stress levels.",
  name: "Noah S.",
  role: "Software Engineer",
  img: "https://i.pravatar.cc/100?img=16",
},
{
  text: "I appreciate how intuitive and proactive this AI agent is. From organizing meetings to summarizing notes, it feels like having an extra pair of hands at all times.",
  name: "Ava P.",
  role: "Marketing Lead",
  img: "https://i.pravatar.cc/100?img=17",
},
{
  text: "It’s like having a personal productivity coach in my pocket. Tasks, reminders, and collaborative updates are seamlessly handled without me lifting a finger.",
  name: "Ethan B.",
  role: "Business Analyst",
  img: "https://i.pravatar.cc/100?img=18",
},
{
  text: "This tool keeps our distributed team in sync effortlessly. Deadlines, progress updates, and task assignments are automatically tracked, saving us hours each week.",
  name: "Isabella W.",
  role: "Operations Manager",
  img: "https://i.pravatar.cc/100?img=19",
},

];

export default function Testimonials() {
  const swiperRef = useRef(null);
const styleBullets = useCallback(() => {
  const container = document.querySelector(".custom-pagination");
  if (!container) return;

  const bullets = Array.from(container.querySelectorAll(".swiper-pagination-bullet"));

  bullets.forEach((b) => {
    // base classes (keeps Swiper's class names + some spacing)
    b.className = "swiper-pagination-bullet inline-block w-3 h-3 rounded-full mx-2";

    // inline styles (immediate, reliable)
    b.style.backgroundColor = "#E6CCFF"; 
    b.style.transition = "transform 180ms ease, background-color 220ms ease";
    b.style.transform = "scale(1)";
    b.style.cursor = "pointer";

    // active state: override background + scale
    if (b.classList.contains("swiper-pagination-bullet-active")) {
      b.style.backgroundColor = "#9D00FF"; 
      b.style.transform = "scale(1.12)";
    }
  });
}, []);


  return (
    <section className=" text-white py-16 md:py-4 px-6 font-primary">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Users Say</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Discover how our platform is transforming workflows and making a real impact.
          From entrepreneurs to teams and professionals.
        </p>
      </div>

      {/* Swiper Container + Custom Pagination below */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          onSwiper={(sw) => {
            swiperRef.current = sw;
          
            setTimeout(styleBullets, 50);
          }}
          onSlideChange={() => {
    
            setTimeout(styleBullets, 20);
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            el: ".custom-pagination", 
            clickable: true,
            bulletClass: "swiper-pagination-bullet", 
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 }, // mobile
            768: { slidesPerView: 2 }, // md+ two cards per row
          }}
          className="w-full"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-purLight rounded-xl p-4 shadow-md h-full md:h-48 flex flex-col justify-between">
                {/* Testimonial Text */}
                <p className="text-black mb-6 text-left overflow-hidden text-ellipsis  md:line-clamp-4">
                  “{t.text}”
                </p>

                {/* User Info */}
                <div className="flex items-center gap-2 ">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border-2 border-pur"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-pur">{t.name}</p>
                    <p className="text-sm text-pur">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

    
        <div className="custom-pagination mt-8 flex justify-center items-center" />
      </div>
    </section>
  );
}
