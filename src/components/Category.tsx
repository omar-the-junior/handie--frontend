interface CategoryProps {
  title: string;
  bgUrl: string;
}

const Category = ({ title, bgUrl }: CategoryProps) => {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl">
      <img
        className="h-full w-full rounded-md object-cover"
        src={bgUrl}
        alt={title}
      />
      <div className="absolute inset-0 rounded-md bg-[#453002] opacity-30"></div>
      <div className="absolute inset-0 flex h-full w-full items-center justify-center px-5">
        <h2 className="h3 text-center font-bold text-white">{title}</h2>
      </div>
    </div>
  );
};

export default Category;
