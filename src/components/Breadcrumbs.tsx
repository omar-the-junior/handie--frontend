import React from 'react';
import { Link } from 'react-router-dom';

type Breadcrumb = {
  name: string; 
  link: string; 
};

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[]; 
};

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <nav aria-label="breadcrumb">
      <ol style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
            <Link to={breadcrumb.link}>
              <span>{breadcrumb.name.charAt(0).toUpperCase() + breadcrumb.name.slice(1)}</span>
            </Link>
            {index < breadcrumbs.length - 1 && (
              <img src="/icon_Header.svg" alt="" className="mx-2" style={{  maxWidth: '100%' }} />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
