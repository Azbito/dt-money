import deposit from '../../assets/deposit.svg'
import withdraw from '../../assets/withdraw.svg'
import total from '../../assets/total.svg'

import { Container } from "./styles";
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {

  const { transactions } = useTransactions();

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'deposit') {
  //     return acc + transaction.amount;
  //    }
  //   return acc;
  //  }, 0);

  const summary = transactions.reduce((acc, transaction) => {
    console.log('aaa', acc, transaction)
    if (transaction.type === 'deposit') {
      acc.deposits += Number(transaction.amount);
      acc.total += Number(transaction.amount);
    } else {
      acc.withdraws += Number(transaction.amount);
      acc.total -= transaction.amount;
    }

    return acc;

  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  }


  )


  return (

    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={deposit} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={withdraw} alt="Saídas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.total)}</strong>
      </div>
    </Container >
  )
}
