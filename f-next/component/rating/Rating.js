import React from 'react';
import './Rating.css';

function Rating() {
  const progressData = [
    { value: 70, label: '1' },
    { value: 30, label: '2' },
    { value: 40, label: '3' },
    { value: 50, label: '4' },
    { value: 10, label: '5' },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <table className='table'>
            <tbody>
              <tr>
                <td>
                  <div className="col-md-4 col-sm-5">
                    <h2>Reviews</h2>
                    <button className="rating_circle">4.1</button>
                    <div className="stars-outer mt-4">
                      <div className="stars-inner" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </td>
                <td className='w-100'>
                  <table className='w-100'>
                    {progressData.map((item, index) => (
                      <tr key={index}>
                        <td className='w-100' style={{ padding: '15px' }}>
                          <div className="progress" style={{ height: '10px' }}>
                            <div className="progress-bar dark" style={{ width: `${item.value}%`, height: '10px' }}></div>
                          </div>
                        </td>
                        <td>{item.label}</td>
                      </tr>
                    ))}
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Rating;
