interface TestimonialProps {
  testimonial: {
    name: string;
    feedback: string;
  };
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
  return (
    <div
      style={{
        minWidth: 250,
        border: "1px solid var(--placeholder)",
        marginTop: "1rem",
        marginBottom: "1rem",
        marginRight: "1rem",
        borderRadius: 12,
        padding: "1rem",
      }}
    >
      <p style={{ fontWeight: "900" }}>{testimonial.name}</p>
      <p style={{ fontSize: "1rem" }}>{testimonial.feedback}</p>
    </div>
  );
};

export default Testimonial;
