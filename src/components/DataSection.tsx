import React from 'react';

interface DataItem {
  label: string;
  value: string | number;
}

interface DataSectionProps {
  title: string;
  data: DataItem[];
}

const DataSection: React.FC<DataSectionProps> = ({ title, data }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                  {item.label}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataSection;
