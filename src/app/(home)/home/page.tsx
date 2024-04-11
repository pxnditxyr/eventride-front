import { InformationCard } from '@/home'


const information = [
  {
    title: '¡Bienvenido a Bolivia en Grande!',
    description: 'Somos líderes en la provisión de servicios de transporte personalizados, integrando tecnología de punta para ofrecerte soluciones de movilidad seguras, eficientes y en tiempo real. Gracias a nuestra avanzada plataforma de geolocalización, te brindamos la tranquilidad y confianza que necesitas para tus viajes, eventos especiales y necesidades corporativas de transporte. Explora nuestra gama de servicios y descubre cómo podemos hacerte llegar a tu destino con el máximo confort y puntualidad.'
  }
]

export default function HomePage () {
  
  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold"> Bienvenido a Event Ride </h1>
      <div>
        {
          information.map( ( item ) => (
            <InformationCard
              key={ item.title }
              { ...item }
            />
          ))
        }
      </div>
    </main>
  )
}
