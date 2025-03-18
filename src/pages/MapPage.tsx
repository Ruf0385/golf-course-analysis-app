import React, { useState } from 'react';
import MapComponent from '../components/MapComponent';
import Button from '../components/Button';
import { MapLocation, GolfCourse } from '../types';
import { golfCourses } from '../data/golfCourses';

const MapPage: React.FC = () => {
  const [location, setLocation] = useState<MapLocation>({
    lat: 40.7128,
    lng: -74.006,
    zoom: 13
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate search delay
    setTimeout(() => {
      // This would be replaced with actual geocoding API
      console.log(`Searching for: ${searchQuery}`);
      setIsLoading(false);
      
      // For demo purposes, just move the map to a new location
      setLocation({
        lat: 40.7128 + (Math.random() * 0.1 - 0.05),
        lng: -74.006 + (Math.random() * 0.1 - 0.05),
        zoom: 14
      });
    }, 1000);
  };

  const handleCourseSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const courseId = e.target.value;
    setSelectedCourse(courseId);
    
    if (courseId) {
      const course = golfCourses.find(c => c.id === courseId);
      if (course) {
        setLocation(course.location);
        setSearchQuery(course.name);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Interactive Assessment Map</h1>
        <p className="text-lg text-gray-600 mb-6">
          Search for a location to view contamination, flood, and wetland conditions for potential golf course sites.
        </p>
        
        <div className="mb-6">
          <label htmlFor="course-select" className="block text-sm font-medium text-gray-700 mb-2">
            Select a Golf Course
          </label>
          <select
            id="course-select"
            value={selectedCourse}
            onChange={handleCourseSelect}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">-- Select a course --</option>
            {golfCourses.map(course => (
              <option key={course.id} value={course.id}>
                {course.name} - {course.address}
              </option>
            ))}
          </select>
        </div>
        
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter address or coordinates"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Button 
            type="submit" 
            variant="primary"
            disabled={isLoading}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </Button>
        </form>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 opacity-50 mr-2"></div>
            <span>Contamination Areas</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 opacity-50 mr-2"></div>
            <span>Flood Zones</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 opacity-50 mr-2"></div>
            <span>Wetland Areas</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-[600px]">
        <MapComponent location={location} />
      </div>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">About This Map</h2>
        <p className="text-gray-700 mb-4">
          This interactive map displays potential environmental conditions for golf course development. 
          The data is sourced from various government agencies and is updated regularly.
        </p>
        <p className="text-gray-700 mb-4">
          For a more detailed analysis, you can generate a comprehensive site report or request 
          field verification from our expert team.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Generate Site Report</Button>
          <Button variant="outline">Request Field Verification</Button>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
