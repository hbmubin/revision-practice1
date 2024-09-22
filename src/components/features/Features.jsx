import { FaMobile } from "react-icons/fa";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<FaMobile />}
        ></Card>
        <Card
          title="Business Stratagy"
          des="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<FaMobile />}
        ></Card>
        <Card
          title="Business Stratagy"
          des="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<FaMobile />}
        ></Card>
        <Card
          title="Business Stratagy"
          des="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<FaMobile />}
        ></Card>
        <Card
          title="Business Stratagy"
          des="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<FaMobile />}
        ></Card>
        <Card
          title="Business Stratagy"
          des="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<FaMobile />}
        ></Card>
      </div>
    </section>
  );
};

export default Features;
