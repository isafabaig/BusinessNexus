import { FaSearch, FaRegLightbulb, FaClipboardList, FaDollarSign } from 'react-icons/fa';

export default function ServicesSection() {
  return (
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service 1: Investor Matching */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <FaSearch className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Investor Matching</h3>
          <p className="text-gray-600">
            We connect entrepreneurs with investors to create meaningful partnerships that drive success.
          </p>
        </div>

        {/* Service 2: Business Consulting */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <FaRegLightbulb className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Business Consulting</h3>
          <p className="text-gray-600">
            Our expert consultants provide tailored strategies to help your business grow and thrive in competitive markets.
          </p>
        </div>

        {/* Service 3: Project Management */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <FaClipboardList className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Project Management</h3>
          <p className="text-gray-600">
            We offer end-to-end project management services, ensuring timely and efficient execution of your business goals.
          </p>
        </div>

        {/* Service 4: Financial Planning */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <FaDollarSign className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Financial Planning</h3>
          <p className="text-gray-600">
            Our financial planning services help you secure your business&rsquo;s future with robust strategies for growth.
          </p>
        </div>
      </div>
    </div>
  );
}
