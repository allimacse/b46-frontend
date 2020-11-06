import React from 'react';
import { Form, Message, PriceList } from './components/index'

const prices = [
  {item: 'Shampoo', price: 78},
  {item: 'Roast beef', price: 26988},
  {item: 'Fish', price: 160},
  {item: 'Ice Cream', price: 88},
  {item: 'Rice', price: 1874},
  {item: 'Kawamon', price: 350},
]

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Hola a todos al app</h1>
      </header>
      <main>
        <div>
          <Message msg={'Hasta la vista Baby'} />
          <Message msg={'Nos vemos en el infierno, Jhonny'} />
          <Message msg={'LALALALALA'} />
        </div>
        <div>
          <PriceList prices={prices}/>
        </div>
        <div>
          <form>
            <Form></Form>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
