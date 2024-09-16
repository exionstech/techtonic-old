import Features from "../components/Home/Features/Features";
import Hero from "../components/Home/Hero/Hero";
import Opportunity from "../components/Home/Opportunity/Opportunity";
import Wrapper from "../provider/wrapper";

const page = () => {
  return (
    <Wrapper>
      <Hero />
      <Features />
      <Opportunity />
    </Wrapper>
  );
};

export default page;
