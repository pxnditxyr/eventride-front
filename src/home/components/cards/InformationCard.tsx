
interface IProps {
  title: string
  description: string
}

export const InformationCard = ( { title, description } : IProps ) => {
  return (
    <article className="flex flex-col items-center gap-4 bg-teal-400/20 p-8 rounded-lg backdrop-blur-lg max-w-96">
      <section className="flex flex-col items-center gap-4">
        <h3 className="text-2xl font-semibold text-pretty text-center"> { title } </h3>
      </section>
      <section className="flex flex-col items-center gap-4">
        <p
          className="text-lg text-white text-pretty text-justify"
        > { description } </p>
      </section>
    </article>
  )
}
