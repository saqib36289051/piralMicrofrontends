import * as React from 'react';
import "./Page.scss";
import { useFetchHook } from './hooks/useFetchHook';

export default () => {
  const { data } = useFetchHook('/NocApplication/GetAllNOCApplication')
  return (
    <div>
      <h1>Applications</h1>
      {
        data?.map((item: any) => {
          return <div key={item.id} className='card'>
            <p>{item?.projectTitle}</p>
            <p>{item?.organizationName}</p>
            <p>{item?.applicationStatus}</p>
            <p>{item?.lastActionDate.substring(0, 10)}</p>
          </div>;
        })
      }

    </div>
  );
};
