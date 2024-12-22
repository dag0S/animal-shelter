import { Title } from "@/src/shared/ui";
import { FC } from "react";

export const Filters: FC = () => {
  return (
    <div>
      <div>
        <Title text="Возраст" />
      </div>
      <div>
        <Title text="Вид" />
      </div>
      <div>
        <Title text="Порода" />
      </div>
      <div>
        <Title text="Цвет" />
      </div>
      <div>
        <Title text="Темперамент" />
      </div>
      <div>
        <Title text="Статус" />
      </div>
    </div>
  );
};
