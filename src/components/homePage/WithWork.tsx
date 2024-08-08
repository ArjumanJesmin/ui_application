import { Container, Icons, Wrapper } from "@/components";
import SectionBadge from "../ui/section-badge";
import { features, perks } from "@/constants";
const WithWork = () => {
  return (
    <Wrapper className="flex flex-col md:mx-auto items-center justify-center py-12 relative">
      <Container>
        <div className="max-w-md mx-auto text-start md:text-center">
          <SectionBadge title="The Process" />
          <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
            Three steps to build your dream website
          </h2>
          <p className="text-muted-foreground mt-6">
            Turn your vision into reality in just 3 simple steps
          </p>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
              >
                <div className="flex items-center justify-center">
                  <perk.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                <p className="text-muted-foreground mt-2 text-start lg:text-start">
                  {perk.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container className="max-w-md mx-auto text-start md:text-center">
        <SectionBadge title="Features" />
        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
          Discover our powerful features
        </h2>
        <p className="text-muted-foreground mt-6">
          AS offers a range of features to help you build a stunning websites in
          on time{" "}
        </p>
      </Container>
      <Container>
        <div className="flex items-center justify-center mx-auto mt-8">
          <Icons.feature className="w-auto h-80" />
        </div>
      </Container>
      <Container>
        <div className="flex items-center justify-center mx-auto py-10 md:py-20 w-full flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">
            {features.map((feature) => (
              // eslint-disable-next-line react/jsx-key
              <div
                key={feature.title}
                className="flex flex-col items-start px-0"
              >
                <feature.icon className="w-8 h-8" />
                <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
                <p className="text-muted-foreground mt-2 text-start">
                  {feature.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default WithWork;
