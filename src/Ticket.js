import React from "react";
import './ticket.css'
import Aside from "./components/Aside";
import Aside2 from "./components/Aside2";
import Codeqr from "./components/Codeqr";
import { useState, useEffect } from "react";



function Ticket() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('formData');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
    }
  }, []);
  const [formData2, setFormData2] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('formData2');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData2(parsedData);
    }
  }, []);

  return (

    <div className="ticket">
      <div className="header">
        <div>نهج المدينة</div>
        <div>الخطوط الدولية</div>
        <div>تذكرة</div>
      </div>
      <div className="information">
        <div className="left">
          
        </div>
        <div className="right">
          <h3>معلومات الرحلة</h3>
          <h4>حجز عن طريق الواب</h4>
          <div className="infos">
            <div>
              <p>الجنسية</p>
              <p>{"touzriiyoooow"}</p>
            </div>
            <div>
              <p>اسم الراكب</p>
              <p>{"abdelhamid soltan khaled"}</p>
              <p></p>
            </div>
          </div>
          <div className="qrcode">
              <Codeqr />
          </div>
          </div>
      </div>
    </div>

  );
}
export default Ticket;