interface TestimonialCardProps {
  profileThumbnail: string
  fullName: string
  userName: string
  content: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  profileThumbnail,
  fullName,
  userName,
  content,
}) => {
  return (
    <article className="testimonialCard grid  max-w-[21.25rem] gap-4 rounded-lg bg-white p-6 shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)]">
      <header className="testimonialCard__header">
        <figure className="testimonialCard__summary flex gap-4">
          <img
            className="testimonialCard__avatar aspect-square w-12 object-contain"
            src={profileThumbnail}
            alt={`${fullName}'s avatar`}
          />
          <figcaption>
            <h3 className="testimonialCard__fullName text-lg font-semibold">
              {fullName}
            </h3>
            <p className="testimonialCard__userName text-sm">@{userName}</p>
          </figcaption>
        </figure>
      </header>
      <blockquote
        className="testimonialCard__content"
        aria-labelledby="testimonialContent"
      >
        <p id="testimonialContent">{content}</p>
      </blockquote>
    </article>
  )
}

export { TestimonialCard }