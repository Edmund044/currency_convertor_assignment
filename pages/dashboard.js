import HomeNavBar from "../components/navbars/HomeNavbar";
import Transactions from "../components/tables/Transactions"
import BalanceCard from "../components/cards/BalanceCard"
export default function HomePage() {
    return (
      <div>
  
        <HomeNavBar />
        <BalanceCard />
        <Transactions />
       
      </div>
    );
  }