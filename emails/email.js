import { convertPriceToUAH } from "../utils/utils";
import moment from "moment"
import { renderToString } from 'react-dom/server'

export function createNewOrderEmail({ order, user = {}, rate, date, orderNumber }) {
  function renderTable() {
    return (
      <table style={ {
        fontFamily: "Arial, Helvetica, sans-serif",
        borderCollapse: "collapse",
        width: "90%"
      } }>
        <tr>
          <th style={ {
            border: "1px solid #ddd",
            padding: "8px",
            backgroundColor: "#138086",
            color: "#ffffff"
          } }>Артікул</th>
          <th style={ {
            border: "1px solid #ddd",
            padding: "8px",
            backgroundColor: "#138086",
            color: "#ffffff"
          } }>Найменування</th>
          <th style={ {
            border: "1px solid #ddd",
            padding: "8px",
            backgroundColor: "#138086",
            color: "#ffffff"
          } }>Ціна</th>
          <th style={ {
            border: "1px solid #ddd",
            padding: "8px",
            backgroundColor: "#138086",
            color: "#ffffff"
          } }>Кількість</th>
        </tr>
        { order.map(({ id, brand, title, price, amount, articleNumber }) => (
          <tr key={ id }>
            <td style={ {
              border: "1px solid #ddd",
              padding: "8px"
            } }>{ articleNumber }</td>
            <td style={ {
              border: "1px solid #ddd",
              padding: "8px"
            } }>Кондиціонер { brand } { title }</td>
            <td style={ {
              border: "1px solid #ddd",
              padding: "8px"
            } }>{ convertPriceToUAH(price, rate) }</td>
            <td style={ {
              border: "1px solid #ddd",
              padding: "8px"
            } }>{ amount }</td>
          </tr>))
        }
      </table>
    )
  }

  return renderToString(
    <div>
      <h2>Нове замовлення № { orderNumber }</h2>
      <p>Дата: { moment(date).format("D.MM.YYYY, HH:mm") }</p>
      <p>ПІБ: { user.lastName } { user.firstName }</p>
      <p>Телефон: { user.phone }</p>
      <p>Адреса: { user.city } { user.street }</p>
      <p>Курс: { rate }</p>
      { renderTable() }
    </div>
  );
};
