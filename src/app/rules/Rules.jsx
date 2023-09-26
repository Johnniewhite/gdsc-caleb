import React from 'react';
import supabase from '../../../utils/api';

const Rules = async () => {
  // Fetch data from Supabase and store it in variables.
  const { data: rulesData } = await supabase.from('rules').select('id, rule, type');

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-32">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Rule</th>
                  <th scope="col" className="px-6 py-4">Type</th>
                </tr>
              </thead>
              <tbody>
                {rulesData.map((rule, index) => (
                  <tr
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    key={rule.id}
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{rule.rule}</td>
                    <td className="whitespace-nowrap px-6 py-4">{rule.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
