import ProjectItem, { ProjectItemProps } from "@/components/ProjectItem";

const ListIndice = ({ projects }: { projects: ProjectItemProps[] }) => {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {projects?.map((item: ProjectItemProps, index) => (
        <ProjectItem {...item} key={index} />
      ))}
    </div>
  );
};

export default ListIndice;
