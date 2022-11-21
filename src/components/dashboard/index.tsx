import { Summary } from "../summary";
import { Container } from "./styles";
import { TransactionsTable } from "../transactionTable"

export function DashBoard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}