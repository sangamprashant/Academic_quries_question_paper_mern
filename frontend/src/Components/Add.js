import React, { useEffect, useState } from 'react';

const Add = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    // Replace 'sample.txt' with the path to your text file.
    fetch('/adss.txt')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Parse the response as text
      })
      .then((data) => {
        setText(data); // Update the state with the text content
      })
      .catch((error) => {
        console.error('Error fetching the text file:', error);
      });
  }, []);

  return (
    <div style={{marginTop:"100px"}}>
      <pre>{text}</pre>
    </div>
  );
}

export default Add;