import { popularItems } from "@/data/menu";
import Button from "./Button";
import Container from "./Container";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

export default function PopularItems() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          eyebrow="Fan Favorites"
          title="Popular Items"
          description="Handpicked drinks and bites our regulars can't stop ordering."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="/menu" variant="secondary">
            View Full Menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
