interface LandingPageBenefitProps {
  title: string;
  content: string;
  iconIdentifier: string;
}

export const LandingPageBenefit = ({
  title,
  content,
  iconIdentifier,
}: LandingPageBenefitProps) => {
  return (
    <article>
      <div className="flex gap-4">
        <span
          className={`iconify ${iconIdentifier} text-5xl text-primaryBackground flex-start-top`}
        />
        <div className="pt-1">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </article>
  );
};
