import { Link } from 'react-router-dom';

export type Breadcrumb = {
  name: string;
  link?: string;
};

export type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  const isBold = (index: number) => {
    return index == breadcrumbs.length - 1 ? 'font-semibold' : 'font-normal';
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex list-none p-0">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={index}
            className={`mr-8px flex items-center ${isBold(index)}`}
          >
            {breadcrumb.link ? (
              <Link to={breadcrumb.link}>
                <>{breadcrumb.name}</>
              </Link>
            ) : (
              <>{breadcrumb.name}</>
            )}
            {index < breadcrumbs.length - 1 && (
              <img
                src="/icons/icon_Header.svg"
                alt=""
                className="mx-2 w-full"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
