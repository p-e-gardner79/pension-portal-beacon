
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Calculator, Bell, Phone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "View Statements",
      description: "Access your annual benefit statements and contribution history anytime."
    },
    {
      icon: Calculator,
      title: "Pension Calculator",
      description: "Calculate your potential pension benefits and plan for retirement."
    },
    {
      icon: Bell,
      title: "Updates & Alerts",
      description: "Stay informed with important pension scheme updates and notifications."
    },
    {
      icon: Phone,
      title: "Support Center",
      description: "Get help from our dedicated pension administration team."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need to manage your pension
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our secure portal provides comprehensive tools and information for all your pension needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
