import { convertPriceToUAH } from "../utils/utils";
import { renderToString } from 'react-dom/server'

export function createNewOrderEmail({ order, user={}, rate }) {
  function renderTable() {
    return (
      <table>
        <tr>
          <th>Найменування</th>
          <th>Ціна</th>
          <th>Кількість</th>
        </tr>
        { order.map(({ id, brand, title, price, amount }) => (
          <tr key={ id }>
            <td>Кондиционер { brand } { title }</td>
            <td>{ convertPriceToUAH(price, rate) }</td>
            <td>{ amount }</td>
          </tr>))
        }
      </table>
    )
  }

  return renderToString(
    <div>
      <h2>Нове замовлення</h2>
      <p>Замовник:</p>
      <p>ПІБ: { user.lastName } { user.firstName }</p>
      <p>Телефон: { user.phone }</p>
      <p>Адреса: { user.city } { user.street }</p>

      <p style={ { fontStyle: "bold" } }>Замовлення:</p>
      { renderTable() }
    </div>
  );
};
