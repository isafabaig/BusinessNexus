import { FaBullhorn, FaEye, FaHandshake } from 'react-icons/fa';

export default function AboutBusinessNexus() {
  return (
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">About Business Nexus</h2>

      {/* About Paragraph */}
      <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
        Business Nexus is a dynamic platform that connects entrepreneurs and investors, creating a collaborative ecosystem to foster innovation and growth. Our goal is to bridge the gap between visionaries and investors by offering a seamless, user-friendly environment where ideas are nurtured and partnerships are formed. Whether you're an entrepreneur seeking investment or an investor looking for the next big opportunity, Business Nexus is here to guide you every step of the way.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <FaBullhorn className="text-4xl text-blue-900 mb-4" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To empower entrepreneurs and investors by creating a seamless, collaborative platform that fosters growth and innovation.
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <FaEye className="text-4xl text-blue-900 mb-4" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To be the leading platform that bridges the gap between visionary entrepreneurs and forward-thinking investors worldwide.
          </p>
        </div>

        {/* Values */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <FaHandshake className="text-4xl text-blue-900 mb-4" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Our Values</h3>
          <ul className="text-gray-600">
            <li>Integrity - We uphold honesty and transparency in all dealings.</li>
            <li>Innovation - We believe in constantly pushing the boundaries to create better solutions.</li>
            <li>Collaboration - We value partnerships that foster mutual success.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
