interface CategoryProps {
  title: string;
  bgUrl: string;
}

const Category = ({ title, bgUrl }: CategoryProps) => {
  return (
    // here it make the w = 400 h = 500
    <div className="relative w-[400px] h-[500px] cursor-pointer overflow-hidden rounded-2xl md:w-96 md:h-[450px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(69, 48, 2, 0.30) 0%, rgba(69, 48, 2, 0.30) 100%), url(${bgUrl})`,
          backgroundColor: 'lightgray',
        }}
      ></div>
      <p className="absolute inset-0 flex items-center justify-center text-center text-5xl font-bold text-white">
        {title}
      </p>
    </div>
  );
};

export default Category;
