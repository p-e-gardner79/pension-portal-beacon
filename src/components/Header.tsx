
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">PensionPortal</h1>
              <p className="text-xs text-gray-600">Local Government Pensions</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex items-center gap-2">
              <UserPlus size={16} />
              Register
            </Button>
            <Button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800">
              <LogIn size={16} />
              Log In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
