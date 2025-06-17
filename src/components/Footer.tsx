
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PensionPortal</h3>
            <p className="text-gray-300 mb-4">
              Secure access to local government pension schemes for Fire, Police, and LGPS members.
            </p>
            <div className="text-sm text-gray-400">
              <p>Regulated by The Pensions Regulator</p>
              <p>Registration Number: TPR12345678</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Member Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Forms & Documents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Phone: 0300 123 4567</p>
              <p>Email: support@pensionportal.gov.uk</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 Local Government Pension Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
