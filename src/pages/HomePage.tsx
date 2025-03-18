import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';
import Testimonial from '../components/Testimonial';
import ProcessSteps from '../components/ProcessSteps';
import SubscribeButton from '../components/SubscribeButton';

const HomePage = () => {
  const features = [
    {
      title: 'Interactive Assessment Map',
      description: 'Visualize contamination, flood, and wetland conditions for potential golf course sites.',
      icon: '🗺️'
    },
    {
      title: 'Site Analysis Reports',
      description: 'Get detailed reports on soil quality, drainage, and environmental factors.',
      icon: '📊'
    },
    {
      title: 'Field Verification',
      description: 'Confirm map data with on-site verification from our expert team.',
      icon: '🔍'
    }
  ];

  const processSteps = [
    {
      title: 'Search Location',
      description: 'Enter an address or coordinates to find your potential golf course site.',
      icon: '🔍'
    },
    {
      title: 'View Assessment Maps',
      description: 'Instantly see contamination, flood, and wetland condition overlays.',
      icon: '🗺️'
    },
    {
      title: 'Generate Report',
      description: 'Get a comprehensive site analysis report with actionable insights.',
      icon: '📄'
    },
    {
      title: 'Field Verification',
      description: 'Request on-site verification from our expert team (optional).',
      icon: '👨‍💼'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Preliminary Assessments for Course Development
            </h1>
            <p className="text-xl mb-8">
              Instantly access slopes, soils, flood zones, wetland data and more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/map">
                <Button variant="primary" size="lg">
                  Try Interactive Map
                </Button>
              </Link>
              <SubscribeButton variant="outline" size="lg" className="bg-white">
                Subscribe Now
              </SubscribeButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Golf Site Scout?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform provides essential assessment tools to help you make informed decisions about potential golf course sites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple process helps you assess potential golf course sites quickly and efficiently.
            </p>
          </div>
          
          <ProcessSteps steps={processSteps} />
          
          <div className="text-center mt-12">
            <Link to="/map">
              <Button variant="primary" size="lg">
                Try It Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from golf course architects and developers who use our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Testimonial
              quote="Golf Site Scout saved us thousands of dollars by identifying wetland issues before we purchased the property."
              author="Michael Johnson"
              role="Golf Course Architect"
              companyName="Johnson Design Group"
            />
            <Testimonial
              quote="The interactive maps are incredibly detailed and accurate. This tool has become essential for our initial site assessments."
              author="Sarah Williams"
              role="Development Director"
              companyName="Premier Golf Resorts"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe today and get instant access to our comprehensive environmental assessment maps.
          </p>
          <SubscribeButton variant="outline" size="lg" className="bg-white">
            Subscribe Now
          </SubscribeButton>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
