import Testimonial from "./Testimonial";

const testimonials = [
  {
    name: "Luke",
    feedback:
      "I’ve been struggling for years to find a D&D group in Reykjavík - Tengdu sounds like its going to make it much easier!",
  },
  {
    name: "Steinunn",
    feedback:
      "I love reading alone but sometimes it’s great to be able to discuss the twists and turns with someone. With Tengdu I finally think I might be able to find a book club that suits me.",
  },
  {
    name: "Sesar",
    feedback:
      "It's been a long time since I've been able to play a game of chess in person. I'm looking forward to finding a partner to play with.",
  },
];

const TestimonialList = () => {
  return (
    <section
      style={{
        width: "720px",
        maxWidth: "calc(100% - 2em)",
        margin: "2em auto",
        borderRadius: "8px",
        padding: "1em 1em",
      }}
      aria-label="Testimonials"
    >
      <h2>What people say</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "scroll",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialList;
