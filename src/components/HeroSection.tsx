
import { Button } from "@/components/ui/button";
import { Shield, Users, Building } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Local Government
                <span className="text-blue-700 block">Pension Portal</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Secure access to your pension information for Fire, Police, and LGPS members. 
                Manage your retirement benefits with confidence.
              </p>
            </div>

            {/* Scheme badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <Shield size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Fire Service</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <Users size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Police</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <Building size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-gray-700">LGPS</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-lg px-8 py-3">
                Access Your Pension
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                New Member Registration
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Trusted by pension schemes including:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• Lancashire County Council</div>
                <div>• London Pension Fund Authority</div>
                <div>• Ealing Pension Fund</div>
                <div>• West Yorkshire Pension Fund</div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=600"
                alt="Professional team meeting discussing pension planning"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Secure Access</p>
                  <p className="text-sm text-gray-600">Bank-level encryption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
