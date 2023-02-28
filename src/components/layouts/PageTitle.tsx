import LayoutContainer from "@/containers/layouts/LayoutContainer";

const PageTitle = () => {
  const { useHeaderTitle } = LayoutContainer.useContainer();
  const { title } = useHeaderTitle();
  return <h1 className="text-2xl font-semibold">{title}</h1>;
};

export default PageTitle;
