import React from "react";
import { Tooltip } from "react-tooltip";
const CabinetTooltip = () => {
  return (
    <>
      <Tooltip id="my-tooltip">
        <div>
          <h3>Ознайомлення</h3>
          <p>Для доступу на дану платформу <br /> зверніться до менеджера з <br /> яким проводили перевезення.</p>
          <ul>
            <li>1.Можливість перегляду перевезення</li>
            <li>2.Контроль взаєморозрахунків онлайн</li>
            <li>3.Актуальні завантаження</li>
          </ul>
        </div>
      </Tooltip>
    </>
  );
};

export default CabinetTooltip;
