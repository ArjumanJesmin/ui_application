import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const AdminPage = () => {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        {/* <General /> */}
        <div className="grid gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-[32px] lg:h-[300px] mb-[32px]">
        <Card className="h-[300px]">Hello world</Card>
        <Card className="h-[300px]">Hello world</Card>
        <Card className="h-[300px]">Hello world</Card>
      </div>
    </div>
  );
};

export default AdminPage;
