import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Appintment() {
  const { docID } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetcDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docID);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetcDocInfo();
  }, [doctors, docID]);

  return (
    docInfo && (
      <div>
        {/* Doctor details------------------------- */}
        <div>
          <div>
            <img src={docInfo.image} alt="DocImage" />
          </div>
          {/* Doctor Informations------------------------- */}
          <div>
            <p>{docInfo.degree}</p>
          </div>
        </div>
      </div>
    )
  );
}

export default Appintment;
