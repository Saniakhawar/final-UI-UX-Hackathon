const card = [
  { name: 'card1', image: '/card-item1.png' },
  { name: 'card2', image: '/card-item2.png' },
  { name: 'card3', image: '/card-item3.png' },
  { name: 'card4', image: '/card-item4.png' },
  { name: 'card5', image: '/card-item5.png' },
];

export default function CardSection() {
  return (
    <section className="bg-gray-50 py-8 mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
        {card.map((card, index) => (
          <img
            key={index}
            src={card.image}
            alt={card.name}
            className="h-48 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
}
