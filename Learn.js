import React from 'react';
import Typical from 'react-typical';

export default function Learn() {
  return (
    <div>
      <h1>
        {" "}
        <Typical
        loop={Infinity}
        steps={[
            "Hi Friends 😇",
            1000,
            "My Name is 📛",
            1000,
            "Raja Ganesh 👨",
            1000,
        ]}
        />
      </h1>
    </div>
  )
}
