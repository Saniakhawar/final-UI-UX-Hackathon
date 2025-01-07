import Image from "next/image";

const sponsors = [
  { name: "hooli", image: "/hooli.png" },
  { name: "Lyft", image: "/lyft.png" },
  { name: "lyft", image: "/lyft1.png" },
  { name: "Stripe", image: "/stripe.png" },
  { name: "AWS", image: "/aws.png" },
  { name: "hooli", image: "/hooli1.png" },
];

export default function SponsorsSection() {
  return (
    <section className="bg-gray-50 py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {sponsors.map((sponsor, index) => (
            <Image
              key={index}
              src={sponsor.image}
              alt={sponsor.name}
              width={100} // Adjust based on actual size
              height={50}  // Adjust based on actual size
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
