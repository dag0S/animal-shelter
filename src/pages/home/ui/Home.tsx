import { Animal } from "@/src/entities/animal";
import { Filters } from "@/src/features/filters";
import { Container } from "@/src/shared/ui";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="pt-10">
      <Container>
        <div className="flex gap-5">
          <div className="w-[250px]">
            <Filters />
          </div>
          <Animal />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
