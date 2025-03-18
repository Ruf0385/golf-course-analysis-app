import React from 'react';
import Button from '../components/Button';
import ScoreGauge from '../components/ScoreGauge';
import SubscribeButton from '../components/SubscribeButton';

const SiteAnalysisPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Course Assessment</h1>
        <p className="text-lg text-gray-600 mb-6">
          Comprehensive analysis of potential golf course sites based on environmental, geological, and regulatory factors.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Sample Course Assessment</h2>
        <p className="text-gray-700 mb-6">
          Below is a sample assessment report for a potential golf course location. Our analysis combines data from
          multiple sources to provide a comprehensive evaluation of site suitability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Environmental Factors</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <p className="font-semibold">Wetlands</p>
                  <p className="text-sm text-gray-600">Minimal wetland areas, easily incorporated into design</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <p className="font-semibold">Protected Species</p>
                  <p className="text-sm text-gray-600">No endangered species habitat identified</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">⚠</span>
                <div>
                  <p className="font-semibold">Flood Potential</p>
                  <p className="text-sm text-gray-600">Moderate flood potential in southeastern portion</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <p className="font-semibold">Contamination</p>
                  <p className="text-sm text-gray-600">No contamination detected in preliminary assessment</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Geological Factors</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <p className="font-semibold">Soil Quality</p>
                  <p className="text-sm text-gray-600">Excellent soil composition for golf turf</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <p className="font-semibold">Topography</p>
                  <p className="text-sm text-gray-600">Gently rolling terrain, ideal for golf design</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <p className="font-semibold">Drainage</p>
                  <p className="text-sm text-gray-600">Natural drainage patterns support course layout</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">⚠</span>
                <div>
                  <p className="font-semibold">Erosion Potential</p>
                  <p className="text-sm text-gray-600">Moderate erosion potential on western slopes</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Regulatory Factors</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <p className="font-semibold">Zoning</p>
                  <p className="text-sm text-gray-600">Currently zoned for recreational use</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">⚠</span>
                <div>
                  <p className="font-semibold">Water Rights</p>
                  <p className="text-sm text-gray-600">Water rights available but may require negotiation</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <p className="font-semibold">Environmental Permits</p>
                  <p className="text-sm text-gray-600">Standard permits required, no major obstacles</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <p className="font-semibold">Local Support</p>
                  <p className="text-sm text-gray-600">Community generally supportive of development</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-xl font-bold mb-4">Overall Site Suitability</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <ScoreGauge score={85} maxScore={100} label="Overall Score" color="green" />
            <ScoreGauge score={90} maxScore={100} label="Environmental" color="green" />
            <ScoreGauge score={88} maxScore={100} label="Geological" color="green" />
            <ScoreGauge score={78} maxScore={100} label="Regulatory" color="yellow" />
          </div>
          <p className="text-gray-700">
            This site demonstrates excellent potential for golf course development with minimal environmental concerns
            and favorable geological characteristics. The moderate flood potential in the southeastern portion can be mitigated
            through proper design and drainage solutions. Regulatory factors are generally favorable, with standard permitting
            requirements and good community support. We recommend proceeding with a detailed field assessment to confirm
            these preliminary findings.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button variant="primary">Download Full Assessment (PDF)</Button>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Request a Course Assessment</h2>
        <p className="text-gray-700 mb-6">
          Our comprehensive course assessment combines data from multiple sources to evaluate the suitability of your potential
          golf course location. We analyze environmental, geological, and regulatory factors to provide a complete picture
          of development potential and considerations.
        </p>
        <div className="flex flex-wrap gap-4">
          <SubscribeButton variant="primary">Request Course Assessment</SubscribeButton>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default SiteAnalysisPage;
