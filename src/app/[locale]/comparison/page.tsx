import ComparisonTable from "./components/ComparisonTable";
import CTASection from "./components/CTASection";

export default function ComparisonPage() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <ComparisonTable />
      <CTASection />
    </div>
  );
}
