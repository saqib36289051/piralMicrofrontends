import * as React from 'react';
import "./Page.scss";
import Badge from './components/ui/Badge';
import { useFetchHook } from './hooks/useFetchHook';

export default () => {
  const { data } = useFetchHook('/Grievance')
  return (
    <div>
      <h1>Grievence desk</h1>
      {
        data?.map((item: any) => {
          return <div key={item.id} className='card'>
            <h6>{item?.userName}</h6>
            <div>
              {
                item?.types?.map(i => <Badge key={i.id}>
                  {
                    i?.takeCustomValue ? i?.customValue : i?.name
                  }</Badge>)
              }
            </div>
          </div>;
        })
      }

    </div>
  );
};
