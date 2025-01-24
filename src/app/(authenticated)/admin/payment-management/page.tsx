import StatsCard from "@/components/Dashboard/StatsCard";
import AddPaymentGatewayCard from "@/components/PaymentManagement/AddPaymentGatewayCard";
import Earning from "@/components/PaymentManagement/Earning";
import Expense from "@/components/PaymentManagement/Expense";
import PaymentHistoryTable from "@/components/PaymentManagement/PaymentHistoryTable";
import PaymentStatisticsCard from "@/components/PaymentManagement/PaymentStatisticsCard";
import RefundRequest from "@/components/PaymentManagement/RefundRequest";
import RefundRequestTable from "@/components/PaymentManagement/RefundRequest";
import RevenueReport from "@/components/PaymentManagement/RevenueReport";
import StripeTransaction from "@/components/PaymentManagement/StripeTransactions";
import UpcomingPaymentTable from "@/components/PaymentManagement/UpcomingPaymentTable";
import {
  getFailedPaymentCount,
  getPaymentHistory,
  getRecurringRevenue,
  getRefundRequests,
  getTotalRevenue,
  getTransactionCount,
} from "@/resources/payment/payment.service";
import { extractError } from "@/utils/errors.utils";

export default async function PaymentManagement() {
  const requests = await getRefundRequests().catch((error) => {
    return extractError(error);
  });

  const [totalRevenue, recurringRevenue, transactionCount, failedPaymentCount] =
    await Promise.all([
      getTotalRevenue(),
      getRecurringRevenue(),
      getTransactionCount(),
      getFailedPaymentCount(),
    ]);

  const paymentHistory = await getPaymentHistory().catch((error) => {
    return extractError(error);
  });

  // console.log("paymentHistory", paymentHistory);

  return (
    <div>
      <div className="border-b border-[#E5E9EB] h-[76px] px-4 lg:px-8">
        <div className="flex items-center pt-[18px]">
          <p className="text-[#292D32] text-[24px] font-[600]">
            Payment Management
          </p>
        </div>
      </div>
      <div className="h-[calc(100vh-155px)] overflow-y-auto custom-layout pb-20">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
          <div>
            <StatsCard
              number={totalRevenue.amount / 100 || 0}
              bgColor={"#F0F5FF"}
              textColor={"#2377FC"}
              title={"Total Revenue"}
              small={true}
            ></StatsCard>
          </div>
          <div>
            <StatsCard
              number={recurringRevenue.amount / 100 || 0}
              bgColor={"#F0F5FF"}
              textColor={"#2377FC"}
              title={"Monthly Recurring Revenue"}
              small={true}
            ></StatsCard>
          </div>
          <div>
            <StatsCard
              number={transactionCount.count || 0}
              bgColor={"#F0F5FF"}
              textColor={"#2377FC"}
              title={"Total Transactions"}
              small={true}
            ></StatsCard>
          </div>
          <div>
            <StatsCard
              number={"N/A"}
              bgColor={"#F0F5FF"}
              textColor={"#2377FC"}
              title={"Refund Rate"}
              small={true}
            ></StatsCard>
          </div>
          <div>
            <StatsCard
              number={failedPaymentCount.count || 0}
              bgColor={"#F0F5FF"}
              textColor={"#2377FC"}
              title={"Failed Payments"}
              small={true}
            ></StatsCard>
          </div>
        </div>
        <div className="-mx-4 lg:-mx-8 w-[calc(100%+2rem)] lg:w-[calc(100%+4rem)]">
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 border-b border-t mt-6">
            <div className="border-r last:border-r-0 p-6">
              <Earning></Earning>
            </div>
            <div className="border-r last:border-r-0 p-6">
              <Expense></Expense>
            </div>
            <div className="p-6">
              <RevenueReport></RevenueReport>
            </div>
          </div>
        </div>
        <div className="flex mt-6">
          <p className="text-[#292D32] text-[20px] font-[600]">
            Payment Statistics (Not Integrated)
          </p>
        </div>
        <div className="mt-6 flex items-center gap-6">
          <PaymentStatisticsCard></PaymentStatisticsCard>
          <AddPaymentGatewayCard></AddPaymentGatewayCard>
        </div>
        <div className="mt-6">
          <StripeTransaction></StripeTransaction>
        </div>
        <div className="flex mt-6">
          <p className="text-[#292D32] text-[20px] font-[600]">
            Payment History
          </p>
        </div>
        <div className="mt-6">
          <PaymentHistoryTable history={paymentHistory}></PaymentHistoryTable>
        </div>
        <div className="flex mt-12">
          <p className="text-[#292D32] text-[20px] font-[600]">
            Upcoming Payments (Not Integrated)
          </p>
        </div>
        <div className="mt-6">
          <UpcomingPaymentTable></UpcomingPaymentTable>
        </div>
        <RefundRequest requests={requests} />
      </div>
    </div>
  );
}
