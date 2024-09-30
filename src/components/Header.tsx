import { Breadcrumbs } from './Breadcrumbs';

interface Breadcrumb {
  name: string;
  link: string;
}

interface HeaderProps {
  breadcrumbs: Breadcrumb[];
  pageName?: string;
}

function Header({ breadcrumbs, pageName }: HeaderProps) {
  const currentPageName = pageName || breadcrumbs[breadcrumbs.length - 1].name;

  return (
    <div className="relative h-[300px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm filter"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.35) 100%), url('/Header.png')",
        }}
      ></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <h1
          className="text-4xl font-bold"
          style={{
            color: '#000',
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
          }}
        >
          {currentPageName}
        </h1>
        <div className="mt-2 flex items-center text-sm">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <img src="/icon_Header.svg" alt="" className="mx-2" />
          <span
            style={{
              color: 'var(--Ink-Dark, #252A31)',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: '600',
              lineHeight: '16px',
            }}
          >
            {currentPageName}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
