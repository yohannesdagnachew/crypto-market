import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import DetailsRender from './DetailsRender';

export default function Details() {
  const file = useSelector((state) => state.list);
  return (
    <>
      <Link to="/">
        <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
      </Link>
      <div to className="all-detail">
        {
          file.map((item) => <DetailsRender key={item.id} List={item} />)
        }
      </div>
    </>
  );
}
