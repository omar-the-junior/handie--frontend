import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

interface HeaderProps {
  breadcrumbs: BreadcrumbsProps['breadcrumbs'];
  pageName?: string;
}

function Header({ breadcrumbs, pageName }: HeaderProps) {
  const currentPageName = pageName || breadcrumbs[breadcrumbs.length - 1].name;

  return (
    <div className="relative h-80 w-full">
      <img
        className="absolute h-full w-full object-cover object-center"
        src="/images/Header.png"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h1 className="h2 mt-4 text-center text-4xl font-semibold text-charcoal">
          {currentPageName}
        </h1>
      </div>
    </div>
  );
}

export default Header;
