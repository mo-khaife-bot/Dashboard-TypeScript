import Card from "./Card";
import usersImage from "../../assets/icons/users-card.svg";
import activeUsersIcon from "../../assets/icons/active-users.svg";
import usersWithLoansIcon from "../../assets/icons/users-with-loans.svg";
import usersWithSavingIcon from "../../assets/icons/users-with-savings.svg";

type AnalyticsPropTypes = {
  activeUsers: string;
  usersWithLoan: string;
  usersWithSavings: string;
  totalNumberOfUsers: string;
};

const Analytics = ({
  activeUsers,
  usersWithLoan,
  usersWithSavings,
  totalNumberOfUsers,
}: AnalyticsPropTypes) => {
  return (
    <div className="analytics">
      <Card
        imgUrl={usersImage}
        status="users"
        numberOfUsers={totalNumberOfUsers}
      />
      <Card
        alt="active users"
        imgUrl={activeUsersIcon}
        status="active"
        numberOfUsers={activeUsers}
      />
      <Card
        imgUrl={usersWithLoansIcon}
        status="users with loan"
        numberOfUsers={usersWithLoan}
      />
      <Card
        imgUrl={usersWithSavingIcon}
        status="users with savings"
        numberOfUsers={usersWithSavings}
      />
    </div>
  );
};

export default Analytics;
